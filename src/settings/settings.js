var timeFormat, dateFormat, sec, language, adhanFile, bgImage;

window.addEventListener('DOMContentLoaded', () => { 
  loadSettings()

  //initTooltips();
  setNumberLimit(document.getElementById("latInput"));
  setNumberLimit(document.getElementById("lonInput"));
  setTZlist();
  returnButton();
  addThemeListener()
  setKeyPress();
  addLangListener()
})

//Saves the settings and sends them to store
async function saveSettings(){
  getTimeDateFormat()
  var lat = document.getElementById("latInput").value;
  var lon = document.getElementById("lonInput").value;
  var tz = document.getElementById("tzlist").value;
  var calcmeth = document.getElementById("calcMethodList").value;
  var madhab = document.getElementById("madhabList").value;
  var hlr = document.getElementById("highLatitudeRuleList").value;
  var pcr = document.getElementById("polarCircleResolutionList").value;
  var shafaq = document.getElementById("shafaqList").value;
  var lang = document.getElementById("langlist").value;
  var darkMode = document.getElementById("darkModeCheck").checked;
  var enableNotifs = document.getElementById("notifCheck").checked;
  var enableAdhan = document.getElementById("adhanCheck").checked;
  var systray = document.getElementById("systrayCheck").checked;
  var startupSound = document.getElementById("startUpSound").checked;
  var autoStart = document.getElementById("autoStartCheck").checked
  var minStart = document.getElementById("minStartCheck").checked;
  var motn = document.getElementById("MOTNCheck").checked;
  var totn = document.getElementById("TOTNCheck").checked

  await saveAdhan()
  await saveBgImage()
  await saveAdjustments()
  await window.api.setToStore('latitude', lat);
  await window.api.setToStore('longitude', lon);
  await window.api.setToStore('timezone', tz);
  await window.api.setToStore('calcmeth', calcmeth);
  await window.api.setToStore('madhab', madhab);
  await window.api.setToStore('hlr', hlr);
  await window.api.setToStore('pcr', pcr);
  await window.api.setToStore('shafaq', shafaq);
  await window.api.setToStore('timeFormat', timeFormat)
  await window.api.setToStore('dateFormat', dateFormat)
  await window.api.setToStore('seconds', sec)
  await window.api.setToStore('language', lang)
  await window.api.setToStore('darkMode', darkMode)
  await window.api.setToStore('notifCheck', enableNotifs)
  await window.api.setToStore('adhanCheck', enableAdhan)
  await window.api.setToStore('systray', systray)
  await window.api.setToStore('startup', startupSound)
  await window.api.setToStore('autoStart', autoStart)
  await window.api.setToStore('minStart', minStart)
  await window.api.setToStore('motnSunnah', motn)
  await window.api.setToStore('totnSunnah', totn)
  await saveCustomSettings()
}

