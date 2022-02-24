module.exports = {
    loadTrans: function loadTranslation(lang, value){
        return dict[lang][value];
    }
}

var dict = {
    en: {
        'settings': 'Settings', //settingsTitle
        'language': 'Language', //langText
        'timeformat': 'Time format', //tfText
        '24hour': '24 Hour', //24hTimeFormatText
        '12hour': '12 Hour', //12hTimeFormatText
        'showSseconds': 'Show seconds', //showSecondsText
        'dateFormat': 'Date format', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'Notifications', //notifText
        'notifCheck': 'Enable notifications', //notifCheckText
        'coordinates': 'Coordinates', //coordinatesText
        'latitude': 'Latitude', //latText
        'longitude': 'Longitude', //lonText
        'timezone': 'Time zone', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': 'Enable Adhan', //adhanCheckText
        'AdhanMecca': 'Adhan Mecca', //adhanMeccaText
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Custom Adhan', //customAdhanText
        'duaAfterAdhan': "Du'a after Adhan", //duaAfterText
        'theme': 'Theme', //themeText
        'darkMode': 'Dark Mode', //darkModeText
        'bgImage': 'Background Image', //bgImageText
        'bgImageCheck': 'Enable Background Image', //bgImageCheckText
        'calcMethods': 'Calculation Methods', //calcMethodsText
        'mwl': 'Muslim World League', //MWL
        'egyptian': 'Egyptian', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC
        'singapore': 'Singapore', //Singapore
        'turkey': 'Turkey', //Turkey
        'tehran': 'Tehran', //Tehran
        'isna': 'ISNA', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'High Latitude Rule', //hlrText
        'motn': 'Middle of the Night', //MOTN
        'sotn': 'Seventh of the Night', //SOTN
        'ta': 'Twilight Angle', //TA
        'pcr': 'Polar Circle Resolution', //pcrText
        'cc': 'Closest City', //CC
        'cd': 'Closest Date', //CD
        'und': 'Do not calculate', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'General', //shafaqG
        'ahmer': 'Red Twilight (ahmer)', //shafaqR
        'abyad': 'White Twilight (abyad)', //shafaqW
        'return': 'Return', //return
        'ola': 'ola',
        'ola': 'ola',
        'ola': 'ola',
        'ola': 'ola',
    },
    fr: {
        'Hallo': 'Bonjour',
        'Goodbye': 'Au revoir',
        'castle': 'chateau'
    },
    de: {
        'Hallo': 'Hallo',
        'Goodbye': 'Auf Wiedersehen',
        'castle': 'schloss'
    }
}
