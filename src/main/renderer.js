var lat = 0;
var lon = 0;

var timezone, timeFormat, shortTimeFormat, lang, dateFormat;

var prayerTimes, calPrayers, tommorowPrayers, sunnahTimes, prayers;
var datePick, volume;
var loadedUI = false;
var langFajr, langSunrise, langDhuhr, langMaghrib, langIsha, langAdhan, langNow, langTimeUntil, selectedPrayer;
var sunnahTimes, motnCheckOG, totnCheckOG, totn, motn;
var athanProgress = 0;
var weatherSettings;


var loaded = true;
var event1 = new Event('loadedSettings')
var event2 = new Event('loadedUI')
loadHandles()
loadSettings()

window.api.send('prayers');


window.addEventListener('loadedSettings', () => { 
  loadBackgroundImage()
  
  loadClock();
  loadHijriDate();

  datePick = document.getElementById('calendar');
  loadCalendar()

  getTomorrowPrayers()
  loadPrayers()
  prayers = nextPrayer();

  setupWeather()

  loadFont()

  const interval = setInterval(function() {
    loadClock()
    loadNextPrayer()
    setProgress()
  }, 1000)
})

window.addEventListener('loadedUI', () => {
  volumeSlider()
  setKeyPress()
  setupButtonListeners()
  setupUpdateModal()

  setProgress()
  loadedUI = true;
  hideLoader()
  window.api.send('loadedUI');
})


function loadClock(){
  document.getElementById("clock").innerText = changeclockDisplay(new Date, timeFormat)
}


/**
 * Changes the format of the Date to a string (hours)
 * @param {Date} date 
 * @param {String} timeformat 
 */

function changeclockDisplay(date, timeformat){
  if (timeformat[0] == 'H'){
    if (timeformat[6] == 's'){
      return show0(date.getHours()) + ":" + show0(date.getMinutes()) + ":" + show0(date.getSeconds())
    }
    return show0(date.getHours()) + ":" + show0(date.getMinutes())
  }
  else{
    let amPm = date.getHours() < 12 ? 'am' : 'pm'
    if (amPm == 'am'){
      if (timeformat[6] == 's'){
        return show0(date.getHours()) + ":" + show0(date.getMinutes()) + ":" + show0(date.getSeconds()) + ' AM'
      }
      return show0(date.getHours()) + ":" + show0(date.getMinutes()) + ' AM'
    }
    else{
      if (timeformat[6] == 's'){
        return show0(date.getHours()%12 == 0 ? 12 : date.getHours()%12) + ":" + show0(date.getMinutes()) + ":" + show0(date.getSeconds()) + ' PM'
      }
      return show0(date.getHours()%12 == 0 ? 12 : date.getHours()%12) + ":" + show0(date.getMinutes()) + ' PM'
    }
  }

  /**
   * @param {Int} number 
   * @returns A string of the  0 + number if it is < than 12 
   */
  function show0(number){
    let res
    number < 10 ? res = "0" + number.toString() : res = number.toString()
    return res
  }

}

function loadHijriDate(){
  var hijri = true;
  document.getElementById("dateLoc").innerText = (new Date).toLocaleDateString(lang, 
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).capitalize()
  hijri = true;
  setInterval(function() {
    if (hijri){
      let hijriDay = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {day: 'numeric'}).format(Date.now())
      document.getElementById("dateLoc").innerHTML = loadMoonIcon(hijriDay) + "  " + new Intl.DateTimeFormat(lang + '-TN-u-ca-islamic', 
      {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now()).capitalize();
      hijri = false;
    }
    else{
      if (lang == "ur"){
        document.getElementById("dateLoc").innerText = ((new Date).toLocaleDateString("ar", 
          { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })).capitalize()
      }
      else{
        document.getElementById("dateLoc").innerText = ((new Date).toLocaleDateString(lang, 
          { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })).capitalize()
      }
      hijri = true;
    };
  }, 5000)
}

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    var upperCaseString = ''
    for (let i = 0; i < this.length; i ++){
      if (this.charAt(i) == ' ' && i != this.length-1){
        upperCaseString += ' ' + this.charAt(i+1).toUpperCase();
        i++
      }
      else{
        upperCaseString += this.charAt(i)
      }
    }
    res = upperCaseString.charAt(0).toUpperCase() + upperCaseString.slice(1);
    return res
  },
  enumerable: false
});