async function loadSettings(){
  var lat =   await window.api.getFromStore('latitude', 0.00);
  var lon =   await window.api.getFromStore('longitude', 0.00);
  var tzVal =  await window.api.getFromStore('timezone', window.api.timeZoneGuess());
  var calcmethVal =  await window.api.getFromStore('calcmeth', 'MWL');
  var madhabVal =  await window.api.getFromStore('madhab', 'Shafi');
  var hlrVal =  await window.api.getFromStore('hlr', 'TA');
  var pcrVal =  await window.api.getFromStore('pcr', 'CC');
  var shafaqVal =  await window.api.getFromStore('shafaq', 'shafaqG');
  var darkMode = await window.api.getFromStore('darkMode', false);
  var notifCheck = await window.api.getFromStore('notifCheck', true);
  var adhanCheck = await window.api.getFromStore('adhanCheck', true);
  var systray = await window.api.getFromStore('systray', true);
  var startupSound = await window.api.getFromStore('startup', false);
  timeFormat =  await window.api.getFromStore('timeFormat', 12);
  dateFormat =  await window.api.getFromStore('dateFormat', 'DD/MM/YYYY');
  sec =  await window.api.getFromStore('seconds', true);
  language = await window.api.getFromStore('language', 'en');
  var autoStart = await window.api.getFromStore('autoStart', true);
  var minStart = await window.api.getFromStore('minStart', false);
  var motn = await window.api.getFromStore('motnSunnah', false);
  var totn = await window.api.getFromStore('totnSunnah', false);
  
  await loadAdhan()
  await loadCustomSettings()
  await loadAdjustments()
  var valueChecker = setInterval(function(){
    if (calcmethVal != undefined){
      document.getElementById("latInput").value = lat
      document.getElementById("lonInput").value = lon
      selectFromList(document.getElementById("tzlist"), tzVal)
      selectFromList(document.getElementById("calcMethodList"), calcmethVal)
      selectFromList(document.getElementById("madhabList"), madhabVal)
      selectFromList(document.getElementById("highLatitudeRuleList"), hlrVal)
      selectFromList(document.getElementById("polarCircleResolutionList"), pcrVal)
      selectFromList(document.getElementById("shafaqList"), shafaqVal)
      selectFromList(document.getElementById('langlist'), language)
      document.getElementById("darkModeCheck").checked = darkMode;
      document.getElementById("notifCheck").checked = notifCheck;
      document.getElementById("adhanCheck").checked = adhanCheck;
      document.getElementById("systrayCheck").checked = systray;
      document.getElementById("startUpSound").checked = startupSound;
      document.getElementById("autoStartCheck").checked = autoStart;
      document.getElementById("minStartCheck").checked = minStart;
      document.getElementById("MOTNCheck").checked = motn;
      document.getElementById("TOTNCheck").checked = totn;
      window.api.setTheme(darkMode, "settings.css");
      setTimeDateFormat()
      clearInterval(valueChecker)
      disableAdhanListener()
      loadLanguage(language)
      loadBgImage()
    }
  }, 100)
}


//Saves and bring you back to index.html when you click on the retrn button
async function returnButton(){
  var set = document.getElementById("return");
  set.onclick= async function(){
    await saveSettings()
    window.api.send("settingsC");
    window.location.assign("../main/index.html");
  }
}

//Saves and bring you back to index.html when you press the "Escape" key
async function setKeyPress(){
  document.addEventListener('keydown', async function(key){
    console.log(key.key)
    if (key.key == "Escape"){
      await saveSettings()
      window.api.send("settingsC");
      window.location.assign("../main/index.html");
    }
  })
}


//Makes you unable to type out of bounds for the lat and lon fields
function setNumberLimit(){
  var latInput = document.getElementById("latInput");
  var latOldValue = latInput.value;
  latInput.addEventListener("focus", function(){
    latOldValue = latInput.value;
  });
  latInput.addEventListener("input", function(){
    if (latInput.value > 90 || latInput.value < -90 || latInput.value.length > 7){
      latInput.value = latOldValue;
    }
    else{
      latOldValue = latInput.value;
    }
  });

  var lonInput = document.getElementById("lonInput");
  var lonOldValue = lonInput.value;
  lonInput.addEventListener("focus", function(){
    lonOldValue = lonInput.value;
  });
  lonInput.addEventListener("input", function(){
    if (lonInput.value > 180 || lonInput.value < -180 || lonInput.value.length > 7){
      lonInput.value = lonOldValue;
    }
    else{
      lonOldValue = lonInput.value;
    }
  });
}


/**
* Loads all timezones, and adds them to the TZ list
*/
function setTZlist(){
  const container = document.getElementById("tzlist");
  const defaultTimeZone = window.api.timeZoneGuess();
  const timeZonesList = window.api.timeZoneList();
  timeZonesList.forEach(function(value){
    var option = document.createElement("option")
    option.id = value;
    option.value = value;
    option.innerText = value;
    container.appendChild(option)
    if (value == defaultTimeZone){
      option.selected = true;
    }
  });
}


