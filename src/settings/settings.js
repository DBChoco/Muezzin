var timeFormat, dateFormat, sec, language, adhanFile, bgImage;
var lat,lon;

window.addEventListener('DOMContentLoaded', () => { 
  loadSettings()
  setNumberLimit(document.getElementById("latInput"));
  setNumberLimit(document.getElementById("lonInput"));
  setTZlist();
  returnButton();
  addThemeListener()
  setKeyPress();
  addLangListener()
  loadQueryString()
})

/**
* Saves all settings to the store
*/
async function saveSettings(){
  await saveTimeDateFormat()
  //Values that might change too much should not be saved automaticaly (no saver)
  if (lat != document.getElementById("latInput").value) await window.api.setToStore('latitude', lat);
  if (lon != document.getElementById("lonInput").value) await window.api.setToStore('longitude', lon);
  await saveAdhan()
  await saveBgImage()
  await saveAdjustments()
  await saveCustomSettings()
  await saveQuran()
}

/**
* Loads all the settings from the store
*/
async function loadSettings(){
  lat = await window.api.getFromStore('latitude', 0.00);
  lon = await window.api.getFromStore('longitude', 0.00);
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


  document.getElementById("latInput").value = lat
  document.getElementById("lonInput").value = lon

  //Selects the loaded value from the lists
  selectFromList(document.getElementById('langlist'), language)
  selectFromList(document.getElementById("tzlist"), tzVal)
  selectFromList(document.getElementById("calcMethodList"), calcmethVal)
  selectFromList(document.getElementById("madhabList"), madhabVal)
  selectFromList(document.getElementById("highLatitudeRuleList"), hlrVal)
  selectFromList(document.getElementById("polarCircleResolutionList"), pcrVal)
  selectFromList(document.getElementById("shafaqList"), shafaqVal)
  
  await addSaverValue(document.getElementById("tzlist"), tzVal, "timezone")
  await addSaverValue(document.getElementById("calcMethodList"), calcmethVal, "calcmeth")
  await addSaverValue(document.getElementById("madhabList"), madhabVal, "madhab")
  await addSaverValue(document.getElementById("highLatitudeRuleList"), hlrVal, "hlr")
  await addSaverValue(document.getElementById("polarCircleResolutionList"), pcrVal, "pcr")
  await addSaverValue(document.getElementById("shafaqList"), shafaqVal, "shafaq")
  await addSaverValue(document.getElementById("langlist"), language, "language")

  await addSaverChecked(document.getElementById("darkModeCheck"), darkMode, 'darkMode')
  await addSaverChecked(document.getElementById("notifCheck"), notifCheck, 'notifCheck');
  await addSaverChecked(document.getElementById("adhanCheck"), adhanCheck, 'adhanCheck');
  await addSaverChecked(document.getElementById("systrayCheck"), systray, 'systray');
  await addSaverChecked(document.getElementById("startUpSound"), startupSound, 'startup');
  await addSaverChecked(document.getElementById("autoStartCheck"), autoStart, 'autoStart');
  await addSaverChecked(document.getElementById("minStartCheck"), minStart, 'minStart');
  await addSaverChecked(document.getElementById("MOTNCheck"), motn, 'motnSunnah');
  await addSaverChecked(document.getElementById("TOTNCheck"), totn, 'totnSunnah');
  await addSaverChecked(document.getElementById("showSeconds"), sec, "seconds")

  window.api.setTheme(darkMode, "settings.css");
  setTimeDateFormat()
  disableAdhanListener()
  loadLanguage(language)
  loadBgImage()

  await loadQuranSettings()
}


/**
* Sets the element to the value and adds a listener
* If the element changes, the value is directly sent to the store value (thanks to its name)
*
* @param element the UI element that gets the value and event listener.
* @param value if this one is defined
* @param name if this one is defined
*/
async function addSaverChecked(element, value, name){
  element.checked = value;
  element.addEventListener("change", async function(){
    await window.api.setToStore(name, element.checked)
    console.debug("Saved " + element.checked + " to store (from " + value + ")")
  })
}

/**
* Sets the element to the value and adds a listener
* If the element changes, the value is directly sent to the store value (thanks to its name)
*
* @param element the UI element that gets the value and event listener. 
* @param value if this one is defined
* @param name if this one is defined
*/
async function addSaverValue(element, value, name){
  element.value = value;
  element.addEventListener("change", async function(){
    await window.api.setToStore(name, element.value)
    console.debug("Saved " + element.value + " to store (from " + value + ")")
  })
}


/**
* Saves and brings you back to index.html when you click on the retrn button (adds listener)
*/
async function returnButton(){
  var set = document.getElementById("return");
  set.onclick= async function(){
    await saveSettings()
    window.api.send("settingsC");
    window.location.assign("../main/index.html");
  }
}

