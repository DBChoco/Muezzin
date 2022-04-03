var lang = "en";
var latin = new Boolean(true)
var translation = new Boolean(true)
var font, fontSize, wordByWord, wordTooltip, trans, audio;

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
}


//Loads the list of Surahs
//TODO: Make it local.
async function loadQuranList(){


    var chaptersList = document.getElementById("chaptersList")
    try{
        response = await fetch('https://api.quran.com/api/v4/chapters?language=' + lang , {method: "GET"})
        .then(res => res.json())
        .then((json) => {
            console.log(json)
            for (let chapter of json["chapters"]){
                console.log("surah ola")
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
    console.log("Loading Surah")
    document.getElementById("reader").innerHTML = ""
    var numberVerses = 0;
    try{
        response = await fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=' + number + '', {method: "GET"})
        .then(res => res.json())
        .then((json) => {
            console.log(json)  
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
    if (latin || translation){
        while (numberTranslated < numberVerses){
            try{
            response = await fetch('https://api.quran.com/api/v4/verses/by_chapter/' + number + '?language='+ trans[lang] + 
            '&words=true&translations=' + trans[trans]  + '&page=' + page, {method: "GET"})
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
        wordDiv.innerText = word["transliteration"]["text"]
        wordDiv.classList.add("wordLatin")
        latinTextDiv.appendChild(wordDiv)
    }
    textContainerDiv.appendChild(latinTextDiv) 
}


//Takes a verse and loads the translation to the textContainerDiv
function addTranslation(verse){
    var textContainerDiv = document.getElementById("textContainer" + verse["verse_key"])
    var transTextDiv = createDiv("transText")
    transTextDiv.innerHTML = verse["translations"][0]["text"]
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
    lang = await window.api.getFromStore('lang', 'en')
    //var font, fontSize, wordByWord, wordTooltip, trans, audio;
    var quran = await window.api.getFromStore('quran', {
        font: "dont know yet",
        fontsize: 24,
        wordByWord: {
            latin: new Boolean(true),
            trans: new Boolean(true)
        },
        wordTooltip: {
            latin: new Boolean(true),
            trans: new Boolean(true)
        },
        translation:{
            lang: en,
            trans: 131,
        },
        audio: "dont know yet"
    })
    font = quran[font]
    fontSize = quran[font-size]
    wordByWord = quran[wordByWord]
    wordTooltip = quran[wordTooltip]
    trans = quran[translation]
    audio = quran[audio]
}

function buttonListeners(){
    document.getElementById("settings").addEventListener("click", function(){
        window.location.assign("../settings/settings.html?page=quran");
    })

    document.getElementById("return").addEventListener("click", function(){
        window.location.assign("../main/index.html");
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