// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var lat = 0;
var lon = 0;
var timezone, calcmeth, madhab, hlr, pcr, shafaq, timeFormat, shortTimeFormat, dateFormat, lang;
var prayerTimes, calPrayers, tommorowPrayers, sunnahTimes;
var datePick, progressBar, volume;
var loadedUI = false;
var langFajr, langSunrise, langDhuhr, langMaghrib, langIsha, langAdhan, langNow, langTimeUntil;
var motnCheck, totnCheck, motnCheckOG, totnCheckOG;

var loaded = true;
var event1 = new Event('loadedSettings')
var event2 = new Event('loadedUI')
loadHandles()
loadSettings()

window.api.send('prayers');


window.addEventListener('loadedSettings', () => { 
  datePick = document.getElementById('calendar');
  progressBar  = document.getElementById('progress-bar')
  progressBar.style.width = "0%"
  getTomorrowPrayers()
  loadClock();
  loadHijriDate();
  loadCalendar()
  loadPrayers()
  volumeSlider()
  loadBackgroundImage()
  setKeyPress()
  setupButtonListeners()
  setupUpdateModal()
  
  const interval = setInterval(function() {
    loadClock()
    loadNextPrayer()
    if ((new Date).getHours() == 0 && (new Date).getMinutes() == 0){
      loadCalendar()
      loadPrayers()
      getTomorrowPrayers()
    }
  }, 1000)
})

window.addEventListener('loadedUI', () => { 
  loadedUI = true;
  hideLoader()
})


function loadClock(){
  document.getElementById("clock").innerText = window.api.getClock(timeFormat);
}

