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
        'quote': 'Indeed, prayer has been decreed upon the believers a decree of specified times.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
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
        'showTransliteration': 'Show transliteration'
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
        'quote': 'En Effet, la Salât demeure, pour les croyants, une prescription, à des temps déterminés.', //quote
        'source': "Qur'an: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Sunrise',
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
        'showTransliteration': 'Montrer la translitération'
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
        'quote': 'Ciertamente el salat es para los creyentes, un precepto en tiempos determinados.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Corán: 4/103", //source
        'fajr': 'Fajr',
        'sunrise': 'Sunrise',
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
        'showTransliteration': 'Mostrar transliteración'
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
        'quote': 'إِنَّ الصَّلاةَ كانَت عَلَى المُؤمِنينَ كِتابًا مَوقوتًا', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "القرآن: 4/103", //source
        'fajr': 'فجر',
        'sunrise': 'شروق',
        'dhuhr': 'الظهر',
        'asr': 'عصر',
        'maghrib': 'مغرب',
        'isha': 'عشاء ',
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
        'showTransliteration': 'إظهار التحويل الصوتي'
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
        'quote': 'Infatti, la preghiera è stata decretata sui credenti con un decreto di tempi determinati.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
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
        'showTransliteration': 'Mostra traslitterazione'
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
        'copyright': 'Copyright 2022, Muezzin, Alle Rechte vorbehalten.', //copyright
        'quote': 'Wahrlich das Gebet zu bestimmten Zeiten ist für die Gläubigen eine Pflicht.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
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
        'showTransliteration': 'Transliteration anzeigen '
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
        'copyright': 'Copyright 2022, Muezzin, Alle rechten voorbehouden.', //copyright
        'quote': 'Voorwaar, het gebed is de gelovigen op vaste tijden voorgeschreven.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
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
        'showTransliteration': 'Transliteratie weergeven'
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
        'quote': 'Bönen är alla troendes plikt, knuten till bestämda tider.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
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
        'showTransliteration': 'Visa translitterering '
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
        'quote': 'Sannelig, tidebønnen er pålagt de troende ifølge fastsatte tider.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
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
        'showTransliteration': 'Vis translitterasjon '
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
        'quote': 'Sandelig, bønnen er foreskrevet de troende på fastsatte tider.', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
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
        'showTransliteration': 'Vis translitteration '
    },
    ur: {
        'settings': 'ترتیبات', //settingsTitle
        'language': 'زبان', //langText
        'timeformat': 'وقت کی ترتیب', //tfText
        '24hour': '24', //24hTimeFormatText
        '12hour': '12', //12hTimeFormatText
        'showSseconds': 'سیکنڈ دکھائیں', //showSecondsText
        'dateFormat': 'تاریخ کی شکل', //dfText
        'dateFormat1': 'DD/MM/YYYY', //id="df1Text"
        'dateFormat2': 'MM/DD/YYYY', //id="df2Text"
        'dateFormat3': 'YYYY/MM/DD', //id="df3Text"
        'notifications': 'اطلاعات', //notifText
        'notifCheck': 'اطلاعات کو فعال کریں', //notifCheckText
        'coordinates': ' سمتوں', //coordinatesText
        'latitude': 'طول', //latText
        'longitude': ' طول و عرض', //lonText
        'timezone': 'ٹائم زون', // tzText
        'adhan': 'عدنان', //adhanText and others in main
        'adhanCheck': 'ایڈن کو فعال کریں', //adhanCheckText
        'AdhanMecca': 'Adhan Mecca', //adhanMeccaText //Traduire juste Mecca
        'adhanAqsa': 'Adhan al-Aqsa', //adhanAqsaText
        'customAdhan': 'اپنی مرضی کے مطابق', //customAdhanText
        'duaAfterAdhan': "دعا", //duaAfterText
        'theme': 'خیالیہ', //themeText
        'darkMode': 'گہرا موڈ', //darkModeText
        'bgImage': 'پس منظر کی تصویر', //bgImageText
        'bgImageCheck': 'پس منظر کی تصویر کو فعال کریں', //bgImageCheckText
        'calcMethods': 'حساب کے طریقوں', //calcMethodsText
        'mwl': 'مسلم ورلڈ لیگ', //MWL
        'egyptian': 'مصری', //Egyptian
        'karachi': 'کراچی', //Karachi
        'uaq': 'ام القر', //UAQ
        'dubai': 'دبئی', //Dubai
        'qatar': 'قطر', //Qatar
        'kuwait': 'کویت', //Kuwait
        'mc': 'Moonsighting Committee', //MC //pas traduire ça
        'singapore': 'سنگاپور', //Singapore
        'turkey': 'ترکی', //Turkey
        'tehran': 'تہران', //Tehran
        'isna': 'ISNA (NA)', //ISNA
        'madhab': 'مداب', //MadhabText
        'shafi': 'شفیع', //shafi
        'hanafi': 'حنفی', //Hanafi
        'hlr': 'اعلی طول و عرض کی اصول', //hlrText
        'motn': 'آدھی رات', //MOTN
        'sotn': 'رات کی ساتویں', //SOTN
        'ta': 'گودھولی زاویہ', //TA
        'pcr': 'پولر سرکل قرارداد', //pcrText
        'cc': 'قریب ترین شہر', //CC
        'cd': 'قریب ترین تاریخ', //CD
        'und': 'حساب نہیں کرتے', //UND
        'shafaq': 'شفیق', //ShafaqText
        'general': 'جنرل', //shafaqG
        'ahmer': 'ریڈ گودھولی (احمد)', //shafaqR
        'abyad': 'وائٹ گودھولی (ابدی)', //shafaqW
        'return': 'واپسی', //return
        'general': 'جنرل', //v-pills-general-tab
        'location': 'مقام', //v-pills-location-tab
        'audio': 'آڈیو', //v-pills-audio-tab
        'appearance': 'ظہور', //v-pills-appearance-tab
        'advanced': 'اعلی درجے کی', //v-pills-advanced-tab
        'muezzin': 'Muezzin',
        'autoStart': 'خود بخود شروع', //autoStartText
        'startAtLaunch': 'لانچ پر شروع', //autoStartCheckText
        'copyright': 'Copyright 2022, Muezzin, All rights reserved.', //copyright
        'quote': ' قائم کرو۔ بیشک نماز مومنوں پر مقررہ وقت کے حساب سے فرض ہے', //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
        'source': "Qur'an: 4/103", //source
        'fajr': 'فجر',
        'sunrise': 'سورج کی روشنی',
        'dhuhr': 'دھہر',
        'asr': 'عمر ',
        'maghrib': 'مغرب',
        'isha': 'عشاء',
        'now': 'ابھی',
        'timeUntil': 'ٹائمنٹیل',
        'startUpSound': 'آواز شروع کرو', //startUpSoundText
        'playSound': 'آغاز پر آواز کھیلیں', //startUpSoundText2
        'sysTray': 'سسٹم ٹرے', //systrayText
        'minToTray': 'ٹرے کو کم سے کم', //systrayCheckText
        'customSettings': 'اپنی مرضی کے مطابق ترتیبات', //customSettText
        'enableCS': 'اپنی مرضی کے مطابق حساب کی ترتیبات کو فعال کریں', //enableCalcText
        'fAngle': 'فجر زاویہ', //fajrAngleText
        'mAngle': 'مغرب زاویہ', //maghribAngleText
        'iAngle': 'اسحا زاویہ', //ishaAngleText
        'delayAfterM': 'مغرب کے بعد تاخیر', //delayText
        'delayMin': 'تاخیر (منٹ)', //delayFormText
        'france': 'فرانس', //France12 15 & 18
        'russia': 'روس', //Russia
        'gulf': 'خلیج علاقے', //Gulf
        'preferences': 'ترجیحات', //menu label
        'resetSettings': 'ترتیبات کو دوبارہ ترتیب دیں', //menu label
        'adjustements': 'ایڈجسٹمنٹ', //adjustmentsText
        'enableAdj': 'ایڈجسٹمنٹ کو فعال کریں', //adjCheckText
        'fajrAdj': 'فجر ایڈجسٹمنٹ', //fajrAdjText
        'dhuhrAdj': 'ظہر ایڈجسٹمنٹ', //fajrAdjText
        'asrAdj': 'عصر ایڈجسٹمنٹ', //fajrAdjText
        'maghribAdj': 'مغرب ایڈجسٹمنٹ', //fajrAdjText
        'ishaAdj': 'عشاء ایڈجسٹمنٹ', //fajrAdjText
        'showSunnah': 'سنت ٹائمز دکھائیں', //sunnahTimesText
        'motn': 'آدھی رات',  //MOTNCheckText
        'totn': 'رات کا تیسرا', //TOTNCheckText
        'minStart': 'کم سے کم شروع', //minStartCheckText
        'updateAvailable': 'اپ ڈیٹ دستیاب', 
        'version': 'ورژن',
        'available': 'GitHub پر ڈاؤن لوڈ کے لئے دستیاب ہے',
        'download': 'ڈاؤن لوڈ کریں',
        'later': 'بعد میں',
        'quran': "قرآن",
        'font': 'فونٹ',
        'fontsize': 'حرف کا سائز',
        'translation': 'ترجمہ',
        'showTrans': 'ترجمہ دکھائیں۔',
        'diffLang': 'درخواست سے مختلف زبان',
        'transliteration': 'نقل حرفی',
        'showTransliteration': 'نقل حرفی دکھائیں۔ '
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
        'quote': "Çünkü namaz, mü'minlere vakitli olarak farz kılınmıştır.", //quote //à rechercher sur internet, la traduction sur internet est très mauvaise
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
        'font': 'Yazı tipi',
        'fontsize': 'Yazı Boyutu',
        'translation': 'Tercüme',
        'showTrans': 'Tercümeyi göster',
        'diffLang': 'Uygulamadan farklı dil',
        'transliteration': 'Harf çevirisi',
        'showTransliteration': 'Harf çevirisini göster'
    },
}
