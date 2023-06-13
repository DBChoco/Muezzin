module.exports = {
    loadTrans: function loadTranslation(lang, value) {
        return dict[lang][value];
    },
    langAvailable: function langAvailable(lang){
        return (lang in dict);
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
        'AdhanMecca': 'Adhan Mecca', //adhanMeccaText //Traduire juste Mecca
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
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapore', //Singapore
        'turkey': 'Turkey', //Turkey
        'tehran': 'Tehran', //Tehran
        'isna': 'ISNA (NA)', //ISNA
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
        'general': 'General', //v-pills-general-tab
        'location': 'Location', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Appearance', //v-pills-appearance-tab
        'advanced': 'Advanced', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Auto Start', //autoStartText
        'startAtLaunch': 'Start at launch', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, All rights reserved.', //copyright
        'quote': '... Indeed, prayer has been decreed upon the believers a decree of specified times.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Sunrise',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Now',
        'timeUntil': 'Time until',
        'startUpSound': 'Start Up Sound', //startUpSoundText
        'playSound': 'Play sound on startup', //startUpSoundText2
        'sysTray': 'System tray', //systrayText
        'minToTray': 'Minimize to tray', //systrayCheckText
        'customSettings': 'Custom settings', //customSettText
        'enableCS': 'Enable Custom Calculation Settings', //enableCalcText
        'fAngle': 'Fajr Angle', //fajrAngleText
        'mAngle': 'Maghrib Angle', //maghribAngleText
        'iAngle': 'Isha Angle', //ishaAngleText
        'delayAfterM': 'Delay after Maghrib', //delayText
        'delayMin': 'Delay (minutes)', //delayFormText
        'france': 'France', //France12 15 & 18
        'russia': 'Russia', //Russia
        'gulf': 'Gulf Region', //Gulf
        'preferences': 'Preferences', //menu label
        'resetSettings': 'Reset settings', //menu label
        'adjustements': 'Adjustments', //adjustmentsText
        'here': 'here',
        'enableAdj': 'Enable adjustments', //adjCheckText
        'fajrAdj': 'Fajr Adjustments', //fajrAdjText
        'dhuhrAdj': 'Dhurh Adjustments', //fajrAdjText
        'asrAdj': 'Asr Adjustments', //fajrAdjText
        'maghribAdj': 'Maghrib Adjustments', //fajrAdjText
        'ishaAdj': 'Isha Adjustments', //fajrAdjText
        'showSunnah': 'Show Sunnah times', //sunnahTimesText
        'motn': 'Middle of the night',  //MOTNCheckText
        'totn': 'Third of the night', //TOTNCheckText
        'minStart': 'Start minimized', //minStartCheckText
        'updateAvailable': 'Update available',
        'version': 'Version',
        'available': 'is available for download on GitHub',
        'download': 'Download',
        'later': 'Later',
        'quran': "Qur'an",
        'font': 'Font',
        'fontsize': 'Font size',
        'translation': 'Translation',
        'showTrans': 'Show translation',
        'diffLang': 'Different language from app',
        'transliteration': 'Transliteration',
        'showTransliteration': 'Show transliteration',
        'previous': 'Previous Surah',
        'next': 'Next Surah',
        'weather': 'Weather',
        'showWeather': 'Show weather',
        'units': 'Units',
        'celsius': 'Celsius',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenheit',
        'playDua': "Play Du'a after Adhan",
        'open': 'Open',
        'quit': 'Quit',
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Custom Fajr Adhan',
        'recitation': 'Recitation',
        'reciter': 'Reciter',
        "customTimes": "Custom Times",
        "enableCustomTimes" : "Enable custom times",
        "jumuah" : "Jumuah",
        "jumuahTime": "Jumuah Time",
        "enableJumuahTime": "Enable Jumuah Time",
        "shortAllahuAkbar": "Short sound - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Hijri date adjustments",
        "hijriAdjText" : "Hijri date difference",

    },
    fr: {
        'settings': 'Options', //settingsTitle
        'language': 'Langue', //langText
        'timeformat': 'Format du temps', //tfText
        '24hour': '24 heures', //24hTimeFormatText
        '12hour': '12 heures', //12hTimeFormatText
        'showSseconds': 'Montrer les secondes', //showSecondsText
        'dateFormat': 'Format de la date', //dfText
        'dateFormat1': 'JJ/MM/AAAA', //id="df1Text"
        'dateFormat2': 'MM/JJ/AAAA', //id="df2Text"
        'dateFormat3': 'AAAA/MM/JJ', //id="df3Text"
        'notifications': 'Notifications', //notifText
        'notifCheck': 'Activer les notifications', //notifCheckText
        'coordinates': 'Coordonées', //coordinatesText
        'latitude': 'Latitude', //latText
        'longitude': 'Longitude', //lonText
        'timezone': 'Fuseau horaire', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': "Activer l'Adhan", //adhanCheckText
        'AdhanMecca': 'Adhan Mecque', //adhanMeccaText
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Custom Adhan', //customAdhanText
        'duaAfterAdhan': "Du'a après l'Adhan", //duaAfterText
        'theme': 'Thème', //themeText
        'darkMode': 'Mode sombre', //darkModeText
        'bgImage': 'Image de fond', //bgImageText
        'bgImageCheck': 'Activer les images de fond', //bgImageCheckText
        'calcMethods': 'Méthodes de calcul', //calcMethodsText
        'mwl': 'Ligue Musulmane Mondiale', //MWL
        'egyptian': 'Egyptien', //Egyptian
        'karachi': 'Karâchi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC
        'singapore': 'Singapour', //Singapore
        'turkey': 'Turquie', //Turkey
        'tehran': 'Téhéran', //Tehran
        'isna': 'ISNA (Amérique)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Règle de latitude élevée', //hlrText
        'motn': 'Millieu de la Nuit', //MOTN
        'sotn': 'Septième de la nuit', //SOTN
        'ta': 'Angle crépusculaire', //TA
        'pcr': 'Résolution du cercle polaire', //pcrText
        'cc': 'Ville la plus Proche', //CC
        'cd': 'Date la plus Proche', //CD
        'und': 'Ne pas Calculer', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'Général', //shafaqG v-pills-general-tab
        'ahmer': 'Crépuscule rouge (ahmer)', //shafaqR
        'abyad': 'Crépuscule blanc (abyad)', //shafaqW
        'return': 'Retourner', //return
        'location': 'Location', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Apparence', //v-pills-appearance-tab
        'advanced': 'Avancé', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Démarrage automatique ', //autoStartText
        'startAtLaunch': 'Lancer au demarrage', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, Tous droits réservés.', //copyright
        'quote': '... En Effet, la Salât demeure, pour les croyants, une prescription, à des temps déterminés.', //quote
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Lever du soleil',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Maintenant',
        'timeUntil': 'Temps avant',
        'startUpSound': 'Son de démarrage', //startUpSoundText
        'playSound': 'Jouer le son au démarrage', //startUpSoundText2
        'sysTray': "Barre d'état système", //systrayText
        'minToTray': "Réduire dans la barre d'état", //systrayCheckText
        'customSettings': 'Paramètres personnalisés', //customSettText
        'enableCS': 'Activer les paramètres de calcul personnalisés', //enableCalcText
        'fAngle': 'Angle du Fajr', //fajrAngleText
        'mAngle': 'Angle du Maghrib', //maghribAngleText
        'iAngle': "Angle de l'Isha", //ishaAngleText
        'delayAfterM': 'Délai après le Maghrib', //delayText
        'delayMin': 'Delai (minutes)', //delayFormText
        'france': 'France', //France12 15 & 18
        'russia': 'Russie', //Russia
        'gulf': 'Région du Golfe', //Gulf
        'preferences': 'Préférences', //menu label
        'resetSettings': 'Réinitialiser les options', //menu label
        'here': 'ici',
        'adjustements': 'Ajustements', //adjustmentsText
        'enableAdj': 'Activer les ajustements', //adjCheckText
        'fajrAdj': 'Ajustements de Fajr', //fajrAdjText
        'dhuhrAdj': 'Ajustements de Dhurh', //fajrAdjText
        'asrAdj': 'Ajustements de Asr', //fajrAdjText
        'maghribAdj': 'Ajustements de Maghrib', //fajrAdjText
        'ishaAdj': 'Ajustements de Isha', //fajrAdjText
        'showSunnah': 'Montrer les temps de Sunnah', //sunnahTimesText
        'motn': 'Millieu de la nuit',  //MOTNCheckText
        'totn': 'Tiers de la nuit', //TOTNCheckText
        'minStart': 'Commencer minimisé', //minStartCheckText
        'updateAvailable': 'Mise à jour disponible',
        'version': 'Version',
        'available': 'est disponible au téléchargement sur GitHub',
        'download': 'Télécharger',
        'later': 'Plus tard',
        'quran': "Coran",
        'font': "Police d'écriture",
        'fontsize': "Taille de la police d'écriture",
        'translation': 'Traduction',
        'showTrans': 'Montrer la traduction',
        'diffLang': "Différente langue que l'application",
        'transliteration': 'Translitération',
        'showTransliteration': 'Montrer la translitération',
        'previous': 'Sourate précédente',
        'next': 'Sourate suivante',
        'weather': 'Météo',
        'showWeather': 'Afficher la météo',
        'units': 'Unités',
        'celsius': 'Celsius',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenheit',
        'playDua': "Lancer Dua après Adhan",
        'open': "Ouvrir",
        'quit': "Quitter",
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Adhan Fajr personnalisé',
        'recitation': 'Recitation',
        'reciter': 'Qari',
        "customTimes": "Temps personnalisés",
        "enableCustomTimes" : "Activer les temps personnalisés",
        "jumuah" : "Jumuah",
        "jumuahTime": "Temps de Jumuah",
        "enableJumuahTime": "Activer temps de Jumuah",
        "shortAllahuAkbar": "Son court - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Ajustements de la date Hijri",
        "hijriAdjText" : "Différence de date Hijri",
    },
    es: {
        'settings': 'Ajustes', //settingsTitle
        'language': 'Idioma', //langText
        'timeformat': 'Formato de tiempo', //tfText
        '24hour': '24 horas', //24hTimeFormatText
        '12hour': '12 horas', //12hTimeFormatText
        'showSseconds': 'Mostrar segundos ', //showSecondsText
        'dateFormat': 'Formato de fecha', //dfText
        'dateFormat1': 'DD/MM/AAAA', //id="df1Text"
        'dateFormat2': 'MM/DD/AAAA', //id="df2Text"
        'dateFormat3': 'AAAA/MM/DD', //id="df3Text"
        'notifications': 'Notificaciones', //notifText
        'notifCheck': 'Permitir notificaciones', //notifCheckText
        'coordinates': 'Coordenadas', //coordinatesText
        'latitude': 'Latitud', //latText
        'longitude': 'Longitud', //lonText
        'timezone': 'Zona horaria', // tzText
        'adhan': 'Adán', //adhanText and others in main
        'adhanCheck': 'Activar Adán', //adhanCheckText
        'AdhanMecca': 'Adán Meca', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adán al-Aqsa', //adhanAqsaText
        'customAdhan': 'Adán personalizado', //customAdhanText
        'duaAfterAdhan': "Dua después del Adán", //duaAfterText
        'theme': 'Tema', //themeText
        'darkMode': 'Modo oscuro', //darkModeText
        'bgImage': 'Imagen de fondo', //bgImageText
        'bgImageCheck': 'Activar imagen de fondo', //bgImageCheckText
        'calcMethods': 'Métodos de cálculo', //calcMethodsText
        'mwl': 'Liga Mundial Musulmana', //MWL
        'egyptian': 'Egipcio', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapur', //Singapore
        'turkey': 'Turquía', //Turkey
        'tehran': 'Teherán', //Tehran
        'isna': 'ISNA (America)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Regla de alta latitud', //hlrText
        'motn': 'Mitad de la noche', //MOTN
        'sotn': 'Séptimo de la noche', //SOTN
        'ta': 'ángulo crepuscular', //TA
        'pcr': 'Resolución del círculo polar', //pcrText
        'cc': 'Ciudad más cercana', //CC
        'cd': 'Fecha más cercana', //CD
        'und': 'No calcular', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'General', //shafaqG
        'ahmer': 'Crepúsculo rojo (ahmer)', //shafaqR
        'abyad': 'Crepúsculo blanco (abyad)', //shafaqW
        'return': 'Regresar', //return
        'general': 'General', //v-pills-general-tab
        'location': 'Localización', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Apariencia', //v-pills-appearance-tab
        'advanced': 'Avanzado', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Inicio automático', //autoStartText
        'startAtLaunch': 'Iniciar en el lanzamiento', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, Todos los derechos reservados.', //copyright
        'quote': '... Ciertamente el salat es para los creyentes, un precepto en tiempos determinados.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Corán: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Amanecer',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Ahora',
        'timeUntil': 'Tiempo antes el',
        'startUpSound': 'Sonido de inicio', //startUpSoundText
        'playSound': 'Jugar sonido al iniciar', //startUpSoundText2
        'sysTray': 'Bandeja del sistema', //systrayText
        'minToTray': 'Minimizar a la bandeja', //systrayCheckText
        'customSettings': 'Ajustes personalizados', //customSettText
        'enableCS': 'Activar la configuración de cálculo personalizada', //enableCalcText
        'fAngle': 'Ángulo del Fajr', //fajrAngleText
        'mAngle': 'Ángulo del Magreb', //maghribAngleText
        'iAngle': 'Ángulo del Isha', //ishaAngleText
        'delayAfterM': 'Retraso después del Magreb', //delayText
        'delayMin': 'Retraso (minutos) ', //delayFormText
        'france': 'Francia', //France12 15 & 18
        'russia': 'Rusia', //Russia
        'gulf': 'Región del Golfo ', //Gulf
        'preferences': 'Preferencias', //menu label
        'resetSettings': 'Reiniciar ajustes', //menu label
        'adjustements': 'Ajustes', //adjustmentsText
        'enableAdj': 'Activar ajustes', //adjCheckText
        'fajrAdj': 'Ajustes de Fajr', //fajrAdjText
        'dhuhrAdj': 'Ajustes de Dhurh', //fajrAdjText
        'asrAdj': 'Ajustes de Asr', //fajrAdjText
        'maghribAdj': 'Ajustes de Maghrib', //fajrAdjText
        'ishaAdj': 'Ajustes de Isha', //fajrAdjText
        'showSunnah': 'Mostrar los tiempos de Sunnah', //sunnahTimesText
        'motn': 'Mitad de la noche',  //MOTNCheckText
        'totn': 'Tercio de la noche', //TOTNCheckText
        'minStart': 'Iniciar minimizado', //minStartCheckText
        'updateAvailable': 'Actualización disponible',
        'version': 'Versión',
        'available': 'está disponible para descargar en GitHub',
        'download': 'Descargar',
        'later': 'Luego',
        'quran': "Corán",
        'font': 'Tipo de letra',
        'fontsize': 'Tamaño de letra',
        'translation': 'Traducción',
        'showTrans': 'Mostrar traducción',
        'diffLang': 'Diferente idioma de la aplicación',
        'transliteration': 'Transliteración',
        'showTransliteration': 'Mostrar transliteración',
        'previous': 'Sura anterior',
        'next': 'Siguiente sura',
        'weather': 'Clima',
        'showWeather': 'Mostrar el clima',
        'units': 'Unidades',
        'celsius': 'Celsius',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenheit',
        'playDua': "Lanzar Du'a después de Adhan",
        'open': "Abrir",
        'quit': "Cerrar",
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Fajr adhan personalizado',
        'recitation': 'Recitación',
        'reciter': 'Recitador',
        "customTimes": "Horas de rezo personnalizadas",
        "enableCustomTimes" : "Activar horas personnalizadas",
        "jumuah" : "Jumuá",
        "jumuahTime": "Hora de Jumuá",
        "enableJumuahTime": "Activar hora de Jumuá",
        "shortAllahuAkbar": "Sonido corto - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Ajustes de fecha Hijri",
        "hijriAdjText" : "Diferencia de fecha Hijri",
    },
    ar: {
        'settings': 'الإعدادات', //settingsTitle
        'language': 'لغة', //langText
        'timeformat': 'تنسيق الوقت', //tfText
        '24hour': '24', //24hTimeFormatText  
        '12hour': '12', //12hTimeFormatText
        'showSseconds': 'عرض الثواني', //showSecondsText
        'dateFormat': 'صيغة التاريخ', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'إشعارات', //notifText
        'notifCheck': 'تمكين الإخطارات', //notifCheckText
        'coordinates': ' إحداثيات', //coordinatesText
        'latitude': 'خط العرض', //latText
        'longitude': ' خط الطول', //lonText
        'timezone': 'وحدة زمنية', // tzText
        'adhan': 'الأذان', //adhanText and others in main
        'adhanCheck': 'تمكين الأذان', //adhanCheckText
        'AdhanMecca': 'أذان مكة', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'أذان الأقصى', //adhanAqsaText
        'customAdhan': 'مخصص الأذان', //customAdhanText
        'duaAfterAdhan': "دعاء بعد الأذان", //duaAfterText
        'theme': 'سمة', //themeText
        'darkMode': 'الوضع الداكن', //darkModeText
        'bgImage': 'الصورة الخلفية', //bgImageText
        'bgImageCheck': 'تمكين صورة الخلفية', //bgImageCheckText
        'calcMethods': 'طرق الحساب', //calcMethodsText
        'mwl': 'رابطة العالم الإسلامي', //MWL
        'egyptian': 'مصرية', //Egyptian
        'karachi': 'كراتشي', //Karachi
        'uaq': 'أم القرى', //UAQ
        'dubai': 'دبي', //Dubai
        'qatar': 'دولة قطر', //Qatar
        'kuwait': 'الكويت', //Kuwait
        'mc': 'لجنة الهلال', //MC //pas traduire ça
        'singapore': 'سنغافورة', //Singapore
        'turkey': 'ديك رومى', //Turkey
        'tehran': 'طهران', //Tehran
        'isna': 'ISNA (أمريكا)', //ISNA
        'madhab': 'مدهب', //MadhabText
        'shafi': 'شافي', //shafi
        'hanafi': 'حنفي', //Hanafi
        'hlr': 'قاعدة خط العرض العليا', //hlrText
        'motn': 'منتصف الليل', //MOTN
        'sotn': 'السابع من الليل', //SOTN
        'ta': 'زاوية الشفق', //TA
        'pcr': 'قرار الدائرة القطبية', //pcrText
        'cc': 'اقرب مدينة', //CC
        'cd': 'أقرب تاريخ', //CD
        'und': 'لا تحسب', //UND
        'shafaq': 'شفق', //ShafaqText
        'general': 'عام', //shafaqG
        'ahmer': 'أحمر', //shafaqR
        'abyad': 'أبيض', //shafaqW
        'return': 'إرجاع', //return
        'general': 'عام', //v-pills-general-tab
        'location': 'موقع', //v-pills-location-tab
        'audio': 'صوتي', //v-pills-audio-tab
        'appearance': 'مظهر', //v-pills-appearance-tab
        'advanced': 'متقدم', //v-pills-advanced-tab
        'muezzin': 'مؤذن',
        'autoStart': 'بدء تلقائي', //autoStartText
        'startAtLaunch': 'ابدأ عند الإطلاق', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, All rights reserved.', //copyright
        'quote': 'إِنَّ الصَّلاةَ كانَت عَلَى المُؤمِنينَ كِتابًا مَوقوتًا ...', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "القرآن: 4/103", //source
        'fajr': 'الفجر',
        'sunrise': 'شروق',
        'dhuhr': 'الظهر',
        'asr': 'العصر',
        'maghrib': 'المغرب',
        'isha': 'العشاء ',
        'now': 'الآن',
        'timeUntil': 'الوقت حتى',
        'startUpSound': 'بدء الصوت', //startUpSoundText
        'playSound': 'تشغيل الصوت عند بدء التشغيل', //startUpSoundText2
        'sysTray': 'علبة النظام', //systrayText
        'minToTray': 'تقليل الدرج', //systrayCheckText
        'customSettings': 'إعدادات مخصصة', //customSettText
        'enableCS': 'تمكين إعدادات حساب مخصص', //enableCalcText
        'fAngle': 'زاوية الفجر', //fajrAngleText
        'mAngle': 'زاوية المغرب', //maghribAngleText
        'iAngle': 'زاوية الاسما', //ishaAngleText
        'delayAfterM': 'تأخير بعد المغرب', //delayText
        'delayMin': 'تأخير (دقائق) ', //delayFormText
        'france': 'فرنسا', //France12 15 & 18
        'russia': 'روسيا', //Russia
        'gulf': 'منطقة الخليج ', //Gulf
        'preferences': 'تفضيلات', //menu label
        'resetSettings': 'اعادة الضبط', //menu label
        'adjustements': 'التعديلات', //adjustmentsText
        'enableAdj': 'تمكين التعديلات', //adjCheckText
        'fajrAdj': 'تعديلات الفجر', //fajrAdjText
        'dhuhrAdj': 'دوس تعديلات', //fajrAdjText
        'asrAdj': 'تعديلات العصر', //fajrAdjText
        'maghribAdj': 'تعديلات المغربs', //fajrAdjText
        'ishaAdj': 'تعديلات العشاء', //fajrAdjText
        'showSunnah': 'أظهر سناه مرات', //sunnahTimesText
        'motn': 'منتصف الليل',  //MOTNCheckText
        'totn': 'ثالثا من الليل', //TOTNCheckText
        'minStart': 'بداية الحد الادنى ', //minStartCheckText
        'updateAvailable': 'التحديث متاح',
        'version': 'الإصدار',
        'available': 'متاح للتحميل على جيثب',
        'download': 'تحميل',
        'later': 'فيما بعد',
        'quran': "القرآن",
        'font': 'الخط',
        'fontsize': 'حجم الخط',
        'translation': 'ترجمة',
        'showTrans': 'إظهار الترجمة',
        'diffLang': 'لغة مختلفة عن التطبيق',
        'transliteration': 'التحويل الصوتي',
        'showTransliteration': 'إظهار التحويل الصوتي',
        'previous': 'السورة السابقة',
        'next': 'السورة القادمة',
        'weather': 'الطقس',
        'showWeather': 'عرض الطقس',
        'units': 'الوحدات',
        'celsius': 'درجة مئوية',
        'kelvin': 'كيلفن',
        'fahrenheit': 'فهرنهايت',
        'playDua': "لعب الدعاء بعد الأذان",
        'open': "افتح",
        'quit': "اغلاق",
        'ahmedNufeis': 'أحمد النفيس',
        'customFajr': 'مخصص فجر آذان',
        'recitation': 'التلاوة',
        'reciter': 'القارئ',
        "customTimes": "الأوقات المخصصة",
        "enableCustomTimes" : "تفعيل الأوقات المخصصة",
        "jumuah" : "جمعة",
        "jumuahTime": "وقت الجمعة",
        "enableJumuahTime": "تفعيل وقت الجمعة",
        "shortAllahuAkbar": "صوت قصير",
        "hijriAdjTitle" : "تعديلات التاريخ الهجري",
        "hijriAdjText" : "فرق التاريخ الهجري",
    },
    it: {
        'settings': 'Impostazioni', //settingsTitle
        'language': 'Lingua', //langText
        'timeformat': 'Formato orario', //tfText
        '24hour': '24 Ore', //24hTimeFormatText
        '12hour': '12 Ore', //12hTimeFormatText
        'showSseconds': 'Mostra secondi', //showSecondsText
        'dateFormat': 'Date format', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'Notifiche', //notifText
        'notifCheck': 'Attivare le notifiche', //notifCheckText
        'coordinates': 'Coordinates', //coordinatesText
        'latitude': 'Latitudine', //latText
        'longitude': 'Longitudine', //lonText
        'timezone': 'Fuso orario', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': 'Abilita Adhan', //adhanCheckText
        'AdhanMecca': 'Adhan Mecca', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Adhan personalizzato', //customAdhanText
        'duaAfterAdhan': "Du'un dopo Adhan", //duaAfterText
        'theme': 'Tema', //themeText
        'darkMode': 'Modalità scura', //darkModeText
        'bgImage': 'Immagine di sfondo', //bgImageText
        'bgImageCheck': 'Abilita immagine di sfondo', //bgImageCheckText
        'calcMethods': 'Metodi di calcolo', //calcMethodsText
        'mwl': 'Lega mondiale musulmana', //MWL
        'egyptian': 'Egiziano', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapore', //Singapore
        'turkey': 'Turchia', //Turkey
        'tehran': 'Tehran', //Tehran
        'isna': 'ISNA (America)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Regola di alta latitudine', //hlrText
        'motn': 'Nel mezzo della notte', //MOTN
        'sotn': 'Settimo della notte', //SOTN
        'ta': 'Angolo crepuscolare', //TA
        'pcr': 'Risoluzione del cerchio polare', //pcrText
        'cc': 'La città più vicina', //CC
        'cd': 'Data più vicina', //CD
        'und': 'Non calcolare', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'Generale', //shafaqG
        'ahmer': 'Crepuscolo Rosso(ahmer)', //shafaqR
        'abyad': 'Crepuscolo bianco (abyad)', //shafaqW
        'return': 'Ritorno', //return
        'general': 'Generale', //v-pills-general-tab
        'location': 'Posizione', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Aspetto esteriore', //v-pills-appearance-tab
        'advanced': 'Avanzate', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Avvio automatico', //autoStartText
        'startAtLaunch': 'Inizia al lancio', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, Tutti i diritti riservati.', //copyright
        'quote': '... Infatti, la preghiera è stata decretata sui credenti con un decreto di tempi determinati.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Alba',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Adesso',
        'timeUntil': 'Tempo fino',
        'startUpSound': 'Avvia suono', //startUpSoundText
        'playSound': "Riproduci suono all'avvio", //startUpSoundText2
        'sysTray': 'Area di notifica', //systrayText
        'minToTray': 'Riduci a icona nel vassoio', //systrayCheckText
        'customSettings': 'Impostazioni personalizzate', //customSettText
        'enableCS': 'Abilita impostazioni di calcolo personalizzate', //enableCalcText
        'fAngle': 'Angolo Fajr', //fajrAngleText
        'mAngle': 'Angolo Maghrib', //maghribAngleText
        'iAngle': 'Angolo Isha', //ishaAngleText
        'delayAfterM': 'Ritardo dopor Maghrib', //delayText
        'delayMin': 'Ritardo (minuti)', //delayFormText
        'france': 'Francia', //France12 15 & 18
        'russia': 'Russia', //Russia
        'gulf': 'Gulf region', //Gulf
        'preferences': 'Preferenze', //menu label
        'resetSettings': 'Ripristina le impostazioni', //menu label
        'adjustements': 'Adeguamenti', //adjustmentsText
        'enableAdj': 'Abilita le regolazioni', //adjCheckText
        'fajrAdj': 'Regolazioni della Fajr', //fajrAdjText
        'dhuhrAdj': 'Regolazioni della Dhurh', //fajrAdjText
        'asrAdj': 'Regolazioni della Asr', //fajrAdjText
        'maghribAdj': 'Regolazioni della Maghrib', //fajrAdjText
        'ishaAdj': 'Regolazioni della Isha', //fajrAdjText
        'showSunnah': 'Mostra i tempi di Sunnah', //sunnahTimesText
        'motn': 'Nel mezzo della notte',  //MOTNCheckText
        'totn': 'Terzo della notte', //TOTNCheckText
        'minStart': 'Inizia minimizzato ', //minStartCheckText
        'updateAvailable': 'Aggiornamento disponibile',
        'version': 'Versione',
        'available': 'è disponibile per il download su GitHub',
        'download': 'Scaricare',
        'later': 'Più tardi',
        'quran': "Corano",
        'font': 'Carattere',
        'fontsize': 'Dimensione del carattere',
        'translation': 'Traduzione',
        'showTrans': 'Mostra traduzione',
        'diffLang': "Linguaggio diverso dall'applicazione",
        'transliteration': 'Traslitterazione',
        'showTransliteration': 'Mostra traslitterazione',
        'previous': 'Sura precedente',
        'next': 'Prossima Sura',
        'weather': 'Meteo',
        'showWeather': 'Mostra il meteo',
        'units': 'Unità',
        'celsius': 'Centigrado',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenheit',
        'playDua': "Dua after the Adhan",
        'open': "Aprire",
        'quit': "Chiudere",
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Fajr Adhan personalizzato',
        'recitation': 'Recitazione',
        'reciter': 'Qari',
        "customTimes": "Orari personalizzati",
        "enableCustomTimes" : "Abilita orari personalizzati",
        "jumuah" : "Jumuah",
        "jumuahTime": "Tempo di Jumuah",
        "enableJumuahTime": "Abilita il tempo di Jumuah",
        "shortAllahuAkbar": "Suono breve - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Aggiustamenti della data di Hijri",
        "hijriAdjText" : "Differenza di data Hijri",
        },
    de: {
        'settings': 'Einstellungen', //settingsTitle
        'language': 'Sprache', //langText
        'timeformat': 'Zeitformat', //tfText
        '24hour': '24 Stunden', //24hTimeFormatText
        '12hour': '12 Stunden', //12hTimeFormatText
        'showSseconds': 'Sekunden anzeigen', //showSecondsText
        'dateFormat': 'Datumsformat', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'Benachrichtigungen', //notifText
        'notifCheck': 'Benachrichtigungen aktivieren', //notifCheckText
        'coordinates': 'Koordinaten', //coordinatesText
        'latitude': 'Breitengrad', //latText
        'longitude': 'Längengrad', //lonText
        'timezone': 'Zeitzone', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': 'Adhan aktivieren', //adhanCheckText
        'AdhanMecca': 'Adhan Mekka', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Benutzerdefinierte Adhan', //customAdhanText
        'duaAfterAdhan': "Du'a nach Adhan", //duaAfterText
        'theme': 'Thema', //themeText
        'darkMode': 'Dunkelmodus', //darkModeText
        'bgImage': 'Hintergrundbild', //bgImageText
        'bgImageCheck': 'Hintergrundbild aktivieren', //bgImageCheckText
        'calcMethods': 'Berechnungsmethoden', //calcMethodsText
        'mwl': 'Islamische Weltliga', //MWL
        'egyptian': 'Ägyptisch', //Egyptian
        'karachi': 'Karatschi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Katar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapur', //Singapore
        'turkey': 'Türkei', //Turkey
        'tehran': 'Teheran', //Tehran
        'isna': 'ISNA (NA)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Regel für hohe Breitengrade', //hlrText
        'motn': 'Mitten in der Nacht', //MOTN
        'sotn': 'Siebter der Nacht', //SOTN
        'ta': 'Dämmerungswinkel', //TA
        'pcr': 'Polarkreisauflösung', //pcrText
        'cc': 'Nächste Stadt', //CC
        'cd': 'Nächstes Datum', //CD
        'und': 'Nicht rechnen', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'Allgemein', //shafaqG
        'ahmer': 'Rote Dämmerung (ahmer)', //shafaqR
        'abyad': 'Weiße Dämmerung (abyad)', //shafaqW
        'return': 'Zurück', //return
        'general': 'Allgemein', //v-pills-general-tab
        'location': 'Standort', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Aussehen', //v-pills-appearance-tab
        'advanced': 'Erweiterte', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Auto-Start', //autoStartText
        'startAtLaunch': 'Beim Start beginnen', //autoStartCheckText
        'quote': '... Wahrlich das Gebet zu bestimmten Zeiten ist für die Gläubigen eine Pflicht.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Sonnenaufgang',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Jetzt',
        'startUpSound': 'Startgeräusch', //startUpSoundText
        'playSound': 'Geräusch beim Start abspielen', //startUpSoundText2
        'sysTray': 'System Tray', //systrayText
        'minToTray': 'In Statusleiste minimieren', //systrayCheckText
        'customSettings': 'Benutzerdefinierte Einstellungen', //customSettText
        'enableCS': 'Benutzerdefinierte Berechnungseinstellungen aktivieren', //enableCalcText
        'fAngle': 'Fajr Winkel', //fajrAngleText
        'mAngle': 'Maghrib Winkel', //maghribAngleText
        'iAngle': 'Isha Winkel', //ishaAngleText
        'delayAfterM': 'Verzögerung nach Maghrib', //delayText
        'delayMin': 'Verzögerung (Minuten)', //delayFormText
        'timeUntil': 'Zeit bis',
        'france': 'Frankreich', //France12 15 & 18
        'russia': 'Russland', //Russia
        'gulf': 'Persischer Golf', //Gulf
        'preferences': 'Vorlieben', //menu label
        'resetSettings': 'Einstellungen zurücksetzen', //menu label
        'adjustements': 'Anpassungen', //adjustmentsText
        'enableAdj': 'Anpassungen aktivieren', //adjCheckText
        'fajrAdj': 'Fajr-Anpassungen', //fajrAdjText
        'dhuhrAdj': 'Dhurh-Anpassungen', //fajrAdjText
        'asrAdj': 'Asr-Anpassungen', //fajrAdjText
        'maghribAdj': 'Maghrib-Anpassungen', //fajrAdjText
        'ishaAdj': 'Isha-Anpassungen', //fajrAdjText
        'showSunnah': 'Sunnah Zeit', //sunnahTimesText
        'motn': 'Mitten in der Nacht',  //MOTNCheckText
        'totn': 'Drittel der Nacht', //TOTNCheckText
        'minStart': 'Minimiert starten', //minStartCheckText
        'updateAvailable': 'Update verfügbar',
        'version': 'Ausführung',
        'available': 'ist zum Download auf Github verfügbar',
        'download': 'Herunterladen',
        'later': 'Später',
        'quran': "Koran",
        'font': 'Schriftart',
        'fontsize': 'Schriftgröße',
        'translation': 'Übersetzung',
        'showTrans': 'Übersetzung anzeigen',
        'diffLang': 'Andere Sprache als Anwendung',
        'transliteration': 'Transliteration',
        'showTransliteration': 'Transliteration anzeigen ',
        'previous': 'Vorherige Sure',
        'next': 'Nächste Sure',
        'weather': 'Wetter',
        'showWeather': 'Wetter anzeigen',
        'units': 'Einheiten',
        'celsius': 'Celsius',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenheit',
        'playDua': "Dua nach dem Adhan",
        'open': "Öffnen",
        'quit': "Schließen",
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Benutzerdefinierte Fajr Azan',
        'recitation': 'Rezitation',
        'reciter': 'Rezitator',
        "customTimes": "Benutzerdefinierte Zeiten",
        "enableCustomTimes" : "Benutzerdefinierte Zeiten aktivieren",
        "jumuah" : "Jumuah",
        "jumuahTime": "Zeit von Jumuah",
        "enableJumuahTime": "Aktivieren Sie die Zeit von Jumuah",
        "shortAllahuAkbar": "Kurzer Klang - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Hijri-Datumsanpassungen",
        "hijriAdjText" : "Hijri-Datumsunterschied",
    },
    nl: {
        'settings': 'Instellingen', //settingsTitle
        'language': 'Taal', //langText
        'timeformat': 'Tijdformaat', //tfText
        '24hour': '24-uur', //24hTimeFormatText
        '12hour': '12-uur', //12hTimeFormatText
        'showSseconds': 'Seconden tonen', //showSecondsText
        'dateFormat': 'Datumformaat', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'Notificaties', //notifText
        'notifCheck': 'Notificaties aanzetten', //notifCheckText
        'coordinates': 'Coördinaten', //coordinatesText
        'latitude': 'Breedtegraad', //latText
        'longitude': 'Lengtegraad', //lonText
        'timezone': 'Tijdzone', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': 'Adhan aanzetten', //adhanCheckText
        'AdhanMecca': 'Adhan Mekka', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Aangepaste Adhan', //customAdhanText
        'duaAfterAdhan': "Du'a na Adhani", //duaAfterText
        'theme': 'Thema', //themeText
        'darkMode': 'Donkere modus', //darkModeText
        'bgImage': 'Achtergrondafbeelding', //bgImageText
        'bgImageCheck': 'Achtergrondafbeelding aanzetten', //bgImageCheckText
        'calcMethods': 'Berekeningsmethoden', //calcMethodsText
        'mwl': 'Moslim Wereld Liga', //MWL
        'egyptian': 'Egyptisch', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Koeweit', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapore', //Singapore
        'turkey': 'Turkije', //Turkey
        'tehran': 'Teheran', //Tehran
        'isna': 'ISNA (NA)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Regel voor hoge breedtegraad', //hlrText
        'motn': 'Middernacht', //MOTN
        'sotn': 'Zevende van de nacht', //SOTN
        'ta': 'Schemeringshoek', //TA
        'pcr': 'Resolutie poolcirkel', //pcrText
        'cc': 'Dichtstbijzijnde stad', //CC
        'cd': 'Dichtstbijzijnde datum', //CD
        'und': 'Niet berekenen', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'Algemeen', //shafaqG
        'ahmer': 'Rode schemering (ahmer)', //shafaqR
        'abyad': 'Witte schemering (abyad)', //shafaqW
        'return': 'Terug', //return
        'general': 'Algemeen', //v-pills-general-tab
        'location': 'Plaats', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Verschijning', //v-pills-appearance-tab
        'advanced': 'Geavanceerde', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Auto Start', //autoStartText
        'startAtLaunch': 'Begin bij lancering', //autoStartCheckText
        'quote': '... Voorwaar, het gebed is de gelovigen op vaste tijden voorgeschreven.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Zonsopkomst',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Nou',
        'startUpSound': 'Opstartgeluid', //startUpSoundText
        'playSound': 'Geluid afspelen bij opstarten', //startUpSoundText2
        'sysTray': 'Systeemvak', //systrayText
        'minToTray': 'Verkleinen naar systeemvak', //systrayCheckText
        'customSettings': 'Aangepaste instellingen', //customSettText
        'enableCS': 'Aangepaste berekeningsinstellingen aanzetten', //enableCalcText
        'fAngle': 'Fajr Hoek', //fajrAngleText
        'mAngle': 'Maghrib Hoek', //maghribAngleText
        'iAngle': 'Isha Hoek', //ishaAngleText
        'delayAfterM': 'Vertraging na Maghrib', //delayText
        'delayMin': 'Vertraging (minuten)', //delayFormText
        'timeUntil': 'Tijd tot',
        'france': 'Frankrijk', //France12 15 & 18
        'russia': 'Rusland', //Russia
        'gulf': 'Perzische Golf', //Gulf
        'preferences': 'Voorkeuren', //menu label
        'resetSettings': 'Reset instellingen', //menu label
        'adjustements': 'Aanpassingen', //adjustmentsText
        'enableAdj': 'Schakel aanpassingen in', //adjCheckText
        'fajrAdj': 'Fajr-aanpassingen', //fajrAdjText
        'dhuhrAdj': 'Dhurh-aanpassingen', //fajrAdjText
        'asrAdj': 'Asr-aanpassingen', //fajrAdjText
        'maghribAdj': 'Maghrib-aanpassingen', //fajrAdjText
        'ishaAdj': 'Isha-aanpassingen', //fajrAdjText
        'showSunnah': 'Toon Sunnah-tijd', //sunnahTimesText
        'motn': 'Middernacht',  //MOTNCheckText
        'totn': 'Derde van de nacht', //TOTNCheckText
        'minStart': 'Start geminimaliseerd', //minStartCheckText
        'updateAvailable': 'Update beschikbaar',
        'version': 'Versie',
        'available': 'is beschikbaar om te downloaden op GitHub',
        'download': 'Gedownload',
        'later': 'Later',
        'quran': "Koran",
        'font': 'Lettertype',
        'fontsize': 'Lettertypegrootte',
        'translation': 'Vertaling',
        'showTrans': 'Vertaling weergeven',
        'diffLang': 'Andere taal dan applicatie',
        'transliteration': 'Transliteratie',
        'showTransliteration': 'Transliteratie weergeven',
        'previous': 'Vorige soera',
        'next': 'Volgende soera',
        'weather': 'Weer',
        'showWeather': 'Toon weer',
        'units': 'Eenheden',
        'celsius': 'Celsius',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenheit',
        'playDua': "Dua na de Adhan",
        'open': "Openen",
        'quit': "Sluiten",
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Aangepaste fajr azan',
        'recitation': 'Recitatie',
        'reciter': 'Qari',
        "customTimes": "Aangepaste tijden",
        "enableCustomTimes" : "Aangepaste tijden inschakelen",
        "jumuah" : "Jumuah",
        "jumuahTime": "Tijd van Jumuah",
        "enableJumuahTime": "Tijd van Jumuah inschakelen",
        "shortAllahuAkbar": "Korte klank - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Hijri datum aanpassingen",
        "hijriAdjText" : "Hijri datum verschil",
    },
    sv: {
        'settings': 'Inställningar', //settingsTitle
        'language': 'Språk', //langText
        'timeformat': 'Tidsformat', //tfText
        '24hour': '24-timmars', //24hTimeFormatText
        '12hour': '12-timmars', //12hTimeFormatText
        'showSseconds': 'Visa sekunder', //showSecondsText
        'dateFormat': 'Datumformat', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'Notiser', //notifText
        'notifCheck': 'Aktivera notiser', //notifCheckText
        'coordinates': 'Koordinater', //coordinatesText
        'latitude': 'Latitud', //latText
        'longitude': 'Longitud', //lonText
        'timezone': 'Tidszon', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': 'Aktivera Adhan', //adhanCheckText
        'AdhanMecca': 'Adhan Mecka', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Anpassad Adhan', //customAdhanText
        'duaAfterAdhan': "Du'a efter Adhan", //duaAfterText
        'theme': 'Tema', //themeText
        'darkMode': 'Mörkt läge', //darkModeText
        'bgImage': 'Bakgrundsbild', //bgImageText
        'bgImageCheck': 'Aktivera bakgrundsbild', //bgImageCheckText
        'calcMethods': 'Beräkningsmetoder', //calcMethodsText
        'mwl': 'Muslimska världsligan', //MWL
        'egyptian': 'Egyptisk', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapore', //Singapore
        'turkey': 'Turkiet', //Turkey
        'tehran': 'Teheran', //Tehran
        'isna': 'ISNA (NA)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Hög latitud regel', //hlrText
        'motn': 'Mitt i natten', //MOTN
        'sotn': 'Nattens sjunde', //SOTN
        'ta': 'Skymningsvinkel', //TA
        'pcr': 'Polarcirkelupplösning', //pcrText
        'cc': 'Närmaste stad', //CC
        'cd': 'Närmaste datum', //CD
        'und': 'Räkna inte', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'Allmän', //shafaqG
        'ahmer': 'Röd skymning (ahmer)', //shafaqR
        'abyad': 'Vit skymning (abyad)', //shafaqW
        'return': 'Retur', //return
        'general': 'Allmän', //v-pills-general-tab
        'location': 'Plats', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Utseende', //v-pills-appearance-tab
        'advanced': 'Avancerade ', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Auto Start', //autoStartText
        'startAtLaunch': 'Börja vid lanseringen', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, Alla rättigheter förbehållna.', //copyright
        'quote': '... Bönen är alla troendes plikt, knuten till bestämda tider.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Soluppgång',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Nu',
        'startUpSound': 'Startljud', //startUpSoundText
        'playSound': 'Spela upp ljud vid start', //startUpSoundText2
        'sysTray': 'Systemfältet', //systrayText
        'minToTray': 'Minimera till statusfältet', //systrayCheckText
        'customSettings': 'Anpassade inställningar', //customSettText
        'enableCS': 'Aktivera anpassade beräkningsinställningar', //enableCalcText
        'fAngle': 'Fajr Vinkel', //fajrAngleText
        'mAngle': 'Maghrib Vinkel', //maghribAngleText
        'iAngle': 'Isha Vinkel', //ishaAngleText
        'delayAfterM': 'Försening efter Maghrib', //delayText
        'delayMin': 'Fördröjning (minuter)', //delayFormText
        'timeUntil': 'Tid tills',
        'france': 'Frankrike', //France12 15 & 18
        'russia': 'Ryssland', //Russia
        'gulf': 'Persiska viken', //Gulf
        'preferences': 'Preferenser', //menu label
        'resetSettings': 'Återställ inställningar', //menu label
        'adjustements': 'Justeringar', //adjustmentsText
        'enableAdj': 'Aktivera justeringar', //adjCheckText
        'fajrAdj': 'Fajr-justeringar', //fajrAdjText
        'dhuhrAdj': 'Dhurh-justeringar', //fajrAdjText
        'asrAdj': 'Asr-justeringar', //fajrAdjText
        'maghribAdj': 'Maghrib-justeringar', //fajrAdjText
        'ishaAdj': 'Isha-justeringar', //fajrAdjText
        'showSunnah': 'Visa sunnah tid', //sunnahTimesText
        'motn': 'Mitten av natten',  //MOTNCheckText
        'totn': 'Tredje av natten', //TOTNCheckText
        'minStart': 'Börja minimeras', //minStartCheckText
        'updateAvailable': 'Uppdatering tillgänglig',
        'version': 'Version',
        'available': 'är tillgänglig för nedladdning på GitHub',
        'download': 'Ladda ner',
        'later': 'Senare ',
        'quran': "Koranen",
        'font': 'Font',
        'fontsize': 'Textstorlek',
        'translation': 'Översättning',
        'showTrans': 'Visa översättning',
        'diffLang': 'Annat språk än applikationen',
        'transliteration': 'Translitterering',
        'showTransliteration': 'Visa translitterering ',
        'previous': 'Föregående Surah',
        'next': 'Nästa Surah',
        'weather': 'Väder',
        'showWeather': 'Visa väder',
        'units': 'Enheter',
        'celsius': 'celsius',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenheit',
        'playDua': "Dua Efter Adhan",
        'open': "Öppen",
        'quit': "Stänga",
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Anpassad Fajr Azan',
        'recitation': 'Uppläsning',
        'reciter': 'Recitatör',
        "customTimes": "Anpassade tider",
        "enableCustomTimes" : "Aktivera anpassade tider",
        "jumuah" : "Jumuah",
        "jumuahTime": "Jumuahs tid",
        "enableJumuahTime": "Aktivera tid för Jumuah",
        "shortAllahuAkbar": "Kortljud - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Hijri datumjusteringar",
        "hijriAdjText" : "Hijri datum skillnad",
    },
    no: {
        'settings': 'Innstillinger', //settingsTitle
        'language': 'Språk', //langText
        'timeformat': 'Tidsformat', //tfText
        '24hour': '24-timersklokke', //24hTimeFormatText
        '12hour': '12-timersklokke', //12hTimeFormatText
        'showSseconds': 'Vis sekunder', //showSecondsText
        'dateFormat': 'Datoformat', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'Varslinger', //notifText
        'notifCheck': 'Aktiver varslinger', //notifCheckText
        'coordinates': 'Koordinater', //coordinatesText
        'latitude': 'Breddegrad', //latText
        'longitude': 'Lengdegrad', //lonText
        'timezone': 'Tidssone', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': 'Aktiver Adhan', //adhanCheckText
        'AdhanMecca': 'Adhan Mekka', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Egendefinert Adhan', //customAdhanText
        'duaAfterAdhan': "Du'a etter Adhan", //duaAfterText
        'theme': 'Tema', //themeText
        'darkMode': 'Mørk modus', //darkModeText
        'bgImage': 'Bakgrunnsbilde', //bgImageText
        'bgImageCheck': 'Aktiver bakgrunnsbilde', //bgImageCheckText
        'calcMethods': 'Beregningsmetoder', //calcMethodsText
        'mwl': 'Den muslimske verdensligaen', //MWL
        'egyptian': 'Egyptisk', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapore', //Singapore
        'turkey': 'Tyrkia', //Turkey
        'tehran': 'Teheran', //Tehran
        'isna': 'ISNA (NA)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Høy breddegradsregel', //hlrText
        'motn': 'Midt på natten', //MOTN
        'sotn': 'Nattens syvende', //SOTN
        'ta': 'Tussmørke vinkel', //TA
        'pcr': 'Polarsirkeloppløsning', //pcrText
        'cc': 'Nærmeste by', //CC
        'cd': 'Nærmeste dato', //CD
        'und': 'Ikke beregn', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'Generell', //shafaqG
        'ahmer': 'Rød tussmørke (ahmer)', //shafaqR
        'abyad': 'Hvit tussmørke (abyad)', //shafaqW
        'return': 'Retur', //return
        'general': 'Generell', //v-pills-general-tab
        'location': 'Plassering', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Utseende', //v-pills-appearance-tab
        'advanced': 'Avanserte', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Auto Start', //autoStartText
        'startAtLaunch': 'Start ved lansering', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, Alle rettigheter forbeholdt.', //copyright
        'quote': '... Sannelig, tidebønnen er pålagt de troende ifølge fastsatte tider.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Soloppgang',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Nå',
        'startUpSound': 'Oppstartslyd', //startUpSoundText
        'playSound': 'Spill av lyd ved oppstart', //startUpSoundText2
        'sysTray': 'Oppgavelinje', //systrayText
        'minToTray': 'Minimer til statuslinjen', //systrayCheckText
        'customSettings': 'Egendefinerte innstillinger', //customSettText
        'enableCS': 'Aktiver tilpassede beregningsinnstillinger', //enableCalcText
        'fAngle': 'Fajr Vinkel', //fajrAngleText
        'mAngle': 'Maghrib Vinkel', //maghribAngleText
        'iAngle': 'Isha Vinkel', //ishaAngleText
        'delayAfterM': 'Forsinkelse etter Maghrib', //delayText
        'delayMin': 'Forsinkelse (minutter)', //delayFormText
        'timeUntil': 'Tid til',
        'france': 'Frankrike', //France12 15 & 18
        'russia': 'Russland', //Russia
        'gulf': 'Persiabukten', //Gulf
        'preferences': 'Preferanser', //menu label
        'resetSettings': 'Tilbakestill innstillinger', //menu label
        'adjustements': 'Justeringer', //adjustmentsText
        'enableAdj': 'Aktiver justeringer', //adjCheckText
        'fajrAdj': 'Fajr justeringer', //fajrAdjText
        'dhuhrAdj': 'Dhurh justeringer', //fajrAdjText
        'asrAdj': 'Asr justeringer', //fajrAdjText
        'maghribAdj': 'Maghrib justeringer', //fajrAdjText
        'ishaAdj': 'Isha justeringer', //fajrAdjText
        'showSunnah': 'Vise Sunnah tid', //sunnahTimesText
        'motn': 'Midten av natten',  //MOTNCheckText
        'totn': 'Tredje av natten', //TOTNCheckText
        'minStart': 'Start minimert', //minStartCheckText
        'updateAvailable': 'Oppdatering tilgjengelig',
        'version': 'Versjon',
        'available': 'er tilgjengelig for nedlasting på GitHub',
        'download': 'Nedlasting',
        'later': 'Seinere',
        'quran': "Koranen",
        'font': 'Font',
        'fontsize': 'Skriftstørrelse',
        'translation': 'Oversettelse',
        'showTrans': 'Vis oversettelse',
        'diffLang': 'Ulikt språk fra applikasjonen',
        'transliteration': 'Translitterasjon',
        'showTransliteration': 'Vis translitterasjon ',
        'previous': 'Forrige Surah',
        'next': 'Neste Surah',
        'weather': 'Vær',
        'showWeather': 'Vis vær',
        'units': 'Enheter',
        'celsius': 'Celsius',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenheit',
        'playDua': "Dua etter Adhan",
        'open': "Åpen",
        'quit': "Lukk",
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Tilpasset Fajr Azan',
        'recitation': 'Recitering',
        'reciter': 'Qari',
        "customTimes": "Egendefinerte tider",
        "enableCustomTimes" : "Aktiver egendefinerte tider",
        "jumuah" : "Jumuah",
        "jumuahTime": "Jumuahs tid",
        "enableJumuahTime": "Aktiver tid for Jumuah",
        "shortAllahuAkbar": "Kort lyd - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Hijri-datojusteringer",
        "hijriAdjText" : "Hijri datoforskjell",
    },
    da: {
        'settings': 'Indstillinger', //settingsTitle
        'language': 'Sprog', //langText
        'timeformat': 'Tidsformat', //tfText
        '24hour': '24-timersur', //24hTimeFormatText
        '12hour': '12-timersur', //12hTimeFormatText
        'showSseconds': 'Vis sekunder', //showSecondsText
        'dateFormat': 'Datoformat', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'Notifikationer', //notifText
        'notifCheck': 'Aktiver notifikationer', //notifCheckText
        'coordinates': 'Koordinater', //coordinatesText
        'latitude': 'Breddekreds', //latText
        'longitude': 'Længdekreds', //lonText
        'timezone': 'Tidszone', // tzText
        'adhan': 'Adhan', //adhanText and others in main
        'adhanCheck': 'Aktiver Adhan', //adhanCheckText
        'AdhanMecca': 'Adhan Mekka', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Brugerdefineret Adhan', //customAdhanText
        'duaAfterAdhan': "Du'a efter Adhan", //duaAfterText
        'theme': 'Tema', //themeText
        'darkMode': 'Mørk tilstand', //darkModeText
        'bgImage': 'Baggrundsbillede', //bgImageText
        'bgImageCheck': 'Aktiver baggrundsbillede', //bgImageCheckText
        'calcMethods': 'Beregningsmetoder', //calcMethodsText
        'mwl': 'Den muslimske verdensliga', //MWL
        'egyptian': 'Egyptisk', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Umm al-Qura', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapore', //Singapore
        'turkey': 'Tyrkiet', //Turkey
        'tehran': 'Teheran', //Tehran
        'isna': 'ISNA (NA)', //ISNA
        'madhab': 'Madhab', //MadhabText
        'shafi': 'Shafi', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Høj bredde-regel', //hlrText
        'motn': 'Midt om natten', //MOTN
        'sotn': 'Nattens syvende', //SOTN
        'ta': 'Tusmørke vinkel', //TA
        'pcr': 'Polarcirkelopløsning', //pcrText
        'cc': 'Nærmeste by', //CC
        'cd': 'Nærmeste dato', //CD
        'und': 'Må ikke beregne', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'Generel', //shafaqG
        'ahmer': 'Rødt tusmørke (ahmer)', //shafaqR
        'abyad': 'Hvid tusmørke (abyad)', //shafaqW
        'return': 'Retur', //return
        'general': 'Generel', //v-pills-general-tab
        'location': 'Beliggenhed', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Udseende', //v-pills-appearance-tab
        'advanced': 'Avancerede', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Auto Start', //autoStartText
        'startAtLaunch': 'Start ved lanceringen', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, Alle rettigheder forbeholdes.', //copyright
        'quote': '... Sandelig, bønnen er foreskrevet de troende på fastsatte tider.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Solopgang',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha',
        'now': 'Nu',
        'startUpSound': 'Opstartslyd', //startUpSoundText
        'playSound': 'Afspil lyd ved opstart', //startUpSoundText2
        'sysTray': 'System bakke', //systrayText
        'minToTray': 'Minimer til bakke', //systrayCheckText
        'customSettings': 'Brugerdefinerede indstillinger', //customSettText
        'enableCS': 'Aktiver brugerdefinerede beregningsindstillinger', //enableCalcText
        'fAngle': 'Fajr Vinkel', //fajrAngleText
        'mAngle': 'Maghrib Vinkel', //maghribAngleText
        'iAngle': 'Isha Vinkel', //ishaAngleText
        'delayAfterM': 'Forsinkelse efter Maghrib', //delayText
        'delayMin': 'Forsinkelse (minutter)', //delayFormText
        'timeUntil': 'Tid indtil',
        'france': 'Frankrig', //France12 15 & 18
        'russia': 'Rusland', //Russia
        'gulf': 'Den Persiske Bugt', //Gulf
        'preferences': 'Præferencer', //menu label
        'resetSettings': 'Nulstil indstillingerne', //menu label
        'adjustements': 'Justeringer', //adjustmentsText
        'enableAdj': 'Aktivér justeringer', //adjCheckText
        'fajrAdj': 'Fajr-justeringer', //fajrAdjText
        'dhuhrAdj': 'Dhurh-justeringer', //fajrAdjText
        'asrAdj': 'Asr-justeringer', //fajrAdjText
        'maghribAdj': 'Maghrib-justeringer', //fajrAdjText
        'ishaAdj': 'Isha-justeringer', //fajrAdjText
        'showSunnah': 'Vis Sunnah-tid', //sunnahTimesText
        'motn': 'Midten af natten',  //MOTNCheckText
        'totn': 'Tredje af natten', //TOTNCheckText
        'minStart': 'Start minimeret', //minStartCheckText
        'updateAvailable': 'Opdatering tilgængelig',
        'version': 'Version',
        'available': 'er tilgængelig til download på Github',
        'download': 'Hent',
        'later': 'Senere',
        'quran': "Koranen",
        'font': 'Skrifttype',
        'fontsize': 'Skriftstørrelse',
        'translation': 'Oversættelse',
        'showTrans': 'Vis oversættelse',
        'diffLang': 'Forskelligt sprog end applikationen',
        'transliteration': 'Translitteration',
        'showTransliteration': 'Vis translitteration ',
        'previous': 'Forrige Surah',
        'next': 'Næste Surah',
        'weather': 'Vejr',
        'showWeather': 'Vis vejr',
        'units': 'Enheder',
        'celsius': 'Celsius',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenheit',
        'playDua': "Dua Efter Adhan",
        'open': "Åben",
        'quit': "Lukke",
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Brugerdefineret Fajr Azan',
        'recitation': 'Recitation',
        'reciter': 'Qari',
        "customTimes": "Brugerdefinerede tider",
        "enableCustomTimes" : "Aktiver tilpassede tider",
        "jumuah" : "Jumuah",
        "jumuahTime": "Jumuahs tid",
        "enableJumuahTime": "Aktiver tid for Jumuah",
        "shortAllahuAkbar": "Kort lyd - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Hijri-datojusteringer",
        "hijriAdjText" : "Hijri dato forskel",
    },
    ur: {
        'settings': 'ترتیبات', //settingsTitle
        'language': 'زبان', //langText
        'timeformat': 'وقت کی ترتیب', //tfText
        '24hour': '24 گھنٹے', //24hTimeFormatText
        '12hour': '12 گھنٹے', //12hTimeFormatText
        'showSseconds': 'سیکنڈ دکھائیں', //showSecondsText
        'dateFormat': 'تاریخ کی ترتیب', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'اطلاعات', //notifText
        'notifCheck': 'اطلاعات کو فعال کریں', //notifCheckText
        'coordinates': 'جگہ کے کوآرڈینیٹس', //coordinatesText
        'latitude': 'عرض', //latText
        'longitude': 'طول', //lonText
        'timezone': 'ٹائم زون', // tzText
        'adhan': 'اذان', //adhanText and others in main
        'adhanCheck': 'اذان کو فعال کریں', //adhanCheckText
        'AdhanMecca': 'اذانِ مکہ', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'اذانِ اقصیٰ', //adhanAqsaText
        'customAdhan': 'اپنی مرضی کی اذان', //customAdhanText
        'duaAfterAdhan': "دعا بعدِ اذان", //duaAfterText
        'theme': 'تھیم', //themeText
        'darkMode': 'ڈارک موڈ', //darkModeText
        'bgImage': 'پس منظر کی تصویر', //bgImageText
        'bgImageCheck': 'پس منظر کی تصویر کو فعال کریں', //bgImageCheckText
        'calcMethods': 'حسابِ جنتری کے طریقے', //calcMethodsText
        'mwl': 'مسلم ورلڈ لیگ', //MWL
        'egyptian': 'مصری', //Egyptian
        'karachi': 'کراچی', //Karachi
        'uaq': 'ام القراء', //UAQ
        'dubai': 'دبئی', //Dubai
        'qatar': 'قطر', //Qatar
        'kuwait': 'کویت', //Kuwait
        'mc': '(MC)رؤیتِ ہلال کمیٹی', //MC //pas traduire ça
        'singapore': 'سنگاپور', //Singapore
        'turkey': 'ترکی', //Turkey
        'tehran': 'تہران', //Tehran
        'isna': 'ISNA (NA)', //ISNA
        'madhab': 'مذہب', //MadhabText
        'shafi': 'شافعی', //shafi
        'hanafi': 'حنفی', //Hanafi
        'hlr': 'اونچے طول و عرض کے اصول', //hlrText
        'motn': 'آدھی رات', //MOTN
        'sotn': 'رات کی ساتویں', //SOTN
        'ta': 'گودھولی زاویہ', //TA
        'pcr': 'پولر سرکل ریوولیوشن', //pcrText
        'cc': 'قریب ترین شہر', //CC
        'cd': 'قریب ترین تاریخ', //CD
        'und': 'حساب مت کریں', //UND
        'shafaq': 'شفق', //ShafaqText
        'general': 'عمومی', //shafaqG
        'ahmer': 'سرخ گودھولی (احمر)', //shafaqR
        'abyad': 'سفید گودھولی (ابیض)', //shafaqW
        'return': 'واپس', //return
        'general': 'عمومی', //v-pills-general-tab
        'location': 'مقام', //v-pills-location-tab
        'audio': 'آڈیو', //v-pills-audio-tab
        'appearance': 'پیش منظر', //v-pills-appearance-tab
        'advanced': 'ایڈوانس', //v-pills-advanced-tab
        'muezzin': 'مؤذن',
        'autoStart': 'خود بخود شروع', //autoStartText
        'startAtLaunch': 'لانچ پر شروع', //autoStartCheckText
        'copyright': 'کاپی رائٹ 2022, Muezzin, جملہ حقوق محفوظ', //copyright
        'quote': 'یقیناً نماز اہل ایمان پر فرض کی گئی ہے وقت کی پابندی کے ساتھ۔ ...', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'فجر',
        'sunrise': 'طلوعِ آفتاب',
        'dhuhr': 'ظہر',
        'asr': 'عصر',
        'maghrib': 'مغرب',
        'isha': 'عشاء',
        'now': 'ابھی',
        'timeUntil': 'باقی وقت برائے',
        'startUpSound': 'آواز شروع کریں', //startUpSoundText
        'playSound': 'آغاز پر آواز', //startUpSoundText2
        'sysTray': 'سسٹم ٹرے', //systrayText
        'minToTray': 'ٹرے میں منمائز کریں', //systrayCheckText
        'customSettings': 'کسٹم ترتیبات', //customSettText
        'enableCS': 'کسٹم ترتیبات کو فعال کریں', //enableCalcText
        'fAngle': 'فجر کا زاویہ', //fajrAngleText
        'mAngle': 'مغرب کا زاویہ', //maghribAngleText
        'iAngle': 'عشاء کا زاویہ', //ishaAngleText
        'delayAfterM': 'تاخیر بعد مغرب', //delayText
        'delayMin': 'تاخیر (منٹ)', //delayFormText
        'france': 'فرانس', //France12 15 & 18
        'russia': 'روس', //Russia
        'gulf': 'خلیجی علاقے', //Gulf
        'preferences': 'ترجیحات', //menu label
        'resetSettings': 'ترتیبات کو دوبارہ ترتیب دیں', //menu label
        'adjustements': 'ایڈجسٹمنٹ', //adjustmentsText
        'enableAdj': 'ایڈجسٹمنٹ کو فعال کریں', //adjCheckText
        'fajrAdj': 'فجر ایڈجسٹمنٹ', //fajrAdjText
        'dhuhrAdj': 'ظہر ایڈجسٹمنٹ', //fajrAdjText
        'asrAdj': 'عصر ایڈجسٹمنٹ', //fajrAdjText
        'maghribAdj': 'مغرب ایڈجسٹمنٹ', //fajrAdjText
        'ishaAdj': 'عشاء ایڈجسٹمنٹ', //fajrAdjText
        'showSunnah': 'سنت اوقات دکھائیں', //sunnahTimesText
        'motn': 'آدھی رات',  //MOTNCheckText
        'totn': 'تہائی', //TOTNCheckText
        'minStart': 'آغاز کے وقت منمائز رکھیں', //minStartCheckText
        'updateAvailable': 'اپ ڈیٹ دستیاب',
        'version': 'ورژن',
        'available': 'گٹ ہب پر ڈاؤن لوڈ کے لئے دستیاب ہے',
        'download': 'ڈاؤن لوڈ کریں',
        'later': 'بعد میں',
        'quran': "قرآن",
        'font': 'فونٹ',
        'fontsize': 'حرف کا سائز',
        'translation': 'ترجمہ',
        'showTrans': 'ترجمہ دکھائیں',
        'diffLang': 'ایپ سے مختلف زبان',
        'transliteration': 'نقل حرفی (ٹرانسلٹریشن)',
        'showTransliteration': 'نقل حرفی دکھائیں',
        'previous': 'پچھلی سورہ',
        'next': 'اگلی سورہ',
        'weather': 'موسم',
        'showWeather': 'موسم دکھائیں',
        'units': 'اکائیاں',
        'celsius': 'سیلسیَس',
        'kelvin': 'کیلوِن',
        'fahrenheit': 'فارن ہائیٹ',
        'playDua': "اذان کے بعد دعا بجائیں",
        'open': "کھولیں",
        'quit': "بند کریں",
        'ahmedNufeis': 'أحمد النفيس',
        'customFajr': 'فجر کی اذان حسب ضرورت',
        'recitation': 'تلاوت',
        'reciter': 'تلاوت کرنے والا',
        "customTimes": "اپنی مرضی کے اوقات",
        "enableCustomTimes" : "حسب ضرورت اوقات کو فعال کریں۔",
        "jumuah" : "جمعہ",
        "jumuahTime": "جمعہ کا وقت",
        "enableJumuahTime": "جمعہ کے اوقات کو فعال کریں۔",
        "shortAllahuAkbar": "مختصر آواز",
        "hijriAdjTitle" : "ہجری تاریخ کی ایڈجسٹمنٹ",
        "hijriAdjText" : "ہجری تاریخ کا فرق",
    },
    tr: {
        'settings': 'Ayarlar', //settingsTitle
        'language': 'Dil', //langText
        'timeformat': 'Zaman biçimi', //tfText
        '24hour': '24 Saat', //24hTimeFormatText
        '12hour': '12 Saat', //12hTimeFormatText
        'showSseconds': 'Saniyeleri göster', //showSecondsText
        'dateFormat': 'Tarih formatı', //dfText
        'dateFormat1': 'GG/AA/YYYY', //id="df1Text"
        'dateFormat2': 'AA/GG/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/AA/GG', //id="df3Text"
        'notifications': 'Bildirimler', //notifText
        'notifCheck': 'Bildirimleri Aç', //notifCheckText
        'coordinates': 'Koordinatlar', //coordinatesText
        'latitude': 'Paralel', //latText
        'longitude': 'Meridyen', //lonText
        'timezone': 'Zaman Dilimi', // tzText
        'adhan': 'Ezan', //adhanText and others in main
        'adhanCheck': 'Ezanı Aç', //adhanCheckText
        'AdhanMecca': 'Mekke Ezanı', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Aksa Ezanı', //adhanAqsaText
        'customAdhan': 'Kendi Seçimin Ezan', //customAdhanText
        'duaAfterAdhan': "Ezan Sonrası Dua", //duaAfterText
        'theme': 'Tema', //themeText
        'darkMode': 'Gece Modu', //darkModeText
        'bgImage': 'Arkaplan Resmi', //bgImageText
        'bgImageCheck': 'Arkaplan Resmini Etkinleştir', //bgImageCheckText
        'calcMethods': 'Hesaplama Metodları', //calcMethodsText
        'mwl': 'Dünya İslam Birliği', //MWL
        'egyptian': 'Mısır', //Egyptian
        'karachi': 'Karaçi', //Karachi
        'uaq': "Ümmü'l-Kurra", //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Katar', //Qatar
        'kuwait': 'Kuveyt', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapur', //Singapore
        'turkey': 'Türkiye', //Turkey
        'tehran': 'Tahran', //Tehran
        'isna': 'Isna (Kuzey Amerika)', //ISNA
        'madhab': 'Mezhep', //MadhabText
        'shafi': 'Şafi', //shafi
        'hanafi': 'Hanefi', //Hanafi
        'hlr': 'Yüksek Enlem Kuralı', //hlrText
        'motn': 'Gecenin Ortası', //MOTN
        'sotn': 'Gecenin Yedide Biri', //SOTN
        'ta': 'Şafak Açısı', //TA
        'pcr': 'Kutup Civarı ', //pcrText
        'cc': 'En Yakın Şehir', //CC
        'cd': 'En Yakın Tarih', //CD
        'und': 'Hesaplama', //UND
        'shafaq': 'Şafak', //ShafaqText
        'general': 'Genel', //shafaqG
        'ahmer': 'Şafak-ı Ahmer', //shafaqR
        'abyad': 'Şafak-ı Ebyaz', //shafaqW
        'return': 'Geri Dön', //return
        'general': 'Genel', //v-pills-general-tab
        'location': 'Mekân', //v-pills-location-tab
        'audio': 'Ses', //v-pills-audio-tab
        'appearance': 'Görünüm', //v-pills-appearance-tab
        'advanced': 'Gelişmiş', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Kendinden Başlama', //autoStartText
        'startAtLaunch': 'Açılışta Başla', //autoStartCheckText
        'copyright': 'Telif Hakkı 2022, Muezzin, Tüm Hakları Saklıdır.', //copyright
        'quote': "... Çünkü namaz, mü'minlere vakitli olarak farz kılınmıştır.", //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Nisa Suresi 103. ayet", //source
        'fajr': 'İmsak',
        'sunrise': 'Güneş',
        'dhuhr': 'Öğle',
        'asr': 'İkindi',
        'maghrib': 'Akşam',
        'isha': 'Yatsı',
        'now': 'Şu an',
        'timeUntil': 'Geriye Kalan',
        'startUpSound': 'Başlama Sesi', //startUpSoundText
        'playSound': 'Başlangıçta Ses Çal', //startUpSoundText2
        'sysTray': 'Bildirim Alanı', //systrayText
        'minToTray': 'Bildirim Alanına Küçült', //systrayCheckText
        'customSettings': 'Özel Ayarlar', //customSettText
        'enableCS': 'Özel Hesaplama Ayarlarını Etkinleştir', //enableCalcText
        'fAngle': 'İmsak Açısı', //fajrAngleText
        'mAngle': 'Akşam Açısı', //maghribAngleText
        'iAngle': 'Yatsı Açısı', //ishaAngleText
        'delayAfterM': 'Akşam Sonrası Bekleme', //delayText
        'delayMin': 'Bekleme Miktarı (dk.)', //delayFormText
        'france': 'Fransa', //France12 15 & 18
        'russia': 'Rusya', //Russia
        'gulf': 'Körfez Ülkeleri', //Gulf
        'preferences': 'Ayarlar', //menu label
        'resetSettings': 'Ayarları Sıfırla', //menu label
        'adjustements': 'Uyarlamalar', //adjustmentsText
        'here': 'Buradan',// I lack the context for this one
        'enableAdj': 'Uyarlamaları Etkinleştir', //adjCheckText
        'fajrAdj': 'İmsak Uyarlamaları', //fajrAdjText
        'dhuhrAdj': 'Öğle Uyarlamaları', //fajrAdjText
        'asrAdj': 'İkindi Uyarlamaları', //fajrAdjText
        'maghribAdj': 'Akşam Uyarlamaları', //fajrAdjText
        'ishaAdj': 'Yatsı Uyarlamaları', //fajrAdjText
        'showSunnah': 'Sünnet Zamanlarını Göster', //sunnahTimesText
        'motn': 'Gecenin Ortası',  //MOTNCheckText
        'totn': 'Gecenin Üçte Biri', //TOTNCheckText
        'minStart': 'Küçültülmüş Olarak Başla', //minStartCheckText
        'updateAvailable': 'Yeni Güncelleme',
        'version': 'Versiyon',
        'available': "GitHub'tan indirilmeye hazırdır.",
        'download': 'İndir',
        'later': 'Sonra',
        'quran': "Kuran",
        'font': 'Font',
        'fontsize': 'Font büyüklüğü',
        'translation': 'Meal',
        'showTrans': 'Meal göster',
        'diffLang': 'Uygulamadan farklı dil',
        'transliteration': 'Transliterasyon',
        'showTransliteration': 'Transliterasyonu göster',
        'previous': 'Önceki Sure',
        'next': 'Sonraki Sure',
        'weather': 'Hava Durumu',
        'showWeather': 'Hava Durumunu Göster',
        'units': 'Birimler',
        'celsius': 'Santigrat',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenayt',
        'playDua': "Duadan Sonra Ezan",
        'open': 'Aç',
        'quit': 'Çıkış',
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Özel Sabah Ezanı',
        'recitation': 'Kıraat',
        'reciter': 'Kari',
        "customTimes": "Özel Zamanlar",
        "enableCustomTimes" : "Özel zamanları aktifleştir",
        "jumuah" : "Cuma",
        "jumuahTime": "Cuma Zamanı",
        "enableJumuahTime": "Cuma zamanını aktifleştir",
        "shortAllahuAkbar": "Short soundKısa ses - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Hicri tarih ayarlamaları",
        "hijriAdjText" : "Hicri tarih farkı",
    },
    bn: {
        'settings': 'সেটিংস', //settingsTitle
        'language': 'ভাষা', //langText
        'timeformat': 'সময় ফরমেট', //tfText
        '24hour': '২৪ ঘন্টা', //24hTimeFormatText
        '12hour': '১২ ঘন্টা', //12hTimeFormatText
        'showSseconds': 'সেকেন্ড প্রদর্শণ', //showSecondsText
        'dateFormat': 'তারিখ ফরমেট', //dfText
        'dateFormat1': 'দিন/মাস/বছর', //id="df1Text"
        'dateFormat2': 'মাস/দিন/বছর', //id="df2Text"
        'dateFormat3': 'বছর/মাস/দিন', //id="df3Text"
        'notifications': 'নোটিফিকেশন', //notifText
        'notifCheck': 'নোটিফিকেশন সক্রিয় করুন', //notifCheckText
        'coordinates': 'স্থানাঙ্ক ‌/ কোঅরডিনেট', //coordinatesText
        'latitude': 'অক্ষাংশ', //latText
        'longitude': 'দ্রাঘিমা', //lonText
        'timezone': 'সময়-মান মণ্ডল', // tzText
        'adhan': 'আজান', //adhanText and others in main
        'adhanCheck': 'আজান সক্রিয় করুন', //adhanCheckText
        'AdhanMecca': 'আজান মক্কা', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'আজান আল-আকসা', //adhanAqsaText
        'customAdhan': 'কাস্টমাইজড আজান', //customAdhanText
        'duaAfterAdhan': "আজানের পর দোয়া", //duaAfterText
        'theme': 'থিম', //themeText
        'darkMode': 'অন্ধকার / ডার্ক মোড', //darkModeText
        'bgImage': 'ব্যাকগ্রাউন্ড ছবি', //bgImageText
        'bgImageCheck': 'ব্যাকগ্রাউন্ড ছবি সক্রিয় করুন', //bgImageCheckText
        'calcMethods': 'গণনা পদ্ধতি', //calcMethodsText
        'mwl': 'মুসলিম বিশ্ব লীগ', //MWL
        'egyptian': 'মিশরীয়', //Egyptian
        'karachi': 'করাচি', //Karachi
        'uaq': 'উম্মে আল-কোরা', //UAQ
        'dubai': 'দুবাই', //Dubai
        'qatar': 'কাতার', //Qatar
        'kuwait': 'কুয়েত', //Kuwait
        'mc': 'চাঁদ দেখা কমিটি', //MC //pas traduire ça
        'singapore': 'সিংগাপুর', //Singapore
        'turkey': 'তুর্কি', //Turkey
        'tehran': 'তেহরান', //Tehran
        'isna': 'উত্তর আমেরিকার ইসলামিক সোসাইটি (NA)', //ISNA
        'madhab': 'মাজহাব', //MadhabText
        'shafi': 'শাফী', //shafi
        'hanafi': 'হানাফী', //Hanafi
        'hlr': 'উচ্চ অক্ষাংশ নিয়ম', //hlrText
        'motn': 'মধ্যরাত', //MOTN
        'sotn': 'রাতের সপ্তমাংশ', //SOTN
        'ta': 'সন্ধা কোণ', //TA
        'pcr': 'মেরু অঞ্চলীয় রীতি', //pcrText
        'cc': 'নিকটবর্তী শহর', //CC
        'cd': 'নিকটবর্তী তারিখ', //CD
        'und': 'গণনা প্রয়োজন নেই', //UND
        'shafaq': 'সাফাক', //ShafaqText
        'general': 'সাধারণ', //shafaqG
        'ahmer': 'গোধূলি সন্ধা (ahmer)', //shafaqR
        'abyad': 'সাদা সন্ধা (abyad)', //shafaqW
        'return': 'ফেরত', //return
        'general': 'সাধারণ', //v-pills-general-tab
        'location': 'অবস্থান', //v-pills-location-tab
        'audio': 'অডিও', //v-pills-audio-tab
        'appearance': 'আবয়ব', //v-pills-appearance-tab
        'advanced': 'এডভান্সড', //v-pills-advanced-tab
        'muezzin': 'মুয়াজ্জিন',
        'autoStart': 'স্বয়ংক্রিয় চালু', //autoStartText
        'startAtLaunch': 'প্রারম্ভিক এ চালু', //autoStartCheckText
        'copyright': 'কপিরাইট ২০২২, মুয়াজ্জিন, সকল স্বত্ব সংরক্ষিত।', //copyright
        'quote': '... প্রকৃতপক্ষে, নির্দিষ্ট সময়ে নামায কায়িম করা মু’মিনদের জন্য অবশ্য কর্তব্য।', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "আল-কোরআন: ৪/১০৩", //source
        'fajr': 'ফজর',
        'sunrise': 'সূর্যদয়',
        'dhuhr': 'যুহর',
        'asr': 'আসর',
        'maghrib': 'মাগরিব',
        'isha': 'এশা',
        'now': 'এখন',
        'timeUntil': 'ওয়াক্ত শুরু হতে সময় বাকি',
        'startUpSound': 'প্রারম্ভিক শব্দ', //startUpSoundText
        'playSound': 'প্রারম্ভিক শব্দ চালু', //startUpSoundText2
        'sysTray': 'সিস্টেম ট্রে', //systrayText
        'minToTray': 'ট্রেতে মিনিমাইজ করুন', //systrayCheckText
        'customSettings': 'পছন্দ অনুযায়ী সেটিংস', //customSettText
        'enableCS': 'পছন্দ অনুযায়ী গণনা সেটিংস চালু করুন', //enableCalcText
        'fAngle': 'ফজরের সময় কোণ', //fajrAngleText
        'mAngle': 'মাগরিবের সময় কোণ', //maghribAngleText
        'iAngle': 'এশার সময় কোন', //ishaAngleText
        'delayAfterM': 'মাগরিবের বিলম্ব সময়', //delayText
        'delayMin': 'বিলম্ব (মিনিট)', //delayFormText
        'france': 'ফ্রান্স', //France12 15 & 18
        'russia': 'রাশিয়া', //Russia
        'gulf': 'উপসাগরীয় অঞ্চল', //Gulf
        'preferences': 'অগ্রাধিকার', //menu label
        'resetSettings': 'সেটিংস পুনঃস্থাপন', //menu label
        'adjustements': 'সমন্বয়', //adjustmentsText
        'here': 'এখানে',
        'enableAdj': 'সমন্বয় সক্রিয় করুন', //adjCheckText
        'fajrAdj': 'ফজরের সময় সমন্বয়', //fajrAdjText
        'dhuhrAdj': 'যুহরের সময় সমন্বয়', //fajrAdjText
        'asrAdj': 'আসরের সমন্বয়', //fajrAdjText
        'maghribAdj': 'মাগরিবের সময় সমন্বয়', //fajrAdjText
        'ishaAdj': 'এশার সময় সমন্বয়', //fajrAdjText
        'showSunnah': 'সুন্নাহ এর সময় প্রদর্শিত করুন', //sunnahTimesText
        'motn': 'মধ্যরাত',  //MOTNCheckText
        'totn': 'রাতের শেষ তৃতীয়াংশ', //TOTNCheckText
        'minStart': 'মিনিমাইজড অবস্থায় চালু করুন', //minStartCheckText
        'updateAvailable': 'আপডেট উপলব্ধ',
        'version': 'ভার্সন',
        'available': 'ডাউনলোড করার জন্য গিটহাব এ উপলব্ধ',
        'download': 'ডাউনলোড',
        'later': 'পরবর্তীতে',
        'quran': "কোরআন",
        'font': 'ফন্ট',
        'fontsize': 'ফন্ট সাইজ',
        'translation': 'অনুবাদ',
        'showTrans': 'অনুবাদ প্রদর্শন করুন',
        'diffLang': 'এপ্লিকেশন থেকে অন্য ভাষা',
        'transliteration': 'বর্ণান্তরণ',
        'showTransliteration': 'বর্ণান্তরণ প্রদর্শন করুন',
        'previous': 'পূর্বের সূরা',
        'next': 'পরের সূরা',
        'weather': 'আবহাওয়া',
        'showWeather': 'আবহাওয়া প্রদর্শন করুন',
        'units': 'পরিমাপক',
        'celsius': 'সেলসিয়াস',
        'kelvin': 'ক্যালবিন',
        'fahrenheit': 'ফারেনহাইট',
        'playDua': "আজানের পর দোয়া",
        'open': "খুলুন",
        'quit': "বন্ধ করুন",
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'কাস্টম ফজর আজান',
        'recitation': 'তিলাওয়াত',
        'reciter': 'তিলাওয়াতকারী',
        "customTimes": "কাস্টম টাইমস",
        "enableCustomTimes" : "কাস্টম সময় সক্ষম করুন",
        "jumuah" : "জুমুআ",
        "jumuahTime": "জুমার সময়",
        "enableJumuahTime": "জুমার সময় চালু করুন",
        "shortAllahuAkbar": "সংক্ষিপ্ত শব্দ - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "হিজরি তারিখ সমন্বয়",
        "hijriAdjText" : "হিজরি তারিখের পার্থক্য",
    },
    ru: {
        'settings': 'Настройки', //settingsTitle
        'language': 'Язык', //langText
        'timeformat': 'Формат времени', //tfText
        '24hour': '24-часовой', //24hTimeFormatText
        '12hour': '12-часовой', //12hTimeFormatText
        'showSseconds': 'Отображать секунды', //showSecondsText
        'dateFormat': 'Формат даты', //dfText
        'dateFormat1': 'ДД/ММ/ГГГГ', //id="df1Text"
        'dateFormat2': 'ММ/ДД/ГГГГ', //id="df2Text"
        'dateFormat3': 'ГГГГ/ММ/ДД', //id="df3Text"
        'notifications': 'Уведомления', //notifText
        'notifCheck': 'Включить уведомления', //notifCheckText
        'coordinates': 'Координаты', //coordinatesText
        'latitude': 'Широта', //latText
        'longitude': 'Долгота', //lonText
        'timezone': 'Часовой пояс', // tzText
        'adhan': 'Азан', //adhanText and others in main
        'adhanCheck': 'Включить Азан', //adhanCheckText
        'AdhanMecca': 'Азан Мекка', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Азан аль-Акса', //adhanAqsaText
        'customAdhan': 'Выбрать Азан', //customAdhanText
        'duaAfterAdhan': "Ду'а после Азана", //duaAfterText
        'theme': 'Тема', //themeText
        'darkMode': 'Темный режим', //darkModeText
        'bgImage': 'Фоновое изображение', //bgImageText
        'bgImageCheck': 'Включить Фоновое изображение', //bgImageCheckText
        'calcMethods': 'Методы расчёта', //calcMethodsText
        'mwl': 'Всемирная исламская лига', //MWL
        'egyptian': 'Египетский', //Egyptian
        'karachi': 'Карачи', //Karachi
        'uaq': 'Умм аль-Кура', //UAQ
        'dubai': 'Дубаи', //Dubai
        'qatar': 'Катар', //Qatar
        'kuwait': 'Кувейт', //Kuwait
        'mc': 'Комитет наблюдения луны', //MC //pas traduire ça
        'singapore': 'Сингапур', //Singapore
        'turkey': 'Турция', //Turkey
        'tehran': 'Тегеран', //Tehran
        'isna': 'ISNA (Сев.Ам.)', //ISNA
        'madhab': 'Мазхаб', //MadhabText
        'shafi': 'Шафии', //shafi
        'hanafi': 'Ханафи', //Hanafi
        'hlr': 'Правило высоких широт', //hlrText
        'motn': 'Середина ночи', //MOTN
        'sotn': 'Одна седьмая ночи', //SOTN
        'ta': 'Угловой метод', //TA
        'pcr': 'Решение для Полярного круга', //pcrText
        'cc': 'Ближайший город', //CC
        'cd': 'Ближайшая дата', //CD
        'und': 'Не рассчитывать', //UND
        'shafaq': 'Сумерки', //ShafaqText
        'general': 'Общее правило', //shafaqG
        'ahmer': 'Красные сумерки (ахмар)', //shafaqR
        'abyad': 'Белые сумерки (абйад)', //shafaqW
        'return': 'Назад', //return
        'general': 'Общий', //v-pills-general-tab
        'location': 'Местоположение', //v-pills-location-tab
        'audio': 'Аудио', //v-pills-audio-tab
        'appearance': 'Внешний вид', //v-pills-appearance-tab
        'advanced': 'Продвинутые', //v-pills-advanced-tab
        'muezzin': 'Муэдзин',
        'autoStart': 'Автозапуск', //autoStartText
        'startAtLaunch': 'Открывать при запуске', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, Все права защищены.', //copyright
        'quote': '... Воистину, молитва предписана верующим в определённое время', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Кур'ан: 4/103", //source
        'fajr': 'Фаджр',
        'sunrise': 'Восход',
        'dhuhr': 'Зухр',
        'asr': 'Аср',
        'maghrib': 'Магриб',
        'isha': 'Иша',
        'now': 'Сейчас',
        'timeUntil': 'До молитвы',
        'startUpSound': 'Звук при запуске', //startUpSoundText
        'playSound': 'Проигрывать звук при запуске', //startUpSoundText2
        'sysTray': 'Системный трей', //systrayText
        'minToTray': 'Свернуть в трей', //systrayCheckText
        'customSettings': 'Свои настройки', //customSettText
        'enableCS': 'Включить свой Метод расчёта', //enableCalcText
        'fAngle': 'Угол Фаджра', //fajrAngleText
        'mAngle': 'Угол Магриба', //maghribAngleText
        'iAngle': 'Угол Иша', //ishaAngleText
        'delayAfterM': 'Отсрочить Магриб', //delayText
        'delayMin': 'Отсрочка (в минутах)', //delayFormText
        'france': 'Франция', //France12 15 & 18
        'russia': 'Россия', //Russia
        'gulf': 'Страны Персидского залива', //Gulf
        'preferences': 'Предпочтения', //menu label
        'resetSettings': 'Сбросить настройки', //menu label
        'adjustements': 'Поправки', //adjustmentsText
        'here': 'Здесь',
        'enableAdj': 'Включить поправки', //adjCheckText
        'fajrAdj': 'Поправка Фаджра', //fajrAdjText
        'dhuhrAdj': 'Поправка Зухра', //fajrAdjText
        'asrAdj': 'Поправка Асра', //fajrAdjText
        'maghribAdj': 'Поправка Магриба', //fajrAdjText
        'ishaAdj': 'Поправка Иша', //fajrAdjText
        'showSunnah': 'Показывать время Сунны', //sunnahTimesText
        'motn': 'Середина ночи',  //MOTNCheckText
        'totn': 'Последняя треть ночи', //TOTNCheckText
        'minStart': 'Запускать свёрнутым', //minStartCheckText
        'updateAvailable': 'Доступно обновление',
        'version': 'Версия',
        'available': 'доступна для скачивания на GitHub',
        'download': 'Скачать',
        'later': 'Позже',
        'quran': "Кур'ан",
        'font': 'Шрифт',
        'fontsize': 'Размер шрифта',
        'translation': 'Перевод',
        'showTrans': 'Отображать перевод',
        'diffLang': 'Выбрать свой язык',
        'transliteration': 'Транслитерация',
        'showTransliteration': 'Отображать транслитерацию',
        'previous': 'Прошлая Сура',
        'next': 'Следующая Сура',
        'weather': 'Погода',
        'showWeather': 'Показывать погоду',
        'units': 'Единицы измерения',
        'celsius': 'Цельсий',
        'kelvin': 'Кельвин',
        'fahrenheit': 'Фаренгейт',
        'playDua': "Проигрывать Ду'а после Азана",
        'open': 'Открыть',
        'quit': 'Выйти',
        'ahmedNufeis': 'Ахмад аль-Нуфейс',
        'customFajr': 'Свой Азан для Фаджра',
        'recitation': 'Чтение',
        'reciter': 'Чтец',
        "customTimes": "Своё время",
        "enableCustomTimes" : "Выбрать своё время",
        "jumuah" : "Джума",
        "jumuahTime": "Время Джума",
        "enableJumuahTime": "Добавить время Джума",
        "shortAllahuAkbar": "Короткий звук - Мишари Рашид аль-Афаси",
        "hijriAdjTitle" : "Поправка даты по Хиджре",
        "hijriAdjText" : "Разница в дате по Хиджре",
    },
    id: {
        'settings': 'Pengaturan', //settingsTitle
        'language': 'Bahasa', //langText
        'timeformat': 'Format waktu', //tfText
        '24hour': '24 Jam', //24hTimeFormatText
        '12hour': '12 Jam', //12hTimeFormatText
        'showSseconds': 'Perlihatkan detik', //showSecondsText
        'dateFormat': 'Format waktu', //dfText
        'dateFormat1': 'HH/BB/TTTT', //id="df1Text"
        'dateFormat2': 'BB/HH/TTTT', //id="df2Text"
        'dateFormat3': 'TTTT/BB/HH', //id="df3Text"
        'notifications': 'Notifikasi', //notifText
        'notifCheck': 'Aktifkan notifikasi', //notifCheckText
        'coordinates': 'Koordinat', //coordinatesText
        'latitude': 'Garis Lintang', //latText
        'longitude': 'Garis Bujur', //lonText
        'timezone': 'Zona waktu', // tzText
        'adhan': 'Azan', //adhanText and others in main
        'adhanCheck': 'Aktifkan Azan', //adhanCheckText
        'AdhanMecca': 'Azan Makkah', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Azan al-Aqsa', //adhanAqsaText
        'customAdhan': 'Azan Kustom', //customAdhanText
        'duaAfterAdhan': "Doa setelah Azan", //duaAfterText
        'theme': 'Tema', //themeText
        'darkMode': 'Mode Gelap', //darkModeText
        'bgImage': 'Gambar Latar Belakang', //bgImageText
        'bgImageCheck': 'Aktifkan Gambar Latar Belakang', //bgImageCheckText
        'calcMethods': 'Metode Kalkulasi', //calcMethodsText
        'mwl': 'Liga Muslim Dunia', //MWL
        'egyptian': 'Mesir', //Egyptian
        'karachi': 'Karachi', //Karachi
        'uaq': 'Ummul Quro', //UAQ
        'dubai': 'Dubai', //Dubai
        'qatar': 'Qatar', //Qatar
        'kuwait': 'Kuwait', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'Singapura', //Singapore
        'turkey': 'Turki', //Turkey
        'tehran': 'Tehran', //Tehran
        'isna': 'ISNA (NA)', //ISNA
        'madhab': 'Mazhab', //MadhabText
        'shafi': 'Syafi`i', //shafi
        'hanafi': 'Hanafi', //Hanafi
        'hlr': 'Aturan Lintang Tinggi', //hlrText
        'motn': 'Pertengahan Malam', //MOTN
        'sotn': 'Sepertujuh Malam', //SOTN
        'ta': 'Sudut Senja', //TA
        'pcr': 'Resolusi Lingkaran Kutub', //pcrText
        'cc': 'Kota Terdekat', //CC
        'cd': 'Tanggal Terdekat', //CD
        'und': 'Jangan kalkulasi', //UND
        'shafaq': 'Shafaq', //ShafaqText
        'general': 'Umum', //shafaqG
        'ahmer': 'Senja Merah (ahmer)', //shafaqR
        'abyad': 'Senja Putih (abyad)', //shafaqW
        'return': 'Kembali', //return
        'general': 'Umum', //v-pills-general-tab
        'location': 'Lokasi', //v-pills-location-tab
        'audio': 'Audio', //v-pills-audio-tab
        'appearance': 'Tampilan', //v-pills-appearance-tab
        'advanced': 'Tingkat Lanjut', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'Mulai Otomatis', //autoStartText
        'startAtLaunch': 'Mulai otomatis saat launch', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, All rights reserved.', //copyright
        'quote': '... Sesungguhnya salat itu merupakan kewajiban yang waktunya telah ditentukan atas orang-orang mukmin.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "QS. An-Nisa (4):103", //source
        'fajr': 'Subuh',
        'sunrise': 'Terbit',
        'dhuhr': 'Zuhur',
        'asr': 'Asar',
        'maghrib': 'Magrib',
        'isha': 'Isya',
        'now': 'Sekarang',
        'timeUntil': 'Waktu sampai',
        'startUpSound': 'Suara Start Up', //startUpSoundText
        'playSound': 'Putar suara saat startup', //startUpSoundText2
        'sysTray': 'System tray', //systrayText
        'minToTray': 'Perkecil ke system tray', //systrayCheckText
        'customSettings': 'Pengaturan kustom', //customSettText
        'enableCS': 'Aktifkan Pengaturan Kalkulasi Kustom', //enableCalcText
        'fAngle': 'Sudut Subuh', //fajrAngleText
        'mAngle': 'Sudut Magrib', //maghribAngleText
        'iAngle': 'Sudut Isya', //ishaAngleText
        'delayAfterM': 'Jeda setelah Magrib', //delayText
        'delayMin': 'Jeda (menit)', //delayFormText
        'france': 'Prancis', //France12 15 & 18
        'russia': 'Rusia', //Russia
        'gulf': 'Wilayah Teluk (Gulf Region)', //Gulf
        'preferences': 'Preferensi', //menu label
        'resetSettings': 'Atur ulang pengaturan', //menu label
        'adjustements': 'Penyesuaian', //adjustmentsText
        'here': 'disini',
        'enableAdj': 'Aktifkan penyesuaian jadwal salat', //adjCheckText
        'fajrAdj': 'Penyesuaian Subuh', //fajrAdjText
        'dhuhrAdj': 'Penyesuaian Zuhur', //fajrAdjText
        'asrAdj': 'Penyesuaian Asar', //fajrAdjText
        'maghribAdj': 'Penyesuaian Magrib', //fajrAdjText
        'ishaAdj': 'Penyesuaian Isya', //fajrAdjText
        'showSunnah': 'Perlihatkan Waktu Salat Sunah', //sunnahTimesText
        'motn': 'Pertengahan malam',  //MOTNCheckText
        'totn': 'Sepertiga malam', //TOTNCheckText
        'minStart': 'Perkecil saat mulai', //minStartCheckText
        'updateAvailable': 'Update tersedia',
        'version': 'Versi',
        'available': 'tersedia untuk diunduh di GitHub',
        'download': 'Unduh',
        'later': 'Nanti',
        'quran': "Qur'an",
        'font': 'Font',
        'fontsize': 'Ukuran font',
        'translation': 'Terjemahan',
        'showTrans': 'Perlihatkan terjemahan',
        'diffLang': 'Bahasa yang berbeda dengan aplikasi',
        'transliteration': 'Transliterasi',
        'showTransliteration': 'Perlihatkan transliterasi',
        'previous': 'Surah sebelumnya',
        'next': 'Surah berikutnya',
        'weather': 'Cuaca',
        'showWeather': 'Perlihatkan cuaca',
        'units': 'Unit suhu',
        'celsius': 'Celsius',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Fahrenheit',
        'playDua': "Putar doa setelah Azan",
        'open': 'Buka',
        'quit': 'Keluar',
        'ahmedNufeis': 'Ahmad Al-Nufais',
        'customFajr': 'Azan Subuh Kustom',
        'recitation': 'Pembacaan',
        'reciter': 'Pembaca',
        "customTimes": "Jadwal Kustom",
        "enableCustomTimes" : "Aktifkan jadwal salat kustom",
        "jumuah" : "Jumat",
        "jumuahTime": "Jadwal Jumat",
        "enableJumuahTime": "Aktifkan Jadwal Jumat",
        "shortAllahuAkbar": "Suara pendek - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Penyesuaian tanggal Hijriah",
        "hijriAdjText" : "Perbedaan tanggal Hijriah",

    },
    uz: {  
        'settings': 'Sozlamalar', 
        'language': 'Til', 
        'timeformat': 'Vaqt formati',
        '24hour': '24 Soat', 
        '12hour': '12 Soat', 
        'showSseconds': "Sekundlarni ko'rsatish", 
        'dateFormat': 'Kun formati', 
        'dateFormat1': 'DD/OO/YYYY', 
        'dateFormat2': 'DD/OO/YYYY', 
        'dateFormat3': 'YYYY/OO/KK', 
        'notifications': 'Bildirishnomalar',
        'notifCheck': 'Bildirishnomalarni yoqish', 
        'coordinates': 'Koordinatalar', 
        'latitude': 'Kenglik',
        'longitude': 'Uzunlik', 
        'timezone': 'Vaqt hududi', 
        'adhan': 'Azon', 
        'adhanCheck': 'Azonni yoqish', 
        'AdhanMecca': 'Makka azoni', 
        'adhanAqsa': 'Masjid al-Aqsoning azoni', 
        'customAdhan': 'Maxsus', 
        'duaAfterAdhan': "Azondan oldingi duo", 
        'theme': 'Orqa fon', 
        'darkMode': "Qorong'u fon",  
        'bgImage': 'Orqa fon rasmi', 
        'bgImageCheck': 'Orqa fon rasmi rasmi',
        'calcMethods': 'Hisoblash usullari', 
        'mwl': 'Dunyo musilmonlar idorasi', 
        'egyptian': 'Misr', 
        'karachi': 'Karachi', 
        'uaq': 'Ummul Quro', 
        'dubai': 'Dubai', 
        'qatar': 'Qatar', 
        'kuwait': 'Quvayt',
        'mc': "Oyni kuzatish qo'mitasi", 
        'singapore': 'Singapur', 
        'turkey': 'Turkiya', 
        'tehran': 'Tehron', 
        'isna': 'Shimoliy Amerika Islom jamiyati', 
        'madhab': 'Mazhab', 
        'shafi': 'Shofeiy', 
        'hanafi': 'Hanafiy', 
        'hlr': 'Yuqori kenglik qoidasi', 
        'motn': 'Tunning yarmi', 
        'sotn': 'Tunning yettidan biri', 
        'ta': 'Alacakaranlik burchagi', 
        'pcr': "Qutbli doira o'lchamlari", 
        'cc': 'Eng yaqin shahar', 
        'cd': 'Eng yaqin vaqt', 
        'und': 'Hisoblamaslik', 
        'shafaq': 'Shafaq', 
        'general': 'Asosiy', 
        'ahmer': 'Qizil alacakaranlik (qizil)', 
        'abyad': 'Oq alacakaranlik (oq)', 
        'return': 'Qaytish', 
        'general': 'Umumiy', 
        'location': 'Joylashuv', 
        'audio': 'Audio', 
        'appearance': "Ko'rinish", 
        'advanced': 'Optimallashtirish', 
        'muezzin': 'Muazzin',
        'autoStart': 'Auto boshlash', 
        'startAtLaunch': 'Ishga tushirilganda boshlash', 
        'copyright': 'Mualliflik huquqi 2022, Muezzin, Barcha Huquqlar Kafolatlangan.', 
        'quote': "... Albatta, namoz mo'minlarga vaqtida farz qilingandir.", 
        'source': "Qur'on: 4/103", 
        'fajr': 'Bomdod',
        'sunrise': 'Quyosh chiqishi',
        'dhuhr': 'Peshin',
        'asr': 'Asr',
        'maghrib': 'Shom',
        'isha': 'Xufton',
        'now': 'Hozir',
        'timeUntil': 'gacha',
        'startUpSound': 'Ishga tushish ovozi', 
        'playSound': 'Ishga tushganda ovoz chiqarish', 
        'sysTray': 'Tizim listi', 
        'minToTray': "Ro'yxatni minimallashtirish", 
        'customSettings': 'Mahsus sozlamalar', 
        'enableCS': 'Maxsus hisoblash sozlamalarini yoqish', 
        'fAngle': 'Bomdod burchagi', 
        'mAngle': 'Peshin burchagi', 
        'iAngle': 'Shom burchagi', 
        'delayAfterM': 'Shomdan keyin kechiktirish', 
        'delayMin': 'Kechiktirish (daqiqalar)', 
        'france': 'Fransiya', 
        'russia': 'Rassiya', 
        'gulf': "Ko'rfaz mintaqasi", 
        'preferences': 'Afzalliklar', 
        'resetSettings': 'Sozlamalarni tiklash', 
        'adjustements': 'Tuzatishlar', 
        'here': 'Shu yerda',
        'enableAdj': 'Sozlamalarni yoqish', 
        'fajrAdj': 'Bomdod sozlamalari', 
        'dhuhrAdj': 'Peshin sozlamalari', 
        'asrAdj': 'Asr sozlamalari', 
        'maghribAdj': 'Shom sozlamalari', 
        'ishaAdj': 'Hufton sozlamalari', 
        'showSunnah': "Sunnat vaqtlarini ko'rsatish", 
        'motn': 'Tunning yarmi',  
        'totn': 'Kechaning uchinchisi', 
        'minStart': 'Minimallashtirishdan boshlash', 
        'updateAvailable': 'Yangilanishlar mavjud',
        'version': 'Versiya',
        'available': 'ni GitHubdan yuklab olish mavjud',
        'download': 'Yuklash',
        'later': 'Keyinroq',
        'quran': "Qur'on",
        'font': 'Shrift',
        'fontsize': "Shrift o'lchami",
        'translation': 'Tarjimalar',
        'showTrans': "Tarjimalarni ko'rsatish",
        'diffLang': 'Ilova uchun boshqa til',
        'transliteration': 'Translitiratsiya',
        'showTransliteration': "Translitiratsiyani ko'rsatish",
        'previous': 'Oldingi sura',
        'next': 'Keyingi sura',
        'weather': 'Ob-havo',
        'showWeather': "Ob-havoni ko'rsatish",
        'units': "Bo'limlar",
        'celsius': 'Selsi',
        'kelvin': 'Kelvin',
        'fahrenheit': 'Farengeyt',
        'playDua': "Azondan keyingi duoni o'qish",
        'open': 'Ochish',
        'quit': 'Chiqish',
        'ahmedNufeis': 'Ahmed Al-Nufais',
        'customFajr': 'Mahsus Bomdod azoni',
        'recitation': 'Qiroat',
        'reciter': 'Qori',
        "customTimes": "Mahsus vaqtlar",
        "enableCustomTimes" : "Mahsus vaqtlarni yoqish",
        "jumuah" : "Juma",
        "jumuahTime": "Juma Vaqti",
        "enableJumuahTime": "Juma Vaqtini Yoqish",
        "shortAllahuAkbar": "Qisqa azon - Mishary Rashid Alafasy",
        "hijriAdjTitle" : "Hijriy vaqtga o'tkazish",
        "hijriAdjText" : "Hijri vaqt tafovuti",
    },
}