// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, Tray, Menu, Notification, nativeImage, nativeTheme, net, shell} = require('electron')
const path = require('path')
require('v8-compile-cache');

let tray = null
let mainWindow, mediaWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 600,
    backgroundColor:"#212121",
    icon: '../../ressources/images/icon.png',
    webPreferences: {
      //nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false,
      webviewTag: true
    }
  })

  //DEBUG
  //mainWindow.webContents.openDevTools()

  app.setAboutPanelOptions({
    applicationName : "Muezzin - Prayer Times app",
    applicationVersion: "v"+app.getVersion(),
    authors: ["DarkBlackChocolate"],
    website: "https://github.com/DBChoco/Muezzin",
    iconPath: path.join(__dirname, '../../ressources/images/icon.png')
  })
  
  const isMac = process.platform === 'darwin'
  const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }] : []),
    // { role: 'fileMenu' }
    {
      label: 'File',
      submenu: [
        {
          label: 'Reset settings',
          click: function(){
            store.clear();
            app.relaunch()
            app.exit()
          }
        },
        isMac ? { role: 'close' } : { role: 'quit' }
      ]
    },
    // { role: 'viewMenu' }
    {
      label: 'View',
      submenu: [
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    // { role: 'windowMenu' }
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ] : [
          { role: 'close' }
        ])
      ]
    },
    {
      label: 'Debug',
      submenu: [
          { role: 'reload' },
          { role: 'forceReload' },
          { type: 'separator' },
          { role: 'toggleDevTools' }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Website',
          click: async () => {
            await shell.openExternal('https://github.com/DBChoco/Muezzin')
          }
        },
        {
          label: 'Reddit',
          click: async () => {
            await shell.openExternal('https://www.reddit.com/r/Muezzin/')
          }
        },
        {
          label: 'Discord',
          click: async () => {
            await shell.openExternal('https://discord.gg/cpF9TTstN5')
          }
        },
        { type: 'separator' },
        {
          label: 'Report an issue',
          click: async () => {
            await shell.openExternal('https://github.com/DBChoco/Muezzin/issues/new')
          }
        },
        {role: "about",
          click: () => app.showAboutPanel()
        }
      ]
    }
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  mainWindow.setMenuBarVisibility(false)
  mainWindow.setAutoHideMenuBar(true)
  
  
  // and load the index.html of the app.
  mainWindow.loadFile('src/main/index.html')

  mainWindow.maximize();

  mainWindow.on('close', function (event) {
    if(!app.isQuiting && settings.systray){
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

  let iconPath;
  if (process.platform == "win32"){
    iconPath = path.join(__dirname, '../../ressources/images/icon.ico');
  } else{
    iconPath = path.join(__dirname, '../../ressources/images/icon.png');
  }
  if (process.platform == "darwin"){
    tray = new Tray(nativeImage.createFromPath(iconPath).resize({ width: 16, height: 16 }))
  }
  else{
    tray = new Tray(nativeImage.createFromPath(iconPath))
  }
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open', click:  function(){
      mainWindow.show(); }},
    { label: 'Quit', click:  function(){
      app.isQuiting = true;
      app.quit();}}
  ])
  tray.setToolTip('Muezzin')
  tray.setContextMenu(contextMenu)

  checkFirstTime()
  loadSettings();
  setUpHandlers();
  checkTime();  
})

const Store = require('electron-store');
const store = new Store();
const adhan = require('adhan')
const language = require('../common/language.js')
const AutoLaunch = require('auto-launch');
var autoLauncher = new AutoLaunch({
  name: "Muezzin", 
  mac:{
    useLaunchAgent: true
  }
});

console.debug("** Launching Muezzin v" + app.getVersion() + " **\n" + "Assalamou Alaykoum wa Rahmatou Lahi wa Baraketu")

console.log(Intl.DateTimeFormat("en", {
  timeZone: "Asia/Tehran",
  timeStyle: "long"
}).format(new Date()))

var lat, lon, calculationMethod, prayerTimes, adhanPath, adhanSettings, customTimes, jumuahTime;
var customValues, delay;
var prayerTimes, datePrayerTimes, tomorrowPrayers;
var settings
var langFajr, langDhuhr, langAsr, langMaghrib, langIsha, langNow;

