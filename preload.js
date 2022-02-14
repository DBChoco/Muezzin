// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const moment = require('moment');

window.addEventListener('DOMContentLoaded', () => {
  loadPrayers()
  loadHijriDate()
  loadNextPrayer()
})

function loadPrayers(){
  document.getElementById("fajrTime").innerText = moment(prayerTimes().fajr).format('h:mm A');
  document.getElementById("sunriseTime").innerText = moment(prayerTimes().sunrise).format('h:mm A');
  document.getElementById("duhrTime").innerText = moment(prayerTimes().dhuhr).format('h:mm A');
  document.getElementById("AsrTime").innerText = moment(prayerTimes().asr).format('h:mm A');
  document.getElementById("MaghribTime").innerText = moment(prayerTimes().maghrib).format('h:mm A');
  document.getElementById("IshaTime").innerText = moment(prayerTimes().isha).format('h:mm A');
}

function loadHijriDate(){
  document.getElementById("dateLoc").innerText = new Intl.DateTimeFormat('en-TN-u-ca-islamic', 
  {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now()) + " - "+ "Belgium";
}

function loadNextPrayer(){
  var prayer = prayerTimes().currentPrayer()
  var time = prayerTimes().timeForPrayer()
  document.getElementById("timeLeft").innerText = "Time until " + prayer + ": " + time;
}

function prayerTimes(){
  var adhan = require('adhan')

  // var coordinates = new adhan.Coordinates(35.78056, -78.6389);
  var coordinates = new adhan.Coordinates(50.48, 4.26);

  // var date = new Date(2015, 11, 1);
  var date = new Date();

  // https://github.com/batoulapps/adhan-js/blob/master/METHODS.md
  var params = adhan.CalculationMethod.MuslimWorldLeague();
  params.madhab = adhan.Madhab.Hanafi;
  params.polarCircleResolution = adhan.PolarCircleResolution.AqrabYaum;
  params.adjustments.fajr = 2;

  var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

  return prayerTimes;
}