//Picks the date from the calendar and adds a listener to the calendar, when the dates changes it sends a reuquest for time prayers.
function loadCalendar(){
  Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  });
  datePick.value = new Date().toDateInputValue();
  //window.api.send('date-request', datePick.value);
  datePick.addEventListener('change', function(){
      window.api.send('date-request', datePick.value);
  })

  
  datePick.lang = lang

  function setupCalendarButton(){
    setCalendarButtonValue()
    calendarButton.addEventListener("click", function(){
      datePick.showPicker() //This is currently not supported.
    })
  }

  function setCalendarButtonValue(){
    let date = datePick.value.split("-")
    if (dateFormat == "DD/MM/YYYY") calendarButton.value = date[2] + "/" + date[1] + "/" + date[0]
  }
}

//Load all the prayers of the day and shows them on the screen
function loadPrayers(){
  if (datePick.value == new Date().toDateInputValue()){
    calPrayers = prayerTimes
  }
  if (calPrayers != undefined){
    document.getElementById("fajrTime").innerText = changeclockDisplay(calPrayers.fajr, shortTimeFormat);
    document.getElementById("sunriseTime").innerText = changeclockDisplay(calPrayers.sunrise, shortTimeFormat);
    document.getElementById("dhuhrTime").innerText = changeclockDisplay(calPrayers.dhuhr, shortTimeFormat);
    document.getElementById("asrTime").innerText = changeclockDisplay(calPrayers.asr, shortTimeFormat);
    document.getElementById("maghribTime").innerText = changeclockDisplay(calPrayers.maghrib, shortTimeFormat);
    document.getElementById("ishaTime").innerText = changeclockDisplay(calPrayers.isha, shortTimeFormat);
    if (sunnahTimes.totn && totn != undefined){
      document.getElementById("totnTime").innerText = changeclockDisplay(totn, shortTimeFormat);
    }
    if (sunnahTimes.motn && motn != undefined){
      document.getElementById("motnTime").innerText = changeclockDisplay(motn, shortTimeFormat);
    }
  }
}


//Checks the store for saved settings, or gets default values
async function loadSettings(){
    lat = await window.api.getFromStore('latitude', 0.00);
    lon = await window.api.getFromStore('longitude', 0.00);
    timezone = await window.api.getFromStore('timezone', 'US/Central');
    lang = await window.api.getFromStore('language', "en");
    volume = await window.api.getFromStore('volume', 50)

    darkmode = await window.api.getFromStore('darkMode', false)
    window.api.setTheme(darkmode, "styles.css");

    sunnahTimes = await window.api.getFromStore("sunnahTimes", {
      motn: false,
      totn: false
    })

    motnCheckOG = sunnahTimes.motn; totnCheckOG = sunnahTimes.totn;

    weatherSettings = await window.api.getFromStore('weather', {
      enabled: true,
      unit: "C"
    })

    loadLang()
    await hidePlayer()
    await loadClockDisplay()
    window.dispatchEvent(event1)
}