var adjustements;
var updateInterval;
var startup = true; // To check if the app just started or not when going back to the main page.
var today = new Date


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin' && settings.systray) app.quit()
})

function setUpdates(){
  if (updateInterval == undefined){
    setTimeout(function(){
      getVersion()
    }, 3000);
    updateInterval = setInterval(function(){
      getVersion()
    }, 900000) //15 minutes
  }
  
}

function getVersion(){
  console.log("Looking for updates")
  try {
    const request = net.request({
      method: 'GET',
      protocol: 'https:',
      hostname: 'api.github.com',
      path: '/repositories/459335904/releases/latest',
      redirect: 'follow'
    });
    request.on('response', (response) => {
      response.on('data', (chunk) => {
        var version
        try {
          version = JSON.parse(chunk).name
        } catch (error){
          version = 0;
          console.log("Couldn't look up Muezzins version: " + error)
        }
          if (app.getVersion() < version){
            mainWindow.webContents.send('update-available', [app.getVersion(), JSON.parse(chunk).name]);
            showNotification(language.loadTrans(lang, 'updateAvailable'))
            clearInterval(updateInterval);
          }
      });
    });
    request.on('finish', () => {
      //console.log('Request is Finished')
    });
    request.on('abort', () => {
      console.log('Request is Aborted')
    });
    request.on('error', (error) => {
      console.log(`ERROR: ${JSON.stringify(error)}`)
    });
    request.on('close', (error) => {
      if (error != undefined){
        console.log("Error at end of update check =>" + error)
      }
    });
    request.setHeader('Content-Type', 'application/json');
    request.end();
  } catch (error) {
    console.log("Couldn't look for updates: " + error)
  }
}

/**
 * Shows a notification with the msg
 * @param {String} message 
 */
function showNotification (message) {
  if (Notification.isSupported()){
    let NOTIFICATION_TITLE = 'Muezzin'
    let NOTIFICATION_BODY = message
    let NOTIFICATION_ICON = process.platform == "win32" ? path.join(__dirname, '../../ressources/images/icon.ico') : path.join(__dirname, '../../ressources/images/icon.png')
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY, icon:NOTIFICATION_ICON }).show()
  }
}

/**
* Checks for Athan time and current time, then if they are the same, it plays the Athan
*/
function checkTime(){
  var interval = setInterval(function(){
    var prayers = nextPrayer();
    if (settings.adhanCheck || settings.notifCheck){
      if (prayers != undefined && prayers[0] != undefined){
        var timeUntilCurrentPrayer = timeUntilPrayer(prayers[0])
        if(timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] == -1 && timeUntilCurrentPrayer[2] == 0){ //-1 because math.floor
          if (settings.adhanCheck){
            if (prayers[2] == langFajr && adhanSettings.adhanFajr.custom) mediaWindow.webContents.send('playFajr', adhanSettings);
            else mediaWindow.webContents.send('play', adhanSettings);
          }
          if (settings.notifCheck){
            showNotification(langNow + ": " + prayers[2])
          }
        }
      } 
    }
    if (today.getDate() != (new Date).getDate()){
      today = new Date;
      waitFor(lat, prayerTimes = calcPrayerTimes());
      mainWindow.webContents.send('prayersReply', prayerTimes);
      trayPrayerTimes();
      console.log("Recalculating prayer times")
      mainWindow.webContents.send('update');
    }
  }, 1000);
}

