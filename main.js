// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, Tray, Menu} = require('electron')
const path = require('path')

let tray = null
let mainWindow, mediaWindow;

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
  mainWindow.loadFile('./src/index.html')


  mainWindow.on('minimize',function(event){
    event.preventDefault();
    mainWindow.hide();
  });

  
  mainWindow.on('close', function (event) {
    if(!app.isQuiting){
        event.preventDefault();
        mainWindow.hide();
    }
    return false;
  });

  //Create hidden mediaPlayer
  mediaWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, 'src/mediaPlayer/preload.js'),
    }
  });  

  ipcMain.handle('play',  (event, message)  => {
    mediaWindow.webContents.send('play', {});
  });
  ipcMain.handle('stop',  (event, message)  => {
    mediaWindow.webContents.send('stop', {});
  });

  mediaWindow.loadFile('src/mediaPlayer/mediaPlayer.html');
}

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
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const Store = require('electron-store');
const store = new Store();
const adhan = require('adhan')

var lat, lon, calcmeth, madhab, hlr, pcr, shafaq, prayerTimes;
var prayerTimes, datePrayerTimes, tomorrowPrayers;

loadSettings();
calcPrayerTimes();
setUpHandlers();
checkTime();

/*function loadAthan(prayerTimes){
  var currentPrayer = prayerTimes.currentPrayer();
  var timeUntilCurrentPrayer = prayerTimes.timeUntilPrayer(currentPrayer)
  if (timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] == -1 && timeUntilCurrentPrayer[2] == -1){
    playAthan();
  }
}*/

function checkTime(){ //checks for Athan time and current time, then if they are the same, it plays the Athan
  var interval = setInterval(function(){
    var prayers = nextPrayer();
    if (prayers[0] != undefined){
        var timeUntilCurrentPrayer = timeUntilPrayer(prayers[0])
        if(timeUntilCurrentPrayer[0] == -1 && timeUntilCurrentPrayer[1] == -1 && timeUntilCurrentPrayer[2] == 0){ //-1 because math.floor
          mediaWindow.webContents.send('play', {});
        }
    } 
  }, 1000)
}

async function loadSettings(){
  lat = await store.get('latitude');
  lon = await store.get('longitude');
  timezone = await store.get('timezone');
  calcmeth = await store.get('calcmeth');
  madhab = await store.get('madhab'); 
  hlr = await store.get( 'hlr');
  pcr = await store.get('pcr');
  shafaq = await store.get('shafaq');
}

function calcPrayerTimes(date = new Date()){
  var coordinates = new adhan.Coordinates(lat, lon)

  // https://github.com/batoulapps/adhan-js/blob/master/METHODS.md
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

function setUpHandlers(){
  ipcMain.handle('getStoreValue', (event, key) => {
    return store.get(key);
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

  ipcMain.handle("settingsO", function(){
    console.log("ola")
  })
  ipcMain.handle("settingsC", function(){
    loadSettings()
    calcPrayerTimes()
  })
}

async function waitFor(something, doSomething){
  var valueChecker = setInterval(function(){
    if (lat != undefined){
      clearInterval(valueChecker)
      doSomething;
      return true;
    }
  }, 100)
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