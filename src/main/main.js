// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, Tray, Menu, Notification} = require('electron')
const path = require('path')

let tray = null
let mainWindow, mediaWindow;
var systray;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'ressources/images/BETA.png',
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('src/main/index.html')


  mainWindow.on('minimize',function(event){
    event.preventDefault();
    mainWindow.hide();
  });

  
  mainWindow.on('close', function (event) {
    if(!app.isQuiting && systray){
        event.preventDefault();
        mainWindow.hide();
        return false;
    }
    else{
      app.isQuiting = true;
      app.quit();
      return true;
    }
  });

  //Create hidden mediaPlayer
  mediaWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, 'preload.js'),
    }
  });  

  mediaWindow.loadFile('src/mediaPlayer/mediaPlayer.html');
}

app.on('before-quit', function () {
  app.isQuiting = true;
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  tray = new Tray('ressources/images/BETA.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open', click:  function(){
      mainWindow.show(); }},
    { label: 'Quit', click:  function(){
      app.isQuiting = true;
      app.quit();}}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin' && systray) app.quit()
})

const Store = require('electron-store');
const store = new Store();
const adhan = require('adhan')
const momentz = require('moment-timezone')

function showNotification (message) {
  if (Notification.isSupported()){
    const NOTIFICATION_TITLE = 'Muezzin'
    const NOTIFICATION_BODY = message
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY, icon:"../ressources/images/BETA.png" }).show()
  }
}

var lat, lon, calcmeth, madhab, hlr, pcr, shafaq, prayerTimes, adhanPath;
var customValues, delay;
var prayerTimes, datePrayerTimes, tomorrowPrayers;
var adhanCheck, notifCheck, lang, startupSound;


checkFirstTime()
loadSettings();
setUpHandlers();
checkTime();

/**
* Checks for Athan time and current time, then if they are the same, it plays the Athan
*/
function checkTime(){
  var interval = setInterval(function(){
    var prayers = nextPrayer();
    if (prayers != undefined && (adhanCheck || notifCheck)){
        var timeUntilCurrentPrayer = timeUntilPrayer(prayers[0])
        console.log(timeUntilCurrentPrayer)
        if(timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] == -1 && timeUntilCurrentPrayer[2] == 0){ //-1 because math.floor
          //if(timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] == -26 && timeUntilCurrentPrayer[2] == 0){ //TESTING
          if (adhanCheck){
            mediaWindow.webContents.send('play', adhanPath);
          }
          if (notifCheck){
            if (lang == "fr"){
              showNotification("Maintenant: " + prayers[2])
            }
            else if (lang == "es"){
              showNotification("Ahora: " + prayers[2])
            }
            else{
              showNotification("Now: " + prayers[2])
            }
          }
        }
    } 
  }, 1000)
}


/**
* Loads all required variables from the store
*/
async function loadSettings(){
  lat = await store.get('latitude', 0.00);
  lon = await store.get('longitude', 0.00);
  timezone = await store.get('timezone', momentz.tz.guess(),);
  calcmeth = await store.get('calcmeth', "MWL");
  madhab = await store.get('madhab', 'Shafi'); 
  hlr = await store.get( 'hlr', 'TA');
  pcr = await store.get('pcr', 'CC');
  shafaq = await store.get('shafaq', 'shafaqG');
  adhanPath = await store.get('adhanFile', [false, "../../ressources/audio/Adhan - Mecca.mp3", true]);
  adhanCheck = await store.get('adhanCheck', true);
  notifCheck = await store.get('notifCheck', true);
  lang = await store.get('language', 'en');
  systray = await store.get('systray', true);
  startupSound = await store.get('startup', false);
  customValues = await store.get('customSettings', [false, 0,0,0]);
  delay = await store.get('delay', [false, 0]);
}


/**
* Takes all the loaded settings and calculated the prayers times for 'date'
* @param {Date} date
* @return {adhan.PrayerTimes} prayerTimes
*/
function calcPrayerTimes(date = new Date()){
  console.log("ola")
  var coordinates = new adhan.Coordinates(lat, lon)

  // https://github.com/batoulapps/adhan-js/blob/master/METHODS.md
  if (customValues != undefined && !customValues[0]){
    switch(calcmeth) {
      case "MWL":
        params = adhan.CalculationMethod.MuslimWorldLeague();
        break;
      case "Egyptian":
        params = adhan.CalculationMethod.Egyptian();
        break;
      case "Karachi":
        params = adhan.CalculationMethod.Karachi();
        break;
      case "UAQ":
        params = adhan.CalculationMethod.UmmAlQura();
        break;
      case "Dubai":
        params = adhan.CalculationMethod.Dubai();
        break;
      case "Qatar":
        params = adhan.CalculationMethod.Qatar();
        break;
      case "Kuwait":
        params = adhan.CalculationMethod.Kuwait();
        break;
      case "MC":
        params = adhan.CalculationMethod.MoonsightingCommittee();
        break;
      case "Singapore":
        params = adhan.CalculationMethod.Singapore();
        break;
      case "Turkey":
        params = adhan.CalculationMethod.Turkey();
        break;
      case "Tehran":
        params = adhan.CalculationMethod.Tehran();
        break;
      case "ISNA":
        params = adhan.CalculationMethod.NorthAmerica();
        break;
      default:
        params = adhan.CalculationMethod.MuslimWorldLeague();
    } 
  }
  else{
    params = adhan.CalculationMethod.Other();
    params.fajrAngle = customValues[1]
    params.maghribAngle = customValues[2]
    params.ishaAngle = customValues[3]
  }

  if (delay[0]){
    params.ishaInterval = delay[1]
  }
  
  switch(madhab){
    case "Shafi":
      params.madhab = adhan.Madhab.Shafi;
      break;
    case "Hanafi":
      params.madhab = adhan.Madhab.Hanafi;
      break;
    default:
      params.madhab = adhan.Madhab.Shafi;
  }
  
  switch(hlr){
    case "MOTN":
      params.HighLatitudeRule = adhan.HighLatitudeRule.MiddleOfTheNight;
      break;
    case "SOTN":
      params.HighLatitudeRule = adhan.HighLatitudeRule.SeventhOfTheNight;
      break;
    case "TA":
      params.HighLatitudeRule = adhan.HighLatitudeRule.TwilightAngle;
      break;
    default:
      params.HighLatitudeRule = adhan.HighLatitudeRule.recommended(coordinates)
  }

  switch(pcr){
    case "CC":
      params.PolarCircleResolution = adhan.PolarCircleResolution.AqrabBalad;
      break;
    case "CD":
      params.PolarCircleResolution = adhan.PolarCircleResolution.AqrabYaum;
      break;
    case "UND":
      params.PolarCircleResolution = adhan.PolarCircleResolution.Unresolved;
      break;
    default:
      params.PolarCircleResolution = adhan.PolarCircleResolution.AqrabBalad;
  }

  switch(shafaq){
    case "shafaqG":
      params.shafaq = adhan.Shafaq.General;
      break;
    case "shafaqR":
      params.shafaq = adhan.Shafaq.Ahmer;
      break;
    case "shafaqW":
      params.shafaq = adhan.Shafaq.Abyad;
      break;
    default:
      params.shafaq = adhan.Shafaq.General;
  }
  prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
  return prayerTimes;
}