/**
* No idea, should delete it (it's disabled)
*/
function initTooltips(){ 
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}


//Goes through the form/list and selects the val
function selectFromList(list, val){
  console.log(val)
  list.childNodes.forEach(function(node){
    if (node.value == val){
      node.selected = true;
    }
  });
}


//Looks at the checkboxes/radios and sets the variables according to the formats
function getTimeDateFormat(){ 
  sec = document.getElementById("showSeconds").checked
  if (document.getElementById("24hTimeFormat").checked){
    timeFormat = 24;
  }
  else {
    timeFormat = 12;
  }
  if (document.getElementById("dateFormat1").checked){
    dateFormat = "DD/MM/YYYY"
  }
  else if (document.getElementById("dateFormat2").checked){
    dateFormat = "MM/DD/YYYY"
  }
  else{
    dateFormat = "YYYY/MM/DD"
  }
}


/**
* From the loaded values, checks and unchecks the time/formats checkboxes
*/
function setTimeDateFormat(){
  if (timeFormat != undefined){
    document.getElementById("showSeconds").checked = sec;
    if (timeFormat == 24){
      document.getElementById("24hTimeFormat").checked = true;
    } else{
      document.getElementById("12hTimeFormat").checked = true;
    }

    if(dateFormat == "DD/MM/YYYY"){
      document.getElementById("dateFormat1").checked = true;
    }else if ( dateFormat == "MM/DD/YYYY"){
      document.getElementById("dateFormat2").checked = true;
    }else{
      document.getElementById("dateFormat3").checked = true;
    }
  }
}


/**
* If val is defined, change the value of the element to @val
*
* @param element
* @param val
*/
function setSavedVal(element, val){
  if (val != undefined){
    element.value = val;
  }
}


/**
* Loads the custom/preset Adhan (bool, source path)
*/
async function loadAdhan(){
  adhanFile =  await window.api.getFromStore('adhanFile', [false, "ressources/audio/Adhan - Mecca.mp3", true]);
  var customCheck = document.getElementById("customAdhan");
  customCheck.checked = adhanFile[0]
  var duaCheck = document.getElementById("duaCheck");
  duaCheck.checked = adhanFile[2]

  if (!customCheck.checked){
    selectFromList(document.getElementById("adhanList"), adhanFile[1])
  }

  setUpAdhan()
  customCheck.addEventListener('change', function(){
   setUpAdhan()
  })

  document.getElementById("customAdhanFile").addEventListener("change", function(){
    var file = document.getElementById("customAdhanFile").files[0].path;
    console.log(file)
  })


 function setUpAdhan(){ //changes the states of the forms if custom adhans are enabled/disabled
  if (!customCheck.checked){
    document.getElementById("customAdhanFile").disabled = true;
    document.getElementById("adhanList").disabled = false;
  }
  else{
    document.getElementById("customAdhanFile").disabled = false;
    document.getElementById("adhanList").disabled = true;
  }
 }
}


/**
* Adds listeners to the many Adhan checkboxes and disables them when they are not used
*/
function disableAdhanListener(){
  var adhanCheck = document.getElementById("adhanCheck")
  disableAdhan(adhanCheck)
  adhanCheck.addEventListener('change', function(){
    disableAdhan(adhanCheck)
  })

  function disableAdhan(adhanCheck){
    if (!adhanCheck.checked){
      document.getElementById("customAdhanFile").disabled = true;
      document.getElementById("adhanList").disabled = true;
      document.getElementById("duaCheck").disabled = true;
      document.getElementById("customAdhan").disabled = true;
    } 
    else{
      document.getElementById("duaCheck").disabled = false;
      document.getElementById("customAdhan").disabled = false;
      if (!document.getElementById("customAdhan").checked){
        document.getElementById("customAdhanFile").disabled = true;
        document.getElementById("adhanList").disabled = false;
      }
      else{
        document.getElementById("customAdhanFile").disabled = false;
        document.getElementById("adhanList").disabled = true;
      }
    }
  }
}