//Loads the next prayers text: Prayer X in Y time;
function loadNextPrayer(){
  prayers = nextPrayer()
  if (prayers[0] != undefined){
    var timeUntilCurrentPrayer = timeUntilPrayer(prayers[0])
    //console.log(timeUntilCurrentPrayer)
    //if (timeUntilNextPrayer[0] <= 0 && timeUntilNextPrayer[1] <= 0 && timeUntilNextPrayer[2] <= 3) prayers = nextPrayer();
    if (athanProgress != 0 && timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] >= -5){
      document.getElementById("timeLeft").innerText = langAdhan
    }
    else if(timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] >= -10){ //-1 because math.floor
        document.getElementById("timeLeft").innerText = langNow + ": " + prayers[2];
    }
    else{
      var timeUntilNextPrayer = timeUntilPrayer(prayers[1])
      if (lang != 'bn') document.getElementById("timeLeft").innerText = langTimeUntil + " " + prayers[3] + ": " + intToHour(timeUntilNextPrayer);
      else document.getElementById("timeLeft").innerText = prayers[3] + " " +  langTimeUntil + ": " + intToHour(timeUntilNextPrayer);
    }   
  } 
  if (!loadedUI){
    window.dispatchEvent(event2)
  }
}

function setProgress(){
  let porcent
  if (athanProgress != 0){
    porcent = athanProgress
  } else{
    let now = new Date()
    if (now >= prayers[0]) porcent = ((now - prayers[0]) /  (prayers[1] - prayers[0])) * 100;
    else porcent = ((((1000 * 60 * 60 * 24) - prayers[0].getTime()) + now.getTime()) /  (prayers[1] - prayers[0])) * 100;
  } 
  document.getElementById("prayerProgress").style.width = porcent + "%"
}

function nextPrayer(){
  var now = new Date();
  var currentPrayer, nextPrayer, currentName, nextName;
  if (prayerTimes != undefined && langFajr != undefined && tommorowPrayers != undefined){
    if (now >= prayerTimes.isha || now < prayerTimes.fajr){
      currentPrayer = prayerTimes.isha;
      nextPrayer = tommorowPrayers.fajr
      currentName = langIsha
      nextName = langFajr
    }
    else if (now >= prayerTimes.maghrib){
        currentPrayer = prayerTimes.maghrib;
        nextPrayer = prayerTimes.isha;
        currentName = langMaghrib
        nextName = langIsha
    }
    else if (now >= prayerTimes.asr){
        currentPrayer = prayerTimes.asr;
        nextPrayer = prayerTimes.maghrib;
        currentName = langAsr
        nextName = langMaghrib
    }
    else if (now >= prayerTimes.dhuhr){
        currentPrayer = prayerTimes.dhuhr;
        nextPrayer = prayerTimes.asr;
        currentName = langDhuhr
        nextName = langAsr
    }
    else if (now >= prayerTimes.fajr){
        currentPrayer = prayerTimes.fajr;
        nextPrayer = prayerTimes.dhuhr;
        
        currentName = langFajr
        nextName = langDhuhr
    }
    else{
        currentPrayer = prayerTimes.fajr;
        nextPrayer = prayerTimes.fajr;
        currentName = langFajr
        nextName = langFajr
    }
    if (selectedPrayer != nextName) selectPrayer(nextName)
    
    return [currentPrayer, nextPrayer, currentName, nextName]
  }
}

function selectPrayer(prayerName){
  selectedPrayer = prayerName
  var color = darkmode? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)"
  switch(prayerName){
    case langFajr:
      highlight("isha", "fajr")
      break;
    case langDhuhr:
      highlight("fajr", "dhuhr")
      break;
    case langAsr:
      highlight("dhuhr", "asr")
      break;
    case langMaghrib:
      highlight("asr", "maghrib")
      break;
    case langIsha:
      highlight("maghrib", "isha")
      break;
  }

  function highlight(previous, next){
    document.getElementById(previous + "Time").style.backgroundColor = "";
    document.getElementById(previous).style.backgroundColor = "";
    document.getElementById(previous + "Time").style.fontWeight = "normal";
    document.getElementById(previous).style.fontWeight = "normal";

    document.getElementById(next+"Time").style.backgroundColor = color;
    document.getElementById(next).style.backgroundColor = color;
    document.getElementById(next+"Time").style.fontWeight = "bold";
    document.getElementById(next).style.fontWeight = "bold";
  }

}

function timeUntilPrayer(prayer) {
  var now = new Date()
  if (prayer != undefined){
      return msToTime(prayer - now);
  }
  else{
      return null;
  }
}