/**
* Loads all required variables from the store
*/
async function loadSettings(){
  lat = await store.get('latitude', 0.00);
  lon = await store.get('longitude', 0.00);
  timezone = await store.get('timezone', 'Europe/Brussels');
  timeDisplay = await store.get("timeDisplay", {
    clockFormat: 12,
    dateFormat: 'DD/MM/YYYY',
    showSeconds: true
  })

  calculationMethod = await store.get("calculationMethod", {
    calcMethod: 'MWL',
    madhab: 'Shafi',
    hlr: 'TA',
    pcr: 'CC',
    shafaq: 'shafaqG'
  })

  settings = await store.get("settings", {
    startupSound: false,
    notifCheck: true,
    systray: true,
    adhanCheck: true,
    autoStart: true,
    minStart: false
  })

  adhanSettings =  await store.get('adhan', { 
    adhan: {
      custom: false,
      path: "../../ressources/audio/Adhan - Ahmed Al-Nufais.mp3"
    },
    adhanFajr: {
      custom: false,
      path: "../../ressources/audio/Adhan - Ahmed Al-Nufais.mp3"
    },
    dua: { 
      enabled: true
    }
  });

  customTimes = await store.get("customTimes", {
    enabled: false,
    fajr: "00:00",
    dhuhr: "00:00",
    asr: "00:00",
    maghrib: "00:00",
    isha: "00:00"
  });
  jumuahTime = await store.get("jumuahTime", {
    enabled: false,
    time: "00:00"
  })

  lang = await store.get('language', 'en');
  loadLang();
  customValues = await store.get('customSettings', [false, 0,0,0]);
  delay = await store.get('delay', [false, 0]);

  adjustements = await store.get('adj', [false, 0,0,0,0,0]);

  if (settings.minStart && startup){
    mainWindow.hide()
  }

  setAutoStart(settings.autoStart)
}