/**
* Saves and brings you back to index.html when you press the ESC key
*/
async function setKeyPress(){
  document.addEventListener('keydown', async function(key){
    console.debug("Pressed the: " + key.key + " key")
    if (key.key == "Escape"){
      await saveSettings()
      window.api.send("settingsC");
      window.location.assign("../main/index.html");
    }
  })
}

/**
 * Makes you unable to type out of bounds for the lat and lon fields
 */
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
 * Goes through the form/list and selects the val
 */
function selectFromList(list, val){
  list.childNodes.forEach(function(node){
    if (node.value == val){
      node.selected = true;
    }
  });

}


//Looks at the checkboxes/radios and sets the variables according to the formats
async function saveTimeDateFormat(){ 
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
  await window.api.setToStore('timeFormat', timeFormat);
  await window.api.setToStore('dateFormat', dateFormat);
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
* @param element the element gets the value
* @param val if this one is defined
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
    console.debug("Loaded: " + file)
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
      await window.api.setToStore('bgImage', [true, file[0].path])
    }
    else{
      let darkmode = document.getElementById("darkModeCheck").checked
      if (darkmode && bgImage[1] == '../../ressources/images/bgImage.jpg'){
        await window.api.setToStore('bgImage', [true, '../../ressources/images/bgImage_dark.avif'])
      }
      else if (!darkmode && bgImage[1] == '../../ressources/images/bgImage_dark.avif'){
        await window.api.setToStore('bgImage', [true, '../../ressources/images/bgImage.jpg'])
      }
      else{
        await window.api.setToStore('bgImage', [true, bgImage[1]])
      }
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
  document.getElementById("v-pills-appearance-tab").innerHTML = '<i class="fa-solid fa-palette"></i>  ' +  window.api.getLanguage(lang, "appearance");
  document.getElementById("v-pills-advanced-tab").innerHTML = '<i class="fa-solid fa-sliders"></i>  ' + window.api.getLanguage(lang, "advanced");
  document.getElementById("v-pills-adjustments-tab").innerHTML = '<i class="fa-solid fa-clock"></i>  ' + window.api.getLanguage(lang, "adjustements");
  document.getElementById("v-pills-quran-tab").innerHTML = '<i class="fa-solid fa-book-quran"></i>  ' + window.api.getLanguage(lang, "quran");

  document.getElementById("return").innerHTML = '<i class="fa fa-arrow-circle-left"></i>  ' + window.api.getLanguage(lang, "return");

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

  document.getElementById("quranFontText").innerHTML  = window.api.getLanguage(lang, "font");
  document.getElementById("quranFontSizeText").innerHTML  = window.api.getLanguage(lang, "fontsize");
  document.getElementById("translationText").innerHTML  = window.api.getLanguage(lang, "translation");
  document.getElementById("showTranslationCheckText").innerHTML  = window.api.getLanguage(lang, "showTrans");
  document.getElementById("quranLangCheckText").innerHTML  = window.api.getLanguage(lang, "diffLang");
  document.getElementById("translationFontSizeText").innerHTML  = window.api.getLanguage(lang, "fontsize");
  document.getElementById("transliterationText").innerHTML  = window.api.getLanguage(lang, "transliteration");
  document.getElementById("showTransliterationCheckText").innerHTML  = window.api.getLanguage(lang, "showTransliteration");
  document.getElementById("transliterationFontSizeText").innerHTML  = window.api.getLanguage(lang, "fontsize");
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
  for (let i = 1; i <= 5; i++){
    if (adjustements[i] == undefined){
      adjustements[i] = 0;
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


/**
* Loads all elements related to the Quran reader
*/
async function loadQuranSettings(){
  let quranFontsize = document.getElementById("quranFontSize")
  let showTranslationDiv = document.getElementById("showTranslationCheck")
  let diffLangDiv = document.getElementById("quranLangCheck")
  let quranLangListDiv = document.getElementById("quranLangList")
  let transListDiv = document.getElementById("translationList")
  let transFontSizeDiv = document.getElementById("translationFontSize")
  let showTransliterationDiv = document.getElementById("showTransliterationCheck")
  let transliFontSizeDiv = document.getElementById("transliterationFontSize")

  let quran = await window.api.getFromStore('quran', {
    fontsize: 42,
    translation:{
        show: true,
        lang: {
          enabled: false,
          lang: "en"
        },
        trans: 131,
        fontsize: 14
    },
    transliteration:{
        show: true,
        fontsize: 14
    },
  })

  loadTranslationList()
  loadLanguageList()

  quranFontsize.value = quran.fontsize;
  showTranslationDiv.checked = quran.translation.show;
  diffLangDiv.checked = quran.translation.lang.enabled;
  transFontSizeDiv.value = quran.translation.fontsize;
  showTransliterationDiv.checked = quran.transliteration.show;
  transliFontSizeDiv.value = quran.transliteration.fontsize;

  quranDisableListeners()


   /**
  * Loads the list of languages from a downloaded JSON and fill an inputList
  */
  function loadLanguageList(){
    fetch('../../ressources/quran/languages.json')
    .then(reponse => reponse.json())
    .then(json => {
      for (transLang of json["languages"]){
        var option = document.createElement("option")
        option.dataset.language_name = (transLang["translated_name"]["name"]).toLowerCase()
        option.value = transLang["iso_code"]
        option.innerText = transLang["native_name"] != "" ? transLang["native_name"] : transLang["name"]
        
        quranLangListDiv.appendChild(option)
      }
      loadDefaultLang()
    })
    quranLangListDiv.addEventListener("change", function(){
      hideTranslations()
    })
    diffLangDiv.addEventListener("change", function(){
      if (!diffLangDiv.checked){
        loadDefaultLang()
      }
    })
    document.getElementById("langlist").addEventListener("change",function(){
      if (!diffLangDiv.checked){
        console.log("YES")
        loadDefaultLang()
      }
    })
  }

  /**
  * This function is called when "Different languages from app" is disabled, it loads the default value (selected general) and changes it and the translation list
  */
  function loadDefaultLang(language = undefined){
    if (language != undefined){
      if ((language.value == quran.translation.lang.lang && diffLangDiv.checked) || 
          (!diffLangDiv.checked && language.value == document.getElementById("langlist").options[document.getElementById("langlist").selectedIndex].value)) 
          language.selected = true;
          hideTranslations()
    }
    else{
      for (let language of quranLangListDiv){
        if ((language.value == quran.translation.lang.lang && diffLangDiv.checked) || 
            (!diffLangDiv.checked && language.value == document.getElementById("langlist").options[document.getElementById("langlist").selectedIndex].value)) 
            language.selected = true;
            hideTranslations()
      }
    }
  }

  /**
  * Loads the list of translation from a downloaded JSON and fill an inputList
  */
  function loadTranslationList(){
    fetch('../../ressources/quran/translations.json')
    .then(reponse => reponse.json())
    .then(json => {
      for (translation of json["translations"]){
        var option = document.createElement("option")
        option.dataset.lang = translation["language_name"]
        option.value = translation["id"]
        option.innerText = translation["name"]
        if (option.value == quran.translation.trans) option.selected = true;
        transListDiv.appendChild(option)
      }
    })
    transListDiv.addEventListener("change", function(){
      quran.translation.trans = transListDiv.options[transListDiv.selectedIndex].value;
      console.log(quran.translation.trans)
    })
  }

  /**
  * Adds listeners to disable some inputs
  */
  function quranDisableListeners(){
    showTranslationDiv.addEventListener("change", function(){
      diffLangDiv.disabled = !showTranslationDiv.checked;
      quranLangListDiv.disabled = !showTranslationDiv.checked || !diffLangDiv.checked;
      transListDiv.disabled = !showTranslationDiv.checked;
      transFontSizeDiv.disabled = !showTranslationDiv.checked;
    })
    diffLangDiv.addEventListener("change", function(){
      quranLangListDiv.disabled = !diffLangDiv.checked
    })
    diffLangDiv.disabled = !showTranslationDiv.checked;
    quranLangListDiv.disabled = !showTranslationDiv.checked || !diffLangDiv.checked;
    transListDiv.disabled = !showTranslationDiv.checked;
    transFontSizeDiv.disabled = !showTranslationDiv.checked;
    
    showTransliterationDiv.addEventListener("change", function(){
      transliFontSizeDiv.disabled = !showTransliterationDiv.checked
    })
    transliFontSizeDiv.disabled = !showTransliterationDiv.checked
  }

  /**
  * Checks the selected language and hides translations that are not in that language
  */
  function hideTranslations(){
    var selectedOne = false;
    let selectedLang = quranLangListDiv.options[quranLangListDiv.selectedIndex].dataset.language_name
    for (translation of transListDiv){
      translation.dataset.lang == selectedLang ? translation.style.display = "block" :  translation.style.display = "none" 
      if ((translation.value == quran.translation.trans || !selectedOne) && translation.style.display == "block"){
        translation.selected = true;
        selectedOne = true;
      }
    }
  }
}

async function saveQuran(){
  let quran = {
    fontsize: document.getElementById("quranFontSize").value,
    translation:{
        show: document.getElementById("showTranslationCheck").checked,
        lang: {
          enabled: document.getElementById("quranLangCheck").checked,
          lang: document.getElementById("quranLangList").options[document.getElementById("quranLangList").selectedIndex].value
        },
        trans: document.getElementById("translationList").options[document.getElementById("translationList").selectedIndex].value,
        fontsize: document.getElementById("translationFontSize").value
    },
    transliteration:{
        show: document.getElementById("showTransliterationCheck").checked,
        fontsize: document.getElementById("transliterationFontSize").value
    },
  }
  await window.api.setToStore("quran", quran)
}

function loadQueryString(){
  const queryString = window.location.search;
  if (queryString == "?page=quran"){
    var quranTab = new bootstrap.Tab(document.getElementById("v-pills-quran-tab"))
    quranTab.show();
  }
}