function msToTime(duration){ //https://stackoverflow.com/questions/19700283/how-to-convert-time-in-milliseconds-to-hours-min-sec-format-in-javascript
  var seconds = Math.floor((duration / 1000) % 60) + 1,
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  if (seconds == 60){
    minutes ++;
    seconds = 00;
  }
  if (minutes == 60){
    hours ++;
    minutes = 00;
  }
  var res = [hours, minutes, seconds]
  return res;
}



function getTomorrowPrayers(){
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    window.api.send('tomorrow-request', tomorrow);
}



function intToHour(time){
    var hours = time[0];
    var minutes = time[1];
    var seconds = time[2];
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    if (timeFormat[6] != 's' && (hours > 0 || minutes > 0)){
      return hours + ":" + minutes
    }
    else{
      return hours + ":" + minutes + ":" + seconds
    }
}


function loadHandles(){
  window.api.handle('date-reply', msg => {
    calPrayers = msg;
    if (timezone != undefined){
      if (calPrayers.date.getDate() == new Date().getDate() && calPrayers.date.getMonth() == new Date().getMonth() && calPrayers.date.getFullYear() == new Date().getFullYear()){
        sunnahTimes.motn =  motnCheckOG;
        sunnahTimes.totn =  totnCheckOG;
      }
      else{
        sunnahTimes.motn = false;
        sunnahTimes.totn = false;
      }
      setupSunnah();
      loadPrayers();
    }
  })

  window.api.handle('prayersReply', msg => {
    prayerTimes = msg
    nextPrayer()
  })

  window.api.handle('tomorrow-reply', msg => {
    tommorowPrayers = msg
    setupSunnah()
  })
  window.api.handle('progress-reply', msg => {
    athanProgress = msg;
  })

  window.api.handle('update', msg => {
    loadSettings()
    window.api.send('prayers', "Send me the times please");
  })
}


//Loads time format (for now date format does nothing)
async function loadClockDisplay(){
  var clockDisplay = await window.api.getFromStore("timeDisplay", {
    clockFormat: 12,
    dateFormat: 'DD/MM/YYYY',
    showSeconds: true
  })
  dateFormat = clockDisplay.dateFormat
  timeFormat = "hh:mm"
  if (clockDisplay.showSeconds){
    timeFormat += ":ss"
  }
  if (clockDisplay.clockFormat == 12){
    timeFormat += " A"
  }
  else{
    timeFormat = timeFormat.replace("hh", 'HH')
  }
  shortTimeFormat = timeFormat.replace(":ss", "")
}


//Sets event listeners and IPCRenderers to make volume sliders work
function volumeSlider(){
  var volSlider = document.getElementById('volSlider');
  volSlider.value = volume
  volSlider.addEventListener('pointermove', function(){
    window.api.send('volume-request', volSlider.value);
  })
  volSlider.addEventListener('change', function(){
    window.api.send('volume-request', volSlider.value);
    window.api.setToStore('volume', volSlider.value)
  })
}


//Hides the media player in case the Adhan is disabled
async function hidePlayer(){
  var enableAdhan = await window.api.getFromStore('settings.adhanCheck', true)
  if (!enableAdhan){
    document.getElementById('audioControls').style.display = "none";
  }
}


/**
 * If a bgImage is set in the settings, it gets applied, otherwise it disables the shaders
 */ 
async function loadBackgroundImage(){
  var bgImage = await window.api.getFromStore('bgImage', [true, '../../ressources/images/bgImage.jpg'])
  if (bgImage[0]){
    document.body.style.backgroundImage = "url('" + bgImage[1] + "')"; 
  }
  else{
    var shaders = document.getElementsByClassName("shader")
    for (let element of shaders){
      element.style.backgroundColor = "transparent"
    }
    document.body.style.backgroundImage = "none"; 
  }
}