/**
* Saves Adhan values (bool, source)
*/
async function saveAdhan(){
  var customCheck = document.getElementById("customAdhan");
  var duaCheck = document.getElementById("duaCheck");
  var path;
  if (!customCheck.checked){
    path = document.getElementById("adhanList").value;
  }
  else {
    var file = document.getElementById("customAdhanFile").files
    if (file != undefined && file.length != 0){
      path = file[0].path;
    }
    else{
      path = adhanFile[1]
    }
  }
  adhanFile = [customCheck.checked, path, duaCheck.checked]
  await window.api.setToStore('adhanFile', adhanFile)
}


/**
* Event listener in case the darkmode check changes
*/
function addThemeListener(){
  var darkTheme = document.getElementById("darkModeCheck")
  darkTheme.addEventListener('change', function(){
    window.api.setTheme(darkTheme.checked, "settings.css");
  })
}


/**
* Reloads the stylesheet if @param darkmode changes
*
* @param  darkMode bool: if darkmode is enabled => true
*/
function toggleDarkMode(darkMode){
  var head = document.getElementsByTagName('HEAD')[0]; 
  var link = document.createElement('link');
  link.rel = 'stylesheet'; 
  link.type = 'text/css';
  if (darkMode){
    link.href = '../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.css';
    //document.body.style.backgroundColor = "#0b5345 "
  }
  else{
    link.href = '../../node_modules/bootstrap/dist/css/bootstrap.css';
    //document.body.style.backgroundColor = "#85929e"
  }
  head.appendChild(link); 
}


/**
* Loads the background values (bool, source), and if true, sets the background + an event listener
*/
async function loadBgImage(){
  bgImage = await window.api.getFromStore('bgImage', [true, '../../ressources/images/bgImage.jpg']);
  var bgImageCheck = document.getElementById("bgImageCheck")
  bgImageCheck.checked  = bgImage[0];
  var file = document.getElementById("customBgImage")
  if (!bgImageCheck.checked ){
    file.disabled = true;
  }
  bgImageCheck.addEventListener('change', function(){
    if (!bgImageCheck.checked ){
      file.disabled = true;
    }
    else{
      file.disabled = false;
    }
  })
}

/**
* Saves the background image values (bool, source)
*/
async function saveBgImage(){
  var bgImageCheck = document.getElementById("bgImageCheck").checked
  if (!bgImageCheck){
    await window.api.setToStore('bgImage', [false, '../../ressources/images/bgImage.jpg'])
  }
  else{
    var file = document.getElementById("customBgImage").files
    if (file != undefined && file.length != 0){
      console.log(file)
      await window.api.setToStore('bgImage', [true, file[0].path])
    }
    else{
      await window.api.setToStore('bgImage', [true, bgImage[1]])
    }
  }
}


function addLangListener(){
  var langList = document.getElementById('langlist')
  langList.addEventListener('change', function(){
    loadLanguage(langList.value)
  })
}

