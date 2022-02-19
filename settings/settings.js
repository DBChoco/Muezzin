window.addEventListener('DOMContentLoaded', () => { 
  loadSettings()

  initTooltips();
  setNumberLimit(document.getElementById("latInput"));
  setNumberLimit(document.getElementById("lonInput"));
  setTZlist();
  returnButton();
})

async function saveSettings(){
  var lat = document.getElementById("latInput").value;
  var lon = document.getElementById("lonInput").value;
  var tz = document.getElementById("tzlist").value;
  var calcmeth = document.getElementById("calcMethodList").value;
  var madhab = document.getElementById("madhabList").value;
  var hlr = document.getElementById("highLatitudeRuleList").value;
  var pcr = document.getElementById("polarCircleResolutionList").value;
  var shafaq = document.getElementById("shafaqList").value;
  
  await window.api.setToStore('latitude', lat);
  await window.api.setToStore('longitude', lon);
  await window.api.setToStore('timezone', tz);
  await window.api.setToStore('calcmeth', calcmeth);
  await window.api.setToStore('madhab', madhab);
  await window.api.setToStore('hlr', hlr);
  await window.api.setToStore('pcr', pcr);
  await window.api.setToStore('shafaq', shafaq);
}

async function loadSettings(){
  var lat =   await window.api.getFromStore('latitude');
  var lon =   await window.api.getFromStore('longitude');
  const tzVal =  await window.api.getFromStore('timezone');
  const calcmethVal =  await window.api.getFromStore('calcmeth');
  const madhabVal =  await window.api.getFromStore('madhab');
  const hlrVal =  await window.api.getFromStore('hlr');
  const pcrVal =  await window.api.getFromStore('pcr');
  const shafaqVal =  await window.api.getFromStore('shafaq');
  var valueChecker = setInterval(function(){
    if (shafaqVal != undefined){
      document.getElementById("latInput").value = lat
      document.getElementById("lonInput").value = lon
      selectFromList(document.getElementById("tzlist"), tzVal)
      selectFromList(document.getElementById("calcMethodList"), calcmethVal)
      selectFromList(document.getElementById("madhabList"), madhabVal)
      selectFromList(document.getElementById("highLatitudeRuleList"), hlrVal)
      selectFromList(document.getElementById("polarCircleResolutionList"), pcrVal)
      selectFromList(document.getElementById("shafaqList"), shafaqVal)
      clearInterval(valueChecker)
    }
  }, 100)
}

async function returnButton(){
  var set = document.getElementById("return");
  set.onclick= async function(){
    await saveSettings()
    window.api.send("settingsC");
    window.location.assign("../src/index.html");
  }
}

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

function initTooltips(){ 
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}

function selectFromList(list, val){
  list.childNodes.forEach(function(node){
    if (node.value == val){
      node.selected = true;
    }
  });
}