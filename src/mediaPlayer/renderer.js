

var athan = new Audio('../../ressources/audio/azan3.mp3');
var dua = new Audio('../../ressources/audio/dua.mp3');
var playDua = true;
var interval;

var volume;

loadSettings()

setUpHandlers()

async function loadSettings(){
    volume = await window.api.getFromStore('volume', 50)
    athan.volume = volume/100
    dua.volume = volume/100
}

function setUpHandlers(){
    window.api.handle('volume-reply', msg => {
        athan.volume = msg/100
        dua.volume = msg/100
    })
    window.api.handle('play', msg => {
        if (!athan.paused || !dua.paused){
            stop()
        }
        playDua = msg.dua.enabled
        athan = new Audio(msg.adhan.path);
        setUpAdhanListeners()
        athan.play();
    })

    window.api.handle('playFajr', msg => {
        if (!athan.paused || !dua.paused){
            stop()
        }
        playDua = msg.dua.enabled
        athan = new Audio(msg.adhanFajr.path);
        setUpAdhanListeners()
        athan.play();
    })



    window.api.handle('stop', msg => {
        stop()
    })

    window.api.send('startup-request');
    window.api.handle('startup-reply', msg => {
        if (msg == true){
            var bismillah = new Audio('../../ressources/audio/Bismillah - Fatih Sefaragic.mp3');
            bismillah.volume = volume/100;
            bismillah.play()
        }
    })
}

function stop(){
    athan.pause();
    athan.load();
    dua.pause();
    dua.load();
}

function setUpAdhanListeners(){
    athan.addEventListener('ended', function(){
        window.api.send('progress-request', 0)
        if (playDua){
            dua.play();
        }
        clearInterval(interval)
    })

    athan.addEventListener('play', function(){
        loadSettings()
        window.api.send('progress-request', progress())
        interval = setInterval(function(){
            window.api.send('progress-request', progress())
        },1000)
    })
    athan.addEventListener('abort', function(){
        window.api.send('progress-request', 0)
        clearInterval(interval)
    })
}

function progress(){
    return (athan.currentTime /athan.duration)*100
}