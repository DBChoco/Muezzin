var lang = "en";
var latin = new Boolean(true)
var translation = new Boolean(true)


window.addEventListener('DOMContentLoaded', () => { 
    loadQuranList();
    //loadSurah()
})

function generateVerse(number, arabText){
    let verseContainer = createDiv("verseContainer")

    var sidebarDiv = createDiv("sidebar")
    var surahNumberDiv = createDiv("surahNumber")
    var textContainerDiv = createDiv("textContainer")
    var arabTextDiv = createDiv("arabText")

    surahNumberDiv.innerHTML = number;
    arabTextDiv.innerHTML = arabText;

    sidebarDiv.appendChild(surahNumberDiv)
    textContainerDiv.appendChild(arabTextDiv)

    textContainerDiv.id = "textContainer" + number

    verseContainer.appendChild(sidebarDiv)
    verseContainer.appendChild(textContainerDiv)

    document.getElementById("reader").appendChild(verseContainer)
}



async function loadQuranList(){
    var chaptersList = document.getElementById("chaptersList")
    try{
        response = await fetch('https://api.quran.com/api/v4/chapters?language=en', {method: "GET"})
        .then(res => res.json())
        .then((json) => {
            console.log(json)
            for (let chapter of json["chapters"]){
                var option = document.createElement("option")
                option.id = chapter["chapter"];
                option.value = chapter["chapter"];
                option.innerText = "[" +  chapter["id"] + "] " + chapter["name_simple"] + " - " + chapter["name_arabic"];
                option.addEventListener("click", function(){
                    loadSurah(chapter["id"])
                })
                chaptersList.appendChild(option)
            }
        });
    }catch(e){}
}   

async function loadSurah(number){
    document.getElementById("reader").innerHTML = ""
    try{
        response = await fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=' + number + '', {method: "GET"})
        .then(res => res.json())
        .then((json) => {
            console.log(json)  
            for (let verse of json["verses"]){

                generateVerse(verse["verse_key"], verse["text_uthmani"])
            }
        });
    }catch(e){}

    if (latin || translation){
        try{
            response = await fetch('https://api.quran.com/api/v4/verses/by_chapter/' + number + '?language='+ lang + '&words=true&translations=131', {method: "GET"})
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                for (let verse of json["verses"]){
                    addLatinText(verse)
                    addTranslation(verse)
                }
            });
        }catch(e){}
    }
}

//Takes a verse made up of words and adds them separatly to the verseContainer
//Possibility to add mouseOver events later on.
function addLatinText(verse){
    var textContainerDiv = document.getElementById("textContainer" + verse["verse_key"])
    var latinTextDiv = createDiv("latinText")
    
    for (let word of verse["words"]){
        var wordDiv = document.createElement("span")
        wordDiv.innerText = word["transliteration"]["text"]
        latinTextDiv.appendChild(wordDiv)
        latinTextDiv.textContent += " "
    }
    textContainerDiv.appendChild(latinTextDiv) 
}

function addTranslation(verse){
    var textContainerDiv = document.getElementById("textContainer" + verse["verse_key"])
    var transTextDiv = createDiv("transText")
    transTextDiv.innerHTML = verse["translations"][0]["text"]
    textContainerDiv.appendChild(transTextDiv)
}

function createDiv(divClass){
    var divv = document.createElement("div");
    divv.classList.add(divClass);
    return divv;
}