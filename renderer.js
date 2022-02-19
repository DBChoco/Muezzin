// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var prayerTimes;
var lat = 0;
var lon = 0;
var timezone, calcmeth, madhab, hlr, pcr, shafaq;
var prayerTimes, calPrayers, tommorowPrayers;
var datePick;

loadHandles()

window.api.send('prayers', "Send me the times please");

getTomorrowPrayers()

window.addEventListener('DOMContentLoaded', () => { 
    datePick = document.getElementById('calendar');
    loadSettings();
    loadClock();
    loadHijriDate();
    loadCalendar()
    loadPrayers()

    const interval = setInterval(function() {
        loadClock()
        loadNextPrayer()
        /*if (timezone != undefined){
                loadPrayers();
                clearInterval(nextPrayerInterval)
            }*/
        }, 1000)
  
    setInterval(function() {
        loadHijriDate();
    }, 10**6)

    document.getElementById('settingsWheel').addEventListener("click", function(){
        window.api.send("settingsO");
        window.location.href = "../settings/settings.html";
    })

    document.getElementById('playB').addEventListener("click", function(){
        window.api.send("play");
    })
    document.getElementById('stopB').addEventListener("click", function(){
      window.api.send("stop");
  })
})


function loadClock(){
  document.getElementById("clock").innerText = window.api.getClock('hh:mm:ss A');
}

function loadHijriDate(){
    document.getElementById("dateLoc").innerText = new Intl.DateTimeFormat('en-TN-u-ca-islamic', 
    {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now()) + " - "+ "Belgium";
}




function loadCalendar(){
    Date.prototype.toDateInputValue = (function() {
      var local = new Date(this);
      local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
      return local.toJSON().slice(0,10);
    });
    datePick.value = new Date().toDateInputValue();
    window.api.send('date-request', datePick.value);
    datePick.addEventListener('change', function(){
        window.api.send('date-request', datePick.value);
    })
  }

function loadPrayers(){
  if (timezone != undefined && calPrayers != undefined){
    document.getElementById("fajrTime").innerText = window.api.getTimes(calPrayers.fajr,timezone, 'h:mm A');
    document.getElementById("sunriseTime").innerText = window.api.getTimes(calPrayers.sunrise,timezone, 'h:mm A');
    document.getElementById("duhrTime").innerText = window.api.getTimes(calPrayers.dhuhr,timezone, 'h:mm A');
    document.getElementById("AsrTime").innerText = window.api.getTimes(calPrayers.asr,timezone, 'h:mm A');
    document.getElementById("MaghribTime").innerText = window.api.getTimes(calPrayers.maghrib,timezone, 'h:mm A');
    document.getElementById("IshaTime").innerText = window.api.getTimes(calPrayers.isha,timezone, 'h:mm A');
  }
}

async function loadSettings(){
    lat = await window.api.getFromStore('latitude');
    lon = await window.api.getFromStore('longitude');
    timezone = await window.api.getFromStore('timezone');
    calcmeth = await window.api.getFromStore('calcmeth');
    madhab = await window.api.getFromStore('madhab'); 
    hlr = await window.api.getFromStore( 'hlr');
    pcr = await window.api.getFromStore('pcr');
    shafaq = await window.api.getFromStore('shafaq');
    //prayerTimes = calcPrayerTimes();
    loadPrayers()
}


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
    } else if (prayer === src_Prayer.Asr) {
      return this.msToTime(this.asr - now);
    } else if (prayer === src_Prayer.Maghrib) {
      return this.msToTime(this.maghrib - now);
    } else if (prayer === src_Prayer.Isha) {
      return this.msToTime(this.isha - now);
    }
    else {
      return null;
    }
  }

function loadNextPrayer(){
    var prayers = nextPrayer();
    if (prayers[0] != undefined){
        var timeUntilCurrentPrayer = timeUntilPrayer(prayers[0])
        if(timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] == -1 && timeUntilCurrentPrayer[2] <= 0){ //-1 because math.floor
            document.getElementById("timeLeft").innerText = "Now: " + prayers[2];
        }
        else{
            var time = timeUntilPrayer(prayers[1])
            document.getElementById("timeLeft").innerText = "Time until " + prayers[3] + ": " + intToHour(time);
        }   
    } 
}

  function nextPrayer(){
    var now = new Date();
    var currentPrayer, nextPrayer, currentName, nextName;
    if (now >= prayerTimes.isha){
        currentPrayer = prayerTimes.isha;
        nextPrayer = tommorowPrayers.fajr
        currentName = "Isha"
        nextName = "Fajr"
    }
    else if (now >= prayerTimes.maghrib){
        currentPrayer = prayerTimes.maghrib;
        nextPrayer = prayerTimes.isha;
        currentName = "Maghrib"
        nextName = "Isha"
    }
    else if (now >= prayerTimes.asr){
        currentPrayer = prayerTimes.asr;
        nextPrayer = prayerTimes.maghrib;
        currentName = "Asr"
        nextName = "Maghrib"
    }
    else if (now >= prayerTimes.dhuhr){
        currentPrayer = prayerTimes.dhuhr;
        nextPrayer = prayerTimes.asr;
        currentName = "Duhr"
        nextName = "Asr"
    }
    else if (now >= prayerTimes.fajr){
        currentPrayer = prayerTimes.fajr;
        nextPrayer = prayerTimes.dhuhr;
        
        currentName = "Fajr"
        nextName = "Dhuhr"
    }
    else{
        currentPrayer = prayerTimes.fajr;
        nextPrayer = prayerTimes.fajr;
        currentName = "Fajr"
        nextName = "Fajr"
    }
    return [currentPrayer, nextPrayer, currentName, nextName]
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
    return hours + ":" + minutes + ":" + seconds
  }

function loadHandles(){
  window.api.handle('date-reply', msg => {
    calPrayers = msg;
    if (timezone != undefined){
        loadPrayers();
    }
  })
  window.api.handle('prayersReply', msg => {
    prayerTimes = msg
    nextPrayer
  })
  window.api.handle('tomorrow-reply', msg => {
    tommorowPrayers = msg
  })
}