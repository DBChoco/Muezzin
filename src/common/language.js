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
        'donate': 'Donate', //menu label
        'preferences': 'Preferences', //menu label
        'resetSettings': 'Reset settings', //menu label
        'updateAvalible': 'Update avalible', 
        'downloadSoon': "Download will start soon, you'll be notified when it is ready.", 
        'updateDownloaded': 'Update downloaded', 
        'downloadFinished': 'Update downloaded, restart Muezzin to apply it.', 
        'ok': 'Okay', 
        'restart': 'Restart', 
        'error': 'Error while updating', 
        'submitReport': 'Please submit a report and update the app manually', 
        'adjustements': 'Adjustments', //adjustmentsText
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
        'donate': 'Faire un don', //menu label
        'preferences': 'Préférences', //menu label
        'resetSettings': 'Réinitialiser les options', //menu label
        'updateAvalible': 'Mise à jour disponible', 
        'downloadSoon': "Le téléchargement commencera bientôt, vous serez averti quand il est prêt.", 
        'updateDownloaded': 'Mise à jour téléchargée', 
        'downloadFinished': "Mise à jour téléchargée, redémarrez Muzzin pour l'appliquer.", 
        'ok': "D'accord", 
        'restart': 'Redémarrer', 
        'error': 'Erreur lors de la mise à jour', 
        'submitReport': "Veuillez soumettre un rapport et mettre à jour l'application manuellement", 
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
        'minStart': 'Commencé minimisé', //minStartCheckText
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
        'donate': 'Donar', //menu label
        'preferences': 'Preferencias', //menu label
        'resetSettings': 'Reiniciar ajustes', //menu label
        'updateAvalible': 'Actualizar disponible', 
        'downloadSoon': "La descarga comenzará pronto, se le notificará cuando esté listo.", 
        'updateDownloaded': 'Actualización descargada', 
        'downloadFinished': 'Actualización descargada, reinicie MUEZZIN para aplicarla.', 
        'ok': 'Okey', 
        'restart': 'Reiniciar', 
        'error': 'Error al actualizar', 
        'submitReport': 'Por favor envíe un informe y actualice la aplicación manualmente', 
        'here': 'aquí', 
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
        'fajr': 'الفجر',
        'sunrise': 'شروق',
        'dhuhr': 'الزره',
        'asr': 'عسير',
        'maghrib': 'المغرب',
        'isha': 'عيسبا',
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
        'donate': 'تبرع', //menu label
        'preferences': 'تفضيلات', //menu label
        'resetSettings': 'اعادة الضبط', //menu label
        'updateAvalible': 'تحديث متوفرة', 
        'downloadSoon': "سيبدأ التنزيل قريبا، سيتم إعلامك عندما يكون جاهزا.", 
        'updateDownloaded': 'تحديث تم التحديث', 
        'downloadFinished': 'تحديث تم تنزيله، أعد تشغيل Muezzin لتطبيقه.', 
        'ok': 'حسنا', 
        'restart': 'اعادة تشغيل', 
        'error': 'خطأ أثناء التحديث', 
        'submitReport': 'يرجى تقديم تقرير وتحديث التطبيق يدويا', 
        'here': 'هنا', 
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
        'donate': 'Donare', //menu label
        'preferences': 'Preferenze', //menu label
        'resetSettings': 'Ripristina le impostazioni', //menu label
        'updateAvalible': 'Aggiorna Disponibile', 
        'downloadSoon': "Il download inizierà presto, riceverai una notifica quando è pronto.", 
        'updateDownloaded': 'Aggiornamento scaricato', 
        'downloadFinished': 'Aggiornamento scaricato, riavviare Muezzin per applicarlo.', 
        'ok': 'Bene', 
        'restart': 'Riavviare', 
        'error': "Errore durante l'aggiornamento", 
        'submitReport': "Si prega di inviare un report e aggiornare l'app manualmente", 
        'here': 'qui', 
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
        'donate': 'Spenden', //menu label
        'preferences': 'Vorlieben', //menu label
        'resetSettings': 'Einstellungen zurücksetzen', //menu label
        'updateAvalible': 'Verfügbarkeiten aktualisieren.', 
        'downloadSoon': "Der Download beginnt bald, Sie werden benachrichtigt, wenn es fertig ist.", 
        'updateDownloaded': 'Update heruntergeladen', 
        'downloadFinished': "Update heruntergeladen, muezzin neu starten, um es anzuwenden", 
        'ok': 'Okay', 
        'restart': 'Neu starten', 
        'error': 'Fehler beim Aktualisieren.', 
        'submitReport': 'Bitte senden Sie einen Bericht und aktualisieren Sie die App manuell', 
        'here': 'hier', 
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
        'donate': 'Doneren', //menu label
        'preferences': 'Voorkeuren', //menu label
        'resetSettings': 'Reset instellingen', //menu label
        'updateAvalible': 'Update Beschikbaar', 
        'downloadSoon': "Download start binnenkort, je wordt op de hoogte gebracht wanneer het klaar is.", 
        'updateDownloaded': 'Update gedownload', 
        'downloadFinished': 'Update gedownload, herstart Muezzin om het toe te passen.', 
        'ok': 'Oke', 
        'restart': 'Herstarten', 
        'error': 'Fout tijdens het updaten', 
        'submitReport': 'Dien een rapport in en werk de app handmatig bij', 
        'here': 'hier', 
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
        'donate': 'Donera', //menu label
        'preferences': 'Preferenser', //menu label
        'resetSettings': 'Återställ inställningar', //menu label
        'updateAvalible': 'Uppdatera tillgängliga', 
        'downloadSoon': "Ladda ner startar snart, du blir underrättad när den är klar.", 
        'updateDownloaded': 'Uppdatering nedladdad', 
        'downloadFinished': 'Uppdatering nedladdad, starta om Muezzin för att tillämpa den.', 
        'ok': 'Okej', 
        'restart': 'Omstart', 
        'error': 'Fel vid uppdatering', 
        'submitReport': 'Vänligen skicka en rapport och uppdatera appen manuellt', 
        'here': 'här', 
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
        'donate': 'Donere', //menu label
        'preferences': 'Preferanser', //menu label
        'resetSettings': 'Tilbakestill innstillinger', //menu label
        'updateAvalible': 'Oppdater tilgjengelig', 
        'downloadSoon': "Last ned vil starte snart, du vil bli varslet når den er klar.", 
        'updateDownloaded': 'Oppdater nedlastet', 
        'downloadFinished': 'Oppdater nedlastet, start Muezzin på nytt for å bruke den.', 
        'ok': 'Greit', 
        'restart': 'Omstart', 
        'error': 'Feil under oppdatering', 
        'submitReport': 'Vennligst send inn en rapport og oppdater appen manuelt', 
        'here': 'her', 
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
        'donate': 'Donate', //menu label
        'preferences': 'Præferencer', //menu label
        'resetSettings': 'Nulstil indstillingerne', //menu label
        'updateAvalible': 'Opdatering til rådighed', 
        'downloadSoon': "Download vil starte snart, vil du blive underrettet, når den er klar.", 
        'updateDownloaded': 'Opdatering downloadet', 
        'downloadFinished': 'Opdatering downloadet, genstart muezzin for at anvende det.', 
        'ok': 'Okay', 
        'restart': 'Genstart', 
        'error': 'Fejl under opdatering.', 
        'submitReport': 'Indsend venligst en rapport og opdater appen manuelt', 
        'here': 'her', 
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
    },
}