/**
* Changes the innerTexts of all the elements in the page
*
* @param  lang   the language selected by the user
*/
function loadLanguage(lang){
  document.getElementById("v-pills-general-tab").innerHTML = '<i class="fa-solid fa-kaaba"></i>  ' +  window.api.getLanguage(lang, "general");
  document.getElementById("v-pills-location-tab").innerHTML = '<i class="fa-solid fa-location-dot"></i>  ' + window.api.getLanguage(lang, "location");
  document.getElementById("v-pills-audio-tab").innerHTML = '<i class="fa-solid fa-volume-high"></i>  ' + window.api.getLanguage(lang, "audio");
  document.getElementById("v-pills-appearance-tab").innerHTML = '<i class="fa-solid fa-language"></i>  ' +  window.api.getLanguage(lang, "appearance");
  document.getElementById("v-pills-advanced-tab").innerHTML = '<i class="fa-solid fa-sliders"></i>  ' + window.api.getLanguage(lang, "advanced");
  document.getElementById("v-pills-adjustments-tab").innerHTML = '<i class="fa-solid fa-clock"></i>  ' + window.api.getLanguage(lang, "adjustements");


  document.getElementById("langText").innerText = window.api.getLanguage(lang, "language");
  document.getElementById("settingsTitle").innerText = window.api.getLanguage(lang, "settings");
  document.getElementById("tfText").innerText = window.api.getLanguage(lang, "timeformat");
  document.getElementById("24hTimeFormatText").innerText = window.api.getLanguage(lang, "24hour");
  document.getElementById("12hTimeFormatText").innerText = window.api.getLanguage(lang, "12hour");
  document.getElementById("showSecondsText").innerText = window.api.getLanguage(lang, "showSseconds");
  document.getElementById("dfText").innerText = window.api.getLanguage(lang, "dateFormat");
  document.getElementById("df1Text").innerText = window.api.getLanguage(lang, "dateFormat1");
  document.getElementById("df2Text").innerText = window.api.getLanguage(lang, "dateFormat2");
  document.getElementById("df3Text").innerText = window.api.getLanguage(lang, "dateFormat3");
  document.getElementById("notifText").innerText = window.api.getLanguage(lang, "notifications");
  document.getElementById("notifCheckText").innerText = window.api.getLanguage(lang, "notifCheck");
  document.getElementById("coordinatesText").innerText = window.api.getLanguage(lang, "coordinates");
  document.getElementById("latText").innerText = window.api.getLanguage(lang, "latitude");
  document.getElementById("lonText").innerText = window.api.getLanguage(lang, "longitude");
  document.getElementById("tzText").innerText = window.api.getLanguage(lang, "timezone");
  document.getElementById("adhanText").innerText = window.api.getLanguage(lang, "adhan");
  document.getElementById("adhanCheckText").innerText = window.api.getLanguage(lang, "adhanCheck");
  //document.getElementById("adhanMeccaText").innerText = window.api.getLanguage(lang, "adhanMecca");
  //document.getElementById("adhanAqsaText").innerText = window.api.getLanguage(lang, "adhanAqsa");
  document.getElementById("customAdhanText").innerText = window.api.getLanguage(lang, "customAdhan");
  document.getElementById("duaAfterText").innerText = window.api.getLanguage(lang, "duaAfterAdhan");
  document.getElementById("themeText").innerText = window.api.getLanguage(lang, "theme");
  document.getElementById("darkModeText").innerText = window.api.getLanguage(lang, "darkMode");
  document.getElementById("bgImageText").innerText = window.api.getLanguage(lang, "bgImage");
  document.getElementById("bgImageCheckText").innerText = window.api.getLanguage(lang, "bgImageCheck");
  document.getElementById("calcMethodsText").innerText = window.api.getLanguage(lang, "calcMethods");
  document.getElementById("MWL").innerText = window.api.getLanguage(lang, "mwl");
  document.getElementById("Egyptian").innerText = window.api.getLanguage(lang, "egyptian");
  document.getElementById("Karachi").innerText = window.api.getLanguage(lang, "karachi");
  document.getElementById("UAQ").innerText = window.api.getLanguage(lang, "uaq");
  document.getElementById("Dubai").innerText = window.api.getLanguage(lang, "dubai");
  document.getElementById("Qatar").innerText = window.api.getLanguage(lang, "qatar");
  document.getElementById("Kuwait").innerText = window.api.getLanguage(lang, "kuwait");
  document.getElementById("MC").innerText = window.api.getLanguage(lang, "mc");
  document.getElementById("Singapore").innerText = window.api.getLanguage(lang, "singapore");
  document.getElementById("Turkey").innerText = window.api.getLanguage(lang, "turkey");
  document.getElementById("Tehran").innerText = window.api.getLanguage(lang, "tehran");
  document.getElementById("ISNA").innerText = window.api.getLanguage(lang, "isna");
  document.getElementById("MadhabText").innerText = window.api.getLanguage(lang, "madhab");
  document.getElementById("Shafi").innerText = window.api.getLanguage(lang, "shafi");
  document.getElementById("Hanafi").innerText = window.api.getLanguage(lang, "hanafi");
  document.getElementById("hlrText").innerText = window.api.getLanguage(lang, "hlr");
  document.getElementById("MOTN").innerText = window.api.getLanguage(lang, "motn");
  document.getElementById("SOTN").innerText = window.api.getLanguage(lang, "sotn");
  document.getElementById("TA").innerText = window.api.getLanguage(lang, "ta");
  document.getElementById("pcrText").innerText = window.api.getLanguage(lang, "pcr");
  document.getElementById("CC").innerText = window.api.getLanguage(lang, "cc");
  document.getElementById("CD").innerText = window.api.getLanguage(lang, "cd");
  document.getElementById("UND").innerText = window.api.getLanguage(lang, "und");
  document.getElementById("ShafaqText").innerText = window.api.getLanguage(lang, "shafaq");
  document.getElementById("shafaqG").innerText = window.api.getLanguage(lang, "general");
  document.getElementById("shafaqR").innerText = window.api.getLanguage(lang, "ahmer");
  document.getElementById("shafaqW").innerText = window.api.getLanguage(lang, "abyad");
  document.getElementById("autoStartText").innerText = window.api.getLanguage(lang, "autoStart");
  document.getElementById("autoStartCheckText").innerText = window.api.getLanguage(lang, "startAtLaunch");
  document.getElementById("copyright").innerText = window.api.getLanguage(lang, "copyright");
  document.getElementById("quote").innerText = window.api.getLanguage(lang, "quote");
  document.getElementById("source").innerText = window.api.getLanguage(lang, "source");
  document.getElementById("startUpSoundText").innerText = window.api.getLanguage(lang, "startUpSound");
  document.getElementById("startUpSoundText2").innerText = window.api.getLanguage(lang, "playSound");
  document.getElementById("systrayText").innerText = window.api.getLanguage(lang, "sysTray");
  document.getElementById("systrayCheckText").innerText = window.api.getLanguage(lang, "minToTray");
  document.getElementById("customSettText").innerText = window.api.getLanguage(lang, "customSettings");
  document.getElementById("enableCalcText").innerText = window.api.getLanguage(lang, "enableCS");
  document.getElementById("fajrAngleText").innerText = window.api.getLanguage(lang, "fAngle");
  document.getElementById("maghribAngleText").innerText = window.api.getLanguage(lang, "mAngle");
  document.getElementById("ishaAngleText").innerText = window.api.getLanguage(lang, "iAngle");
  document.getElementById("delayText").innerText = window.api.getLanguage(lang, "delayAfterM");
  document.getElementById("delayFormText").innerText = window.api.getLanguage(lang, "delayMin");
  document.getElementById("return").innerText = window.api.getLanguage(lang, "return");
  document.getElementById("France12").innerText = window.api.getLanguage(lang, "france") + " 12";
  document.getElementById("France15").innerText = window.api.getLanguage(lang, "france") + " 15";
  document.getElementById("France18").innerText = window.api.getLanguage(lang, "france") + " 18";
  document.getElementById("Russia").innerText = window.api.getLanguage(lang, "russia");
  document.getElementById("Gulf").innerText = window.api.getLanguage(lang, "gulf");
  document.getElementById("adjustmentsText").innerHTML = window.api.getLanguage(lang, "adjustements");
  document.getElementById("adjCheckText").innerText = window.api.getLanguage(lang, "enableAdj");
  document.getElementById("fajrAdjText").innerText = window.api.getLanguage(lang, "fajrAdj");
  document.getElementById("dhuhrAdjText").innerText = window.api.getLanguage(lang, "dhuhrAdj");
  document.getElementById("asrAdjText").innerText = window.api.getLanguage(lang, "asrAdj");
  document.getElementById("maghribAdjText").innerText = window.api.getLanguage(lang, "maghribAdj");
  document.getElementById("ishaAdjText").innerText = window.api.getLanguage(lang, "ishaAdj");
  document.getElementById("sunnahTimesText").innerText = window.api.getLanguage(lang, "showSunnah");
  document.getElementById("MOTNCheckText").innerText = window.api.getLanguage(lang, "motn");
  document.getElementById("TOTNCheckText").innerText = window.api.getLanguage(lang, "totn");
  document.getElementById("minStartCheckText").innerText = window.api.getLanguage(lang, "minStart");
  document.getElementById("adhanMecca").innerHTML = window.api.getLanguage(lang, "AdhanMecca");
  document.getElementById("adhanAqsa").innerHTML  = window.api.getLanguage(lang, "adhanAqsa");
}