/**
*Adds listener that brings you to the settings page when you press "Crtl + O"
*/
function setKeyPress(){
  var crtl = false;
  document.addEventListener('keydown', function(key){
    if (key.ctrlKey){
      crtl = true;
    }
    if ((key.key == "o" || key.key == "O") && crtl){
      window.location.assign("../settings/settings.html");
    }
  })
  document.addEventListener('keyup', function(key){
    if (key.ctrlKey){
      crtl = false;
    }
  })
}

function hideLoader(){
  document.getElementById('loader').style.display = "none"
}

function loadLang(){
  langFajr =  window.api.getLanguage(lang, 'fajr')
  langSunrise =  window.api.getLanguage(lang, 'sunrise')
  langDhuhr = window.api.getLanguage(lang, 'dhuhr')
  langAsr= window.api.getLanguage(lang, 'asr')
  langMaghrib = window.api.getLanguage(lang, 'maghrib')
  langIsha = window.api.getLanguage(lang, 'isha')
  langAdhan = window.api.getLanguage(lang, 'adhan')
  langNow = window.api.getLanguage(lang, 'now')
  langTimeUntil = window.api.getLanguage(lang, 'timeUntil')
  document.getElementById('fajr').innerText = langFajr
  document.getElementById('sunrise').innerText = langSunrise
  document.getElementById('dhuhr').innerText = langDhuhr
  document.getElementById('asr').innerText = langAsr
  document.getElementById('maghrib').innerText = langMaghrib
  document.getElementById('isha').innerText = langIsha
  document.getElementById('settingsWheel').innerHTML = '<i class="fa fa-cog" aria-hidden="true"></i>  ' +  window.api.getLanguage(lang, 'settings')
  document.getElementById('motn').innerText = window.api.getLanguage(lang, 'motn')
  document.getElementById('totn').innerText = window.api.getLanguage(lang, 'totn')
  document.getElementById('quranButton').innerHTML = '<i class="fa-solid fa-book-quran"></i>  ' + window.api.getLanguage(lang, 'quran')
}

function setupButtonListeners(){
  document.getElementById('playB').addEventListener("click", function(){
    window.api.send("play");
  })
  document.getElementById('stopB').addEventListener("click", function(){
    window.api.send("stop");
  })
  document.getElementById('settingsWheel').addEventListener("click", function(){
    window.api.send("settingsO");
    window.location.href = "../settings/settings.html";
  })
  document.getElementById('quranButton').addEventListener("click", function(){
    window.location.href = "../quran/quran.html";
  })
}

function setupSunnah(){
  if (prayerTimes != undefined && tommorowPrayers != undefined){

    if (sunnahTimes.motn || sunnahTimes.totn){
      calculateSunnah()
      document.getElementById("box").style.marginTop = "0"
      if (sunnahTimes.motn && sunnahTimes.totn) document.getElementById("clock").style.marginTop = "1vh";
      else document.getElementById("clock").style.marginTop = "2.5vh";
    }
    else {
      document.getElementById("clock").style.marginTop = "3.5vh"
      document.getElementById("box").style.marginTop = "1.5vh"
    }

    var motnDiv = document.getElementsByClassName("motn");
    if (sunnahTimes.motn){
      for (element of motnDiv){
        element.style.display = "block"
      }
    }
    else{
      for (element of motnDiv){
        element.style.display = "none"
      }
    }

    var totnDiv = document.getElementsByClassName("totn");
    if (sunnahTimes.totn){
      for (element of totnDiv){
        element.style.display = "block"
      }
    }
    else{
      for (element of totnDiv){
        element.style.display = "none"
      }
    }
  }
}

function calculateSunnah(){
  const nightDuration = (tommorowPrayers.fajr.getTime() - prayerTimes.maghrib.getTime());
  //motn = intToHour(msToTime(prayerTimes.maghrib.getTime() +  nightDuration / 2));
  //totn = intToHour(msToTime(prayerTimes.maghrib.getTime() +  nightDuration * (2 / 3);
  motn = new Date(prayerTimes.maghrib.getTime() +  nightDuration / 2);
  totn = new Date(prayerTimes.maghrib.getTime() +  nightDuration * (2 / 3));
  if (sunnahTimes.totn || sunnahTimes.motn){
    loadPrayers()
  }
}