/**
* Takes all the loaded settings and calculated the prayers times for 'date'
* @param {Date} date
* @return {adhan.PrayerTimes} prayerTimes
*/
function calcPrayerTimes(date = new Date()){
  console.log("Calculating prayer times")
  var coordinates = new adhan.Coordinates(lat, lon)

  // https://github.com/batoulapps/adhan-js/blob/master/METHODS.md

  //TO add one, change CalculationMethod.js, Adhan.d.ts and Adhan.js
  if (customValues != undefined && !customValues[0]){
    switch(calculationMethod.calcMethod) {
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
      case "France12":
        params = adhan.CalculationMethod.Other();
        params.fajrAngle = 12
        params.ishaAngle = 12
        break;
      case "France15":
        params = adhan.CalculationMethod.Other();
        params.fajrAngle = 15
        params.ishaAngle = 15
        break;
      case "France18":
        params = adhan.CalculationMethod.Other();
        params.fajrAngle = 18
        params.ishaAngle = 18
        break;
      case "Russia":
        params = adhan.CalculationMethod.Other();
        params.fajrAngle = 16
        params.ishaAngle = 15
        break;
      case "Gulf":
        params = adhan.CalculationMethod.Other();
        params.fajrAngle = 18
        params.ishaInterval = 90
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
  
  switch(calculationMethod.madhab){
    case "Shafi":
      params.madhab = adhan.Madhab.Shafi;
      break;
    case "Hanafi":
      params.madhab = adhan.Madhab.Hanafi;
      break;
    default:
      params.madhab = adhan.Madhab.Shafi;
  }
  
  switch(calculationMethod.hlr){
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

  switch(calculationMethod.pcr){
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

  switch(calculationMethod.shafaq){
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

  if(adjustements[0]){
    params.adjustments.fajr = adjustements[1]
    params.adjustments.dhuhr = adjustements[2]
    params.adjustments.asr = adjustements[3]
    params.adjustments.maghrib = adjustements[4]
    params.adjustments.isha = adjustements[5]
  }

  let calculatedTimes = new adhan.PrayerTimes(coordinates, date, params);

  if (customTimes.enabled && (date.getDate() == (new Date()).getDate())){ //TODO make sure the day is today
    if (customTimes.fajr != "00:00") calculatedTimes.fajr = newDate(customTimes.fajr.split(":")[0], customTimes.fajr.split(":")[1], 0);
    if (customTimes.dhuhr != "00:00") calculatedTimes.dhuhr = newDate(customTimes.dhuhr.split(":")[0], customTimes.dhuhr.split(":")[1], 0);
    if (customTimes.asr != "00:00") calculatedTimes.asr = newDate(customTimes.asr.split(":")[0], customTimes.asr.split(":")[1], 0);
    if (customTimes.maghrib != "00:00") calculatedTimes.maghrib = newDate(customTimes.maghrib.split(":")[0], customTimes.maghrib.split(":")[1], 0);
    if (customTimes.isha != "00:00") calculatedTimes.isha = newDate(customTimes.isha.split(":")[0], customTimes.isha.split(":")[1], 0);
  }


  if (jumuahTime.enabled && date.getDay() == 5){
    if (jumuahTime.time != "00:00") calculatedTimes.dhuhr = newDate(jumuahTime.time.split(":")[0], jumuahTime.time.split(":")[1], 0);
  }


  if (date.getDate() != (new Date()).getDate()) convertPrayerTimes(calculatedTimes);
  else{
    convertPrayerTimesCustom(calculatedTimes)
    //convertPrayerTimes(calculatedTimes);
  }

  return calculatedTimes;
}

/**
 * Converts PrayerTimes to the saved timezone.
 */
 function convertPrayerTimes(prayers = prayerTimes){
  prayers.fajr = convertTZ(prayers.fajr, timezone)
  prayers.sunrise = convertTZ(prayers.sunrise, timezone)
  if (today.getDay() == 5 && jumuahTime.enabled){
    prayers.dhuhr = notConvertTZ(prayers.dhuhr)
  }
  else{
    prayers.dhuhr = convertTZ(prayers.dhuhr, timezone)
  }
  prayers.asr = convertTZ(prayers.asr, timezone)
  prayers.maghrib = convertTZ(prayers.maghrib, timezone)
  prayers.isha = convertTZ(prayers.isha, timezone)
}

/**
 * Converts PrayerTimes to the saved timezone except custom times.
 */
function convertPrayerTimesCustom(prayers = prayerTimes){
  if (customTimes.enabled){
    if (customTimes.fajr != "00:00") prayers.fajr = notConvertTZ(prayers.fajr)
    else prayers.fajr =  convertTZ(prayers.fajr, timezone)
    if (customTimes.dhuhr != "00:00" ) prayers.dhuhr = notConvertTZ(prayers.dhuhr)
    else prayers.dhuhr =  convertTZ(prayers.dhuhr, timezone)
    if (customTimes.asr != "00:00") prayers.asr = notConvertTZ(prayers.asr)
    else prayers.asr = convertTZ(prayers.asr, timezone)
    if (customTimes.maghrib != "00:00") prayers.maghrib = notConvertTZ(prayers.maghrib)
    else prayers.maghrib =  convertTZ(prayers.maghrib, timezone)
    if (customTimes.isha != "00:00") prayers.isha = notConvertTZ(prayers.isha)
    else prayers.isha = convertTZ(prayers.isha, timezone)
  }
  else{
    prayers.fajr = convertTZ(prayers.fajr, timezone)
    prayers.sunrise = convertTZ(prayers.sunrise, timezone)
     if (today.getDay() == 5 && jumuahTime.enabled){
    prayers.dhuhr = notConvertTZ(prayers.dhuhr)
    }
    else{
      prayers.dhuhr = convertTZ(prayers.dhuhr, timezone)
    }
    prayers.asr = convertTZ(prayers.asr, timezone)
    prayers.maghrib = convertTZ(prayers.maghrib, timezone)
    prayers.isha = convertTZ(prayers.isha, timezone)
  }
}

function newDate(hours, minutes, seconds){
  let date = new Date();
  date.setHours(hours)
  date.setMinutes(minutes)
  date.setSeconds(seconds)
  return date
}

function convertTZ(date, timezone) {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: timezone}));   
}

function notConvertTZ(date){
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US"));   
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
    console.log("Requesting prayer times for today")
    waitFor(lat, prayerTimes = calcPrayerTimes())
    event.sender.send('prayersReply', prayerTimes)
    trayPrayerTimes()
  });
  ipcMain.handle('date-request',  (event, message)  => {
    console.log("Requesting prayer times for " + message)
    waitFor(lat, datePrayerTimes = calcPrayerTimes(new Date(message)));
    event.sender.send('date-reply', datePrayerTimes)
  });
  ipcMain.handle('tomorrow-request',  (event, message)  => {
    console.log("Requesting prayer times for " + message.toDateString())
    waitFor(lat, tomorrowPrayers = calcPrayerTimes(message))
    event.sender.send('tomorrow-reply', tomorrowPrayers)
  });

  ipcMain.handle("loadedUI", function(){
    if (startup){
      setUpdates()
    }
  })

  ipcMain.handle("qibla-request", (event, message)  => {
    var coordinates = new adhan.Coordinates(lat, lon);
    var qibla = adhan.Qibla(coordinates);
    event.sender.send('qibla-reply', qibla)
  })


  //Media Handlers
  ipcMain.handle('play',  (event, message)  => {
    mediaWindow.webContents.send('play', adhanSettings);
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
    startup = false;
    loadSettings()
    //calcPrayerTimes()
  })

  ipcMain.handle("startup-request", function(){
    mediaWindow.webContents.send('startup-reply', settings.startupSound);
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
  if (prayerTimes != undefined){
    if (now >= prayerTimes.isha){
      if (tomorrowPrayers == undefined){
        calcTomorrowPrayers();
      }
      currentPrayer = prayerTimes.isha;
      nextPrayer = tomorrowPrayers.fajr
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


//checks if the app is being launched for the first time and if so, get location from location api
function checkFirstTime(){
  var first = !store.has("first")
  
  if (first){
    loadSystemLang() //Chekcs system language and applies it if available

    loadTheme() //loads theme bases on system theme (light/dark)

    console.log("First time using the app, loading geolocation")
    var IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');
    // Create IPGeolocationAPI object. Constructor takes two parameters.
    var ipgeolocationApi = new IPGeolocationAPI("b9aed80a71d043149013540fb449a384", false); 

    //var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');

    // Get complete geolocation for the calling machine's IP address
    ipgeolocationApi.getGeolocation(handleResponse);

    // Function to handle response from IP Geolocation API
    function handleResponse(json) {
      try{
        loadDefaultCalcMethod(json["continent_code"], json["country_code2"])
        store.set('latitude', json["latitude"])
        store.set('longitude', json["longitude"])
        store.set('timezone', json["time_zone"]["name"])
        //loadSettings()
        store.set('first', false)
        loadSettings()
        mainWindow.webContents.send('update');
      }catch(e){
        console.log("Couldn't handle location response: " + e)
      }
    }
    store.set("first", true)
  }

  function loadSystemLang(){
    if (language.langAvailable(app.getLocale().split('-')[0])){
      store.set('language', app.getLocale().split('-')[0])
      lang = app.getLocale().split('-')[0]
    }
  }

  function loadTheme(){
    if(nativeTheme.shouldUseDarkColors){
      store.set('darkMode', true);
      store.set('bgImage', [true, '../../ressources/images/bgImage_dark.avif'])
    }
    // mainWindow.webContents.send('reloadTheme'); if needed
  }

    //Looks at the continent and country of the user and chooses a calculation method
  function loadDefaultCalcMethod(continentCode, countryCode){
    if (countryCode == "RU"){
      store.set('calculationMethod.calcMethod', "Russia");
    }
    else if (countryCode == "GB"){
      store.set('calculationMethod.calcMethod', "ISNA");
    }
    if (countryCode == "SG"){
      store.set('calculationMethod.calcMethod', "Singapore");
    }
    else if (countryCode == "QA"){
      store.set('calculationMethod.calcMethod', "Qatar");
    }
    else if (countryCode == "TR"){
      store.set('calculationMethod.calcMethod', "Turkey");
      //store.set('language', 'tk')
    }
    else if (countryCode == "IR"){
      store.set('calculationMethod.calcMethod', "Tehran");
    }
    else if (countryCode == "KW"){
      store.set('calculationMethod.calcMethod', "Kuwait");
    }
    else if (countryCode == "AE"){
      store.set('calculationMethod.calcMethod', "Dubai");
    }
    else if (countryCode == "PK"){
      store.set('calculationMethod.calcMethod', "Karachi");
    }
    else if (countryCode == "EG"){
      store.set('calculationMethod.calcMethod', "Egyptian");
    }
    else if (countryCode == "SA"){
      store.set('calculationMethod.calcMethod', "UAQ");

    }
    else{
      switch (continentCode){
        case "NA": //N America
          store.set('calculationMethod.calcMethod', "ISNA");
          break;
        case "AF": //Africa
          break;
        case "EU": //EuropeD
          store.set('calculationMethod.calcMethod', "MWL");
          break;
        case "AS": //Asia
          store.set('calculationMethod.calcMethod', "ISNA");
          break;
        case "SA": //S America
          store.set('calculationMethod.calcMethod', "MWL");
          break;
        case "OC": //Oceania
          store.set('calculationMethod.calcMethod', "MWL");
          break;
        case "AN": //Antartica
          store.set('calculationMethod.calcMethod', "MC");
          break;
        default:
          store.set('calculationMethod.calcMethod', "MWL");
      }
    }
    store.set("calculationMethod.madhab", 'Shafi')
    store.set("calculationMethod.hlr", 'TA')
    store.set("calculationMethod.pcr", 'CC')
    store.set("calculationMethod.shafaq", 'shafaqG')
  }
}


function loadLang(){
  langFajr =  language.loadTrans(lang, 'fajr')
  langSunrise =  language.loadTrans(lang, 'sunrise')
  langDhuhr = language.loadTrans(lang, 'dhuhr')
  langAsr= language.loadTrans(lang, 'asr')
  langMaghrib = language.loadTrans(lang, 'maghrib')
  langIsha = language.loadTrans(lang, 'isha')
  langAdhan = language.loadTrans(lang, 'adhan')
  langNow = language.loadTrans(lang, 'now')
}


function setAutoStart(autoStart){
  if(autoStart){
    // Checking if autoLaunch is enabled, if not then enabling it.
    autoLauncher.isEnabled().then(function(isEnabled) {
      if (isEnabled) return;
      autoLauncher.enable();
    }).catch(function (err) {
      throw err;
    });
  }
  else{
    if (autoLauncher.isEnabled()){
      try {
        autoLauncher.disable();
      } catch (error) {
        throw error
      }
    }
  }
}

function trayPrayerTimes(){
  const contextMenu = Menu.buildFromTemplate([
    { label: language.loadTrans(lang, 'open'), click:  function(){
      mainWindow.show(); }},
    { type: 'separator' },
    { label: "Fajr: " + changeclockDisplay(prayerTimes.fajr, timeDisplay.clockFormat), click: function(){}},
    { label: "Sunrise: " + changeclockDisplay(prayerTimes.sunrise, timeDisplay.clockFormat)},
    { label: "Dhuhr: " + changeclockDisplay(prayerTimes.dhuhr, timeDisplay.clockFormat)},
    { label: "Asr: " + changeclockDisplay(prayerTimes.asr, timeDisplay.clockFormat)},
    { label: "Maghrib: " + changeclockDisplay(prayerTimes.maghrib, timeDisplay.clockFormat)},
    { label: "Isha: " + changeclockDisplay(prayerTimes.isha, timeDisplay.clockFormat)},
    { type: 'separator' },
    { label: language.loadTrans(lang, 'settings'), click:  function(){
      mainWindow.loadFile('src/settings/settings.html')
      mainWindow.show(); }},
    { label: language.loadTrans(lang, 'quit'), click:  function(){
      app.isQuiting = true;
      app.quit();}}
  ])
  tray.setContextMenu(contextMenu)

  console.log(langFajr + ": " + changeclockDisplay(prayerTimes.fajr, timeDisplay.clockFormat) + "\n" +
  langSunrise + ": " + changeclockDisplay(prayerTimes.sunrise, timeDisplay.clockFormat) + "\n" +
  langDhuhr + ": " + changeclockDisplay(prayerTimes.dhuhr, timeDisplay.clockFormat) + "\n" +
  langAsr + ": " + changeclockDisplay(prayerTimes.asr, timeDisplay.clockFormat) + "\n" +
  langMaghrib + ": " + changeclockDisplay(prayerTimes.maghrib, timeDisplay.clockFormat) + "\n" +
  langIsha + ": " + changeclockDisplay(prayerTimes.isha, timeDisplay.clockFormat)
  )
  
  function changeclockDisplay(date, timeformat){
    if (timeformat == 24){
      return show0(date.getHours()) + ":" + show0(date.getMinutes())
    }
    else{
      let amPm = date.getHours() < 12 ? 'am' : 'pm'
      if (amPm == 'am'){
        return show0(date.getHours()) + ":" + show0(date.getMinutes()) + ' AM'
      }
      else{
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
}

function adjustPrayerTimes(){

}