async function loadCustomSettings(){
  var customValues = await window.api.getFromStore('customSettings', [false, 0,0,0]);
  var customCheck = document.getElementById('customCalcCheck');
  var fajrAngle = document.getElementById("fajrAngle");
  var maghribAngle = document.getElementById("maghribAngle");
  var ishaAngle = document.getElementById("ishaAngle");
  
  var delay = await window.api.getFromStore('delay', [false, 0]);
  var delayCheck = document.getElementById('delayCheck');
  var delayForm = document.getElementById('delayForm');

  if(customValues[0]){
    customCheck.checked = true;
    fajrAngle.value = customValues[1]
    maghribAngle.value = customValues[2]
    ishaAngle.value = customValues[3]
  }
  else{
    fajrAngle.disabled = true
    maghribAngle.disabled = true
    ishaAngle.disabled = true
    document.getElementById("calcMethodList").disabled = false;
  }

  customCheck.addEventListener('change', function(){
    if (customCheck.checked){
      fajrAngle.disabled = false
      maghribAngle.disabled = false
      ishaAngle.disabled = false
      document.getElementById("calcMethodList").disabled = true;
    }
    else{
      fajrAngle.disabled = true
      maghribAngle.disabled = true
      ishaAngle.disabled = true
      document.getElementById("calcMethodList").disabled = false;
    }
  })

  if (delay[0]){
    delayCheck.checked = true
    delayForm.value = delay[1]
  }else{
    delayForm.disabled = true;
  }

  delayCheck.addEventListener("change", function(){
    if(delayCheck.checked){
      delayForm.disabled = false;
    }
    else{
      delayForm.disabled = true;
    }
  })
}