//Sets up all the IPC handlers for communication with renderers
async function setUpHandlers(){
  ipcMain.handle('getStoreValue', (event, key, defaultValue) => {
    if (defaultValue != undefined){
      return store.get(key, defaultValue);
    }
    else{
      return store.get(key);
    }
  });
  ipcMain.handle('setStoreValue', (event, key, value) => {
    return store.set(key, value);
  });
  ipcMain.handle('prayers',  (event, message)  => {
    waitFor(lat, calcPrayerTimes())
    event.sender.send('prayersReply', prayerTimes)
  });
  ipcMain.handle('date-request',  (event, message)  => {
    waitFor(lat, datePrayerTimes = calcPrayerTimes(new Date(message)));
    event.sender.send('date-reply', datePrayerTimes)
  });
  ipcMain.handle('tomorrow-request',  (event, message)  => {
    waitFor(lat, tomorrowPrayers = calcPrayerTimes(message))
    event.sender.send('tomorrow-reply', tomorrowPrayers)
  });

  //Media Handlers
  ipcMain.handle('play',  (event, message)  => {
    mediaWindow.webContents.send('play', adhanPath);
  });
  ipcMain.handle('stop',  (event, message)  => {
    mediaWindow.webContents.send('stop', {});
  });
  ipcMain.handle('volume-request',  (event, message)  => {
    mediaWindow.webContents.send('volume-reply', message);
  });
  ipcMain.handle('progress-request',  (event, message)  => {
    mainWindow.webContents.send('progress-reply', message);
  });

  ipcMain.handle("settingsO", function(){
  })
  ipcMain.handle("settingsC", function(){
    loadSettings()
    calcPrayerTimes()
  })

  ipcMain.handle("startup-request", function(){
    mediaWindow.webContents.send('startup-reply', startupSound);
  })
}


function calcTomorrowPrayers(){
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  tomorrowPrayers = calcPrayerTimes(tomorrow)
}


//Waits for someting to be defined before doing some other thing
async function waitFor(something, doSomething){
  var valueChecker = setInterval(function(){
    if (something != undefined){
      clearInterval(valueChecker)
      doSomething;
      return true;
    }
  }, 100)
}


/**
* Returns the current and next prayers with their names
* @return {[adhan.PrayerTimes.prayer & string]} [currentPrayer, nextPrayer, currentName, nextName]
*/
function nextPrayer(){
  var now = new Date();
  var currentPrayer, nextPrayer, currentName, nextName;
    if (now >= prayerTimes.isha){
      if (tomorrowPrayers == undefined){
        calcTomorrowPrayers();
      }
      currentPrayer = prayerTimes.isha;
      nextPrayer = tomorrowPrayers.fajr
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


/**
* If the prayer is defined, returns the [hours, minutes, seconds] before/after the prayer
* @param {adhan.PrayerTimes} prayer
* @return {Numer[]} time
*/
function timeUntilPrayer(prayer) {
  var now = new Date()
  if (prayer != undefined){
      return msToTime(prayer - now);
  }
  else{
      return null;
  }
}


/**
* Converts miliseconds to [hours, minutes, seconds]
* @param {Number} duration
* @return {Numer[]} res
*/
function msToTime(duration){ //https://stackoverflow.com/questions/19700283/how-to-convert-time-in-milliseconds-to-hours-min-sec-format-in-javascript
  var seconds = Math.floor((duration / 1000) % 60) + 1,
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  var res = [hours, minutes, seconds]
  return res;
}

function checkFirstTime(){
  var first = !store.has("lat")
  if (first){
    var IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');

    // Create IPGeolocationAPI object. Constructor takes two parameters.
    var ipgeolocationApi = new IPGeolocationAPI("b9aed80a71d043149013540fb449a384", false); 

    var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');

    // Get complete geolocation for the calling machine's IP address
    ipgeolocationApi.getGeolocation(handleResponse);

    // Function to handle response from IP Geolocation API
    function handleResponse(json) {
      store.set('latitude', json["latitude"])
      store.set('longitude', json["longitude"])
      loadSettings()
      mainWindow.webContents.send('update');
    }
  }
}