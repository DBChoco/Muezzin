window.api.handle('play', msg => {
    athan.play();
})

window.api.handle('stop', msg => {
    athan.pause();
    athan.load();
    console.log("SDFSDFQFS")
})

var athan = new Audio('../../ressources/audio/azan3.mp3');
var dua = new Audio('../../ressources/audio/dua.mp3');
athan.addEventListener('ended', function(){
    dua.play();
})


/*

var audioInterval;
var progressBar;


window.addEventListener('DOMContentLoaded', () => { 
    progressBar = document.getElementById("progress-bar");
    playButton.addEventListener("click", function(){
        athan.play()
        setInterval(refreshPB, 1000);

    });
    stopButton.addEventListener("click", function(){
        athan.stop()
        if (audioInterval != undefined){
            clearInterval(audioInterval);
        }
        
    });
})

function playAthan(athan){
    if (athan.playing()){
        athan.stop();
        athan.play();
    }
    else{
        athan.play();
    }
}

function refreshPB(){
    var total = athan.duration();
    var porcent = (athan.seek() / total )* 100;
    progressBar.ariaValueNow = porcent;
    console.log(porcent)
    progressBar.style.width = porcent + "%"
}*/