async function saveCustomSettings(){
  var customCheck = document.getElementById('customCalcCheck');
  var delayCheck = document.getElementById('delayCheck');
  if(customCheck.checked){
    var fajrAngle = document.getElementById("fajrAngle");
    var maghribAngle = document.getElementById("maghribAngle");
    var ishaAngle = document.getElementById("ishaAngle");
    await window.api.setToStore('customSettings', [true, fajrAngle.value, maghribAngle.value, ishaAngle.value])
  }
  else{
    await window.api.setToStore('customSettings', [false, 0,0,0])
  }

  if(delayCheck.checked){
    var delayForm = document.getElementById('delayForm');
    await window.api.setToStore('delay', [true, delayForm.value])
  }
  else{
    await window.api.setToStore('delay', [false, 0])
  }
}

//Loads the prayer times adjustements from the store and adds an event listener for the adjustements check box
async function loadAdjustments(){
  var adjustements = await window.api.getFromStore('adj', [false, 0,0,0,0,0]);
  console.log(adjustements)
  for (let i = 1; i <= 5; i++){
    console.log(adjustements[i])
    if (adjustements[i] == undefined){
      adjustements[i] = 0;
      console.log(adjustements[i])
    }
  }
  document.getElementById("adjCheck").checked = adjustements[0];
  document.getElementById("fajrAdjInput").value = adjustements[1];
  document.getElementById("dhuhrAdjInput").value = adjustements[2];
  document.getElementById("asrAdjInput").value = adjustements[3];
  document.getElementById("maghribAdjInput").value = adjustements[4];
  document.getElementById("ishaAdjInput").value = adjustements[5];

  enableAdjustements(document.getElementById("adjCheck").checked)
  
  document.getElementById("adjCheck").addEventListener("change", function(){
    enableAdjustements(document.getElementById("adjCheck").checked)
  })

  function enableAdjustements(boolean){
    document.getElementById("fajrAdjInput").disabled = !boolean;
    document.getElementById("dhuhrAdjInput").disabled = !boolean;
    document.getElementById("asrAdjInput").disabled = !boolean;
    document.getElementById("maghribAdjInput").disabled = !boolean;
    document.getElementById("ishaAdjInput").disabled = !boolean;
  }
}