function loadHijriDate(){
  var hijri = true;
  document.getElementById("dateLoc").innerText = (new Date).toLocaleDateString(lang, 
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).capitalize()
  hijri = true;
  setInterval(function() {
    if (hijri){
      document.getElementById("dateLoc").innerText = new Intl.DateTimeFormat(lang + '-TN-u-ca-islamic', 
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
      console.log(res)
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
  }

//Load all the prayers of the day and shows them on the screen
function loadPrayers(){
  if (datePick.value == new Date().toDateInputValue()){
    calPrayers = prayerTimes
  }
  if (timezone != undefined && calPrayers != undefined){
    document.getElementById("fajrTime").innerText = window.api.getTimes(calPrayers.fajr,timezone, shortTimeFormat);
    document.getElementById("sunriseTime").innerText = window.api.getTimes(calPrayers.sunrise,timezone, shortTimeFormat);
    document.getElementById("dhuhrTime").innerText = window.api.getTimes(calPrayers.dhuhr,timezone, shortTimeFormat);
    document.getElementById("asrTime").innerText = window.api.getTimes(calPrayers.asr,timezone, shortTimeFormat);
    document.getElementById("maghribTime").innerText = window.api.getTimes(calPrayers.maghrib,timezone, shortTimeFormat);
    document.getElementById("ishaTime").innerText = window.api.getTimes(calPrayers.isha,timezone, shortTimeFormat);
    if (totnCheck){
      document.getElementById("totnTime").innerText = window.api.getTimes(totn,timezone, shortTimeFormat);
    }
    if (motnCheck){
      document.getElementById("motnTime").innerText = window.api.getTimes(motn,timezone, shortTimeFormat);
    }
  }
}

//Checks the store for saved settings, or gets default values
async function loadSettings(){
    lat = await window.api.getFromStore('latitude', 0.00);
    lon = await window.api.getFromStore('longitude', 0.00);
    var zoneGuess = window.api.timeZoneGuess();
    timezone = await window.api.getFromStore('timezone', zoneGuess);
    calcmeth = await window.api.getFromStore('calcmeth', 'MWL');
    madhab = await window.api.getFromStore('madhab', "Shafi"); 
    hlr = await window.api.getFromStore( 'hlr', "TA" );
    pcr = await window.api.getFromStore('pcr', "CC" );
    shafaq = await window.api.getFromStore('shafaq', "shafaqG");
    lang = await window.api.getFromStore('language', "en");
    loadLang()
    volume = await window.api.getFromStore('volume', 50)
    darkmode = await window.api.getFromStore('darkMode', false)
    window.api.setTheme(darkmode, "styles.css");
    await hidePlayer()
    await loadTimeDateFormat()
    motnCheck = await window.api.getFromStore('motnSunnah', false); 
    totnCheck = await window.api.getFromStore('totnSunnah', false); 
    motnCheckOG = motnCheck; totnCheckOG = totnCheck;
    window.dispatchEvent(event1)
}

//Calculates time left until #prayer
function timeUntilPrayer(prayer){
    var now = new Date();
    if (prayer === src_Prayer.Fajr) {
      if (now.getHours() < 12){
        return this.msToTime(this.fajr - now);
      }
      else{
        now.getHours()
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        let tommorowPrayer = new PrayerTimes_PrayerTimes(this.coordinates, tomorrow, this.calculationParameters)
        return this.msToTime(tommorowPrayer.fajr - now)
      }
    } else if (prayer === src_Prayer.Sunrise) {
      return this.msToTime(this.sunrise - now);
    } else if (prayer === src_Prayer.Dhuhr) {
      return this.msToTime(this.dhuhr - now);
    } else if (prayer === src_Prayer.asr) {
      return this.msToTime(this.asr - now);
    } else if (prayer === src_Prayer.maghrib) {
      return this.msToTime(this.maghrib - now);
    } else if (prayer === src_Prayer.isha) {
      return this.msToTime(this.isha - now);
    }
    else {
      return null;
    }
  }

//Loads the next prayers text: Prayer X in Y time;
function loadNextPrayer(){
    var prayers = nextPrayer();
    if (prayers[0] != undefined){
        var timeUntilCurrentPrayer = timeUntilPrayer(prayers[0])
        if (progressBar.style.width != '0%' && timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] >= -5){
          document.getElementById("timeLeft").innerText = langAdhan
        }
        else if(timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] >= -10){ //-1 because math.floor
            document.getElementById("timeLeft").innerText = langNow + ": " + prayers[2];
        }
        else{
            var time = timeUntilPrayer(prayers[1])
            document.getElementById("timeLeft").innerText = langTimeUntil + " " + prayers[3] + ": " + intToHour(time);
        }   
        if (!loadedUI){
          window.dispatchEvent(event2)
        }
    } 
}

function nextPrayer(){
  var now = new Date();
  var currentPrayer, nextPrayer, currentName, nextName;
  if (prayerTimes != undefined && langFajr != undefined){
    if (now >= prayerTimes.isha){
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
    return [currentPrayer, nextPrayer, currentName, nextName]
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
    if (minutes == 0){
      minutes = 1;
    }
    seconds = 00;
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
        motnCheck =  motnCheckOG;
        totnCheck =  totnCheckOG;
      }
      else{
        motnCheck = false;
        totnCheck = false;
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
    progressBar.value = msg;
    progressBar.style.width = msg + "%"
  })

  window.api.handle('update', msg => {
    loadSettings()
    window.api.send('prayers', "Send me the times please");
  })
}


//Loads time format (for now date format does nothing)
async function loadTimeDateFormat(){
  var timeF = await window.api.getFromStore('timeFormat', 12);
  var sec = await window.api.getFromStore('seconds', true);
  dateFormat = await window.api.getFromStore('dateFormat', "DD/MM/YYYY");
  timeFormat = "hh:mm"
  if (sec){
    timeFormat += ":ss"
  }
  if (timeF == 12){
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
  var enableAdhan = await window.api.getFromStore('adhanCheck', true)
  if (!enableAdhan){
    document.getElementById('audioControls').style.display = "none";
  }
}


// If a bgImage is set in the settings, it gets applied, otherwise it disables the shaders
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

//Adds listener that brings you to the settings page when you press "Crtl + O"
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

    if (motnCheck || totnCheck){
      calculateSunnah()
    }

    var motnDiv = document.getElementsByClassName("motn");
    if (motnCheck){
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
    if (totnCheck){
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
}

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