/**
 * Sets up the update availible modal
 */
function setupUpdateModal(){
  var myModal = new bootstrap.Modal(document.getElementById('updateModal'), {
  })

  var modalButton1 = document.getElementById('modalButton1')
  var modalButton2 = document.getElementById('modalButton2')
  var modalClose = document.getElementById('modalClose')

  window.api.handle('update-available', msg => {
    /*modalTitle.innerText = window.api.getLanguage(lang, 'updateAvalible')
    modalBody.innerText = window.api.getLanguage(lang, 'downloadSoon')
    modalButton1.innerText = window.api.getLanguage(lang, 'ok')*/

    document.getElementById("updateModalLabel").innerText = window.api.getLanguage(lang, 'updateAvailable')
    document.getElementById('modalBody').innerText = window.api.getLanguage(lang, 'version') + " " + msg[1] + " " + window.api.getLanguage(lang, 'available')
    modalButton1.innerText = window.api.getLanguage(lang, 'download')
    modalButton2.innerText = window.api.getLanguage(lang, 'later')

    modalButton1.addEventListener("click", function(){
      window.api.openExternal("https://github.com/DBChoco/Muezzin/releases/latest")
    })
    modalButton2.addEventListener("click", function(){
      myModal.hide()
    })
    modalClose.addEventListener("click", function(){
      myModal.hide()
    })
    
    myModal.show()
  })
}

/**
 * Checks if the weather is enabled, if so, sends api request and shows weather. 
 * Then starts a timer that reloads the weather every 15m
 */
async function setupWeather(){
  if (weatherSettings.enabled){
    let units, system;
    switch (weatherSettings.units){
      case "K": 
        units = "°K"
        system = "standard"
        break;
      case "F": 
        units = "°F"
        system = "imperial"
        break;
      default:
        units = "°C"
        system = "metric"
    }
    getWeather(units, system);
    setInterval(function(){
      getWeather(units, system)
    }, 900000) // 15min
  }
}

/**
 * Sends api request for weather
 * @param {*} units 
 * @param {*} system 
 */
async function getWeather(units, system){
  try{
    response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=' + system + '&appid=d8c0aa0e61cf524575a92e44d457ded7', {method: "GET"})
    .then(res => res.json())
    .then((json) => {
      let time
      json["weather"][0]["icon"].charAt(json["weather"][0]["icon"].length - 1) == 'd' ? time = "day" : time = "night"
      
      document.getElementById("weatherTemp").innerHTML = loadWeatherIcon(json["weather"][0]["id"], time) + " " + Math.round(json["main"]["temp"]) + units
    });
    }catch(e){
        console.error("Error while loading weather => " + e)
    }
}

/**
 * @param {Int} weather Id of the weather situation
 * @param {String} time Day or night
 * @returns An HTML string which contains a weather icon
 */
function loadWeatherIcon(weather, time = "day"){
  if (weather == 210 || weather == 211 || weather == 212 || weather == 221) return '<i class="wi wi-lightning"></i>'
  else if (weather >= 200 && weather <= 232) return '<i class="wi wi-storm-showers"></i>'
  else if (weather >= 300 && weather < 321) return '<i class="wi wi-rain"></i>'
  else if (weather >= 500 && weather <= 504) return '<i class="wi wi-rain"></i>'
  else if (weather == 511) return '<i class="wi wi-snowflake-cold'
  else if (weather >= 520 && weather <= 531) return '<i class="wi wi-showers"></i>'
  else if (weather >= 600 && weather <= 622) return '<i class="wi wi-snow"></i>'

  else if (weather == 701 || weather == 741) return '<i class="wi wi-fog"></i>'
  else if (weather == 711 || weather == 731 || weather == 751 || weather == 761) return '<i class="wi wi-dust"></i>'
  else if (weather == 721) return '<i class="wi wi-smog"></i>'
  else if ( weather == 771 || weather == 781 || weather == 900) return '<i class="wi wi-tornado"></i>'

  else if (weather == 762) return '<i class="wi wi-volcano"></i>'
  else if (weather == 800 || weather == 951){
    if (time == "day") return '<i class="wi wi-day-sunny"></i>'
    else return '<i class="wi wi-night-clear"></i>'
  }
  else if (weather == 801){
    if (time == "day") return '<i class="wi wi-day-cloudy"></i>'
    else return '<i class="wi wi-night-alt-cloudy"></i>'
  }
  else if (weather == 802) return '<i class="wi wi-cloud"></i>'
  else if (weather == 803) return '<i class="wi wi-cloudy"></i>'
  else if (weather == 804) return '<i class="wi wi-cloudy"></i>'
 
  else return '<i class="wi wi-na"></i>'
}

/**
 * Depending on the hijri day, it loads the icon moon
 * @param {String} day 
 * @returns '<i class="wi wi-whatever-moon"></i>'
 */
function loadMoonIcon(day){
  switch (day){
    case "1":
      return '<i class="wi wi-moon-new"></i>'
    case "2":
        return '<i class="wi wi-moon-waxing-crescent-1"></i>'
    case "3":
      return '<i class="wi wi-moon-waxing-crescent-2"></i>'
    case "4":
      return '<i class="wi wi-moon-waxing-crescent-3"></i>'
    case "5":
      return '<i class="wi wi-moon-waxing-crescent-4"></i>'
    case "6":
      return '<i class="wi wi-moon-waxing-crescent-5"></i>'
    case "7":
      return '<i class="wi wi-moon-waxing-crescent-6"></i>'
    case "8":
      return '<i class="wi wi-moon-first-quarter"></i>'
    case "9":
      return '<i class="wi wi-moon-waxing-gibbous-1"></i>'
    case "10":
      return '<i class="wi wi-moon-waxing-gibbous-2"></i>'
    case "11":
      return '<i class="wi wi-moon-waxing-gibbous-3"></i>'
    case "12":
      return '<i class="wi wi-moon-waxing-gibbous-4"></i>'
    case "13":
      return '<i class="wi wi-moon-waxing-gibbous-5"></i>'
    case "14":
      return '<i class="wi wi-moon-waxing-gibbous-6"></i>'
    case "15":
      return '<i class="wi wi-moon-full"></i>'
    case "16":
      return '<i class="wi wi-moon-waning-gibbous-1"></i>'
    case "17":
      return '<i class="wi wi-moon-waning-gibbous-2"></i>'
    case "18":
      return '<i class="wi wi-moon-waning-gibbous-3"></i>'
    case "19":
      return '<i class="wi wi-moon-waning-gibbous-4"></i>'
    case "20":
      return '<i class="wi wi-moon-waning-gibbous-5"></i>'
    case "21":
      return '<i class="wi wi-moon-waning-gibbous-6"></i>'
    case "22":
      return '<i class="wi wi-wi-moon-third-quarter"></i>'
    case "23":
      return '<i class="wi wi-moon-waning-crescent-1"></i>'
    case "24":
      return '<i class="wi wi-moon-waning-crescent-2"></i>'
    case "25":
      return '<i class="wi wi-moon-waning-crescent-3"></i>'
    case "26":
      return '<i class="wi wi-moon-waning-crescent-4"></i>'
    case "27":
      return '<i class="wi wi-moon-waning-crescent-5"></i>'
    case "28":
      return '<i class="wi wi-moon-waning-crescent-6"></i>'
    case "29":
      return '<i class="wi wi-moon-waning-crescent-6"></i>'
    case "30":
      return '<i class="wi wi-moon-new"></i>'
  }
}

function loadFont(){
  if (lang != "ar" && lang != "bn"){
    document.body.style.fontFamily = 'quicksand'
  }
}