//Rounds the adjustements (Math.round) and saves them to the store
async function saveAdjustments(){
  var adjCheck = document.getElementById("adjCheck").checked;  
  var fajrAdj = document.getElementById("fajrAdjInput").value;
  var dhuhrAdj = document.getElementById("dhuhrAdjInput").value;
  var asrAdj = document.getElementById("asrAdjInput").value;
  var maghribrAdj = document.getElementById("maghribAdjInput").value;
  var ishaAdj = document.getElementById("ishaAdjInput").value;

  var adjustements = [adjCheck, Math.round(fajrAdj),Math.round(dhuhrAdj),Math.round(asrAdj),Math.round(maghribrAdj),Math.round(ishaAdj)]
  
  await window.api.setToStore('adj', adjustements);
}


//Loads the prayer times mosqueMode from the store and adds an event listener for the mosqueMode check box
async function loaddelayustments(){
  var mosqueMode = await window.api.getFromStore('mosque', [false, 0,0,0,0,0]);
  for (let i = 1; i <= 5; i++){
    if (mosqueMode[i] == undefined){
      mosqueMode[i] = 0;
    }
  }
  document.getElementById("delayCheck").checked = mosqueMode[0];
  document.getElementById("fajrdelayInput").value = mosqueMode[1];
  document.getElementById("dhuhrdelayInput").value = mosqueMode[2];
  document.getElementById("asrdelayInput").value = mosqueMode[3];
  document.getElementById("maghribdelayInput").value = mosqueMode[4];
  document.getElementById("ishadelayInput").value = mosqueMode[5];

  enableMosque(document.getElementById("delayCheck").checked)
  
  document.getElementById("delayCheck").addEventListener("change", function(){
    enableMosque(document.getElementById("delayCheck").checked)
  })

  function enableMosque(boolean){
    document.getElementById("fajrdelayInput").disabled = !boolean;
    document.getElementById("dhuhrdelayInput").disabled = !boolean;
    document.getElementById("asrdelayInput").disabled = !boolean;
    document.getElementById("maghribdelayInput").disabled = !boolean;
    document.getElementById("ishadelayInput").disabled = !boolean;
    document.getElementById("adhanCheck").disabled = !boolean;
    adhanCheck
  }
}

async function saveMosqueMode(){
  var mosqueCheck = document.getElementById("mosqueCheck").checked;  
  var fajrdelay = document.getElementById("fajrdelayInput").value;
  var dhuhrdelay = document.getElementById("dhuhrdelayInput").value;
  var asrdelay = document.getElementById("asrdelayInput").value;
  var maghribrdelay = document.getElementById("maghribdelayInput").value;
  var ishadelay = document.getElementById("ishadelayInput").value;

  var mosqueMode = [mosqueCheck, Math.round(fajrdelay),Math.round(dhuhrdelay),Math.round(asrdelay),Math.round(maghribrdelay),Math.round(ishadelay)]
  
  await window.api.setToStore('mosque', mosqueMode);
}

