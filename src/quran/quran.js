var lang;
var quran;

window.addEventListener('DOMContentLoaded', () => { 
    loadSettings()
    buttonListeners();
    loadQuranList();
    //Make initial greeter when no Surahs are loaded
    //Add settings
})

//Generates the div for 1 single verse.
//Calls the functio to generate the arabText as well
function generateVerse(number, arabText){
    let verseContainer = createDiv("verseContainer")

    var sidebarDiv = createDiv("sidebar")
    var verseNumberDiv = createDiv("verseNumber")
    var textContainerDiv = createDiv("textContainer")
    var arabTextDiv = createDiv("arabText")

    verseNumberDiv.innerHTML = number;

    generateArabText(arabTextDiv, arabText, number.split(":")[1])

    sidebarDiv.appendChild(verseNumberDiv)
    textContainerDiv.appendChild(arabTextDiv)

    textContainerDiv.id = "textContainer" + number

    verseContainer.appendChild(sidebarDiv)
    verseContainer.appendChild(textContainerDiv)

    document.getElementById("reader").appendChild(verseContainer)
}


//Takes the div and the text, divides the text into divs and puts them into the mother div
function generateArabText(arabTextDiv, arabText, verseNumber){
    var arabWords = arabText.split(" ");
    for (let word of arabWords){
        wordDiv = document.createElement("div");
        wordDiv.classList.add("word")
        wordDiv.innerText = word;
        arabTextDiv.appendChild(wordDiv)
    }
    wordDiv = document.createElement("div");
    wordDiv.classList.add("word")
    wordDiv.innerText = new Intl.NumberFormat('ar-SA').format(verseNumber)
    arabTextDiv.appendChild(wordDiv)
    arabTextDiv.style.fontSize = quran.fontsize +"px";
    console.log(quran.fontsize)
}


//Loads the list of Surahs
//TODO: Make it local.
async function loadQuranList(){


    var chaptersList = document.getElementById("chaptersList")
    try{
        response = await fetch('../../ressources/quran/chapters.json')
        .then(res => res.json())
        .then((json) => {
            for (let chapter of json["chapters"]){
                var option = document.createElement("option")
                option.value = chapter["id"];
                option.innerText = "[" +  chapter["id"] + "] " + chapter["name_simple"] + " - " + chapter["name_arabic"];
                
                chaptersList.appendChild(option)
            }
            chaptersList.addEventListener("change", function(){
                loadSurah(chaptersList.options[chaptersList.selectedIndex].value)
            })
        });
    }catch(e){
        console.error("Error while loading list of Surahs" + e)
    }
}   

//When selecting a Surah, this is launched.
//Calls the apis for the arabText, latins and translations and applies them.
async function loadSurah(number){
    console.debug("Loading Surah n°" + number)
    document.getElementById("reader").innerHTML = ""
    var numberVerses = 0;
    try{
        response = await fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=' + number + '', {method: "GET"})
        .then(res => res.json())
        .then((json) => {
            console.debug(json)  
            for (let verse of json["verses"]){
                generateVerse(verse["verse_key"], verse["text_uthmani"])
                numberVerses ++;
            }
        });
    }catch(e){
        console.error("Couldn't load the Surah: " + e)
    }

    var numberTranslated = 0;
    var page = 1;
    if (quran.transliteration.show || quran.translation.show){
        while (numberTranslated < numberVerses){
            try{
            response = await fetch('https://api.quran.com/api/v4/verses/by_chapter/' + number + '?language='+ quran.translation.lang + 
            '&words=true&translations=' + quran.translation.trans  + '&page=' + page, {method: "GET"})
            .then(res => res.json())
            .then((json) => {
                for (let verse of json["verses"]){
                    addLatinText(verse)
                    addTranslation(verse)
                    numberTranslated ++;
                }
                page++
            });
            }catch(e){
                console.error("Couldn't load the translation: " + e)
            }
        }
    }
}

//Takes a verse made up of words and adds them separatly to the verseContainer
//Possibility to add mouseOver events later on.
function addLatinText(verse){
    var textContainerDiv = document.getElementById("textContainer" + verse["verse_key"])
    var latinTextDiv = createDiv("latinText")
    
    for (let word of verse["words"]){
        var wordDiv = document.createElement("div")
        wordDiv.classList.add("wordLatin")
        wordDiv.innerText = word["transliteration"]["text"]
        latinTextDiv.appendChild(wordDiv)
    }
    latinTextDiv.style.fontSize = quran.transliteration.fontsize + "px";
    textContainerDiv.appendChild(latinTextDiv)
}


//Takes a verse and loads the translation to the textContainerDiv
function addTranslation(verse){
    var textContainerDiv = document.getElementById("textContainer" + verse["verse_key"])
    var transTextDiv = createDiv("transText")
    transTextDiv.innerHTML = verse["translations"][0]["text"]
    transTextDiv.style.fontSize = quran.translation.fontsize + "px";
    console.log(quran.translation.fontsize + +"px")
    textContainerDiv.appendChild(transTextDiv)
}


//Creates a div with the class name = divClass
function createDiv(divClass){
    var divv = document.createElement("div");
    divv.classList.add(divClass);
    return divv;
}

//Loads all the necessary settings
async function loadSettings(){
    lang = await window.api.getFromStore('language', 'en')
    translate()
    
    quran = await window.api.getFromStore('quran', {
        fontsize: 42,
        translation:{
            show: true,
            lang: {
              enabled: false,
              lang: "en"
            },
            trans: 131,
            fontsize: 14
        },
        transliteration:{
            show: true,
            fontsize: 14
        },
    })

    var darkmode = await window.api.getFromStore('darkMode', false)
    window.api.setTheme(darkmode, "quran.css");
}

function buttonListeners(){
    document.getElementById("settings").addEventListener("click", function(){
        window.location.assign("../settings/settings.html?page=quran");
    })

    document.getElementById("return").addEventListener("click", function(){
        window.location.assign("../main/index.html");
    }) 

    document.getElementById("toTheTop").addEventListener("click", function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}

//Does not work yet, I'll have to work on this one.
function downloadOrFetch(link, path, filename){
    var absolutePath = appDataPath + path
    var file = new File(absolutePath + filename)

    if (file.exists()){
        console.log("yes")
    }

    else{
        window.api.send("download", {
        url: link,
        properties: {
            directory: absolutePath,
            filename: filename
            }
        });
    }
}

function translate(){
    document.getElementById("title").innerHTML = window.api.getLanguage(lang, "quran");
    document.getElementById("settings").innerHTML = '<i class="fa-solid fa-gear"></i>  ' + window.api.getLanguage(lang, "settings");
    document.getElementById("return").innerHTML = '<i class="fa fa-arrow-circle-left"></i>    ' + window.api.getLanguage(lang, "return");
}