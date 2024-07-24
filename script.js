var currentAudio = null;
var seekbar = document.getElementById('seekbar');
var currentTimeDisplay = document.getElementById('currentTime');
var playpause_btn = document.querySelector(".playpause-track");
//var playButton = document.getElementById('play');

function playy(audio) {
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-4x"></i>';
    }
    currentAudio=audio;
    if (audio.paused) {
        audio.play();
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-4x"></i>';
    } else {
        audio.pause();
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-4x"></i>';
    }

    audio.addEventListener('timeupdate', function () {
        var value = (audio.currentTime / audio.duration) * 100;
        seekbar.value = value;
    });

    seekbar.addEventListener('input', function () {
        var seekTo = audio.duration * (seekbar.value / 100);
        audio.currentTime = seekTo;
    });
    audio.addEventListener('timeupdate', function () {
        var minutes = Math.floor(audio.currentTime / 60);
        var seconds = Math.floor(audio.currentTime % 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        currentTimeDisplay.textContent = minutes + ':' + seconds;
    }); 
    
}

document.getElementById("S1").addEventListener("click", function () {
    let audio = document.getElementById('audio1');
    playy(audio);
});
document.getElementById("S2").addEventListener("click", function () {
    let audio = document.getElementById('audio2');
    playy(audio);
});

document.getElementById("S3").addEventListener("click", function () {
    let audio = document.getElementById('audio3');
    playy(audio);
});

document.getElementById("S4").addEventListener("click", function () {
    let audio = document.getElementById('audio4');
    playy(audio);
});

playpause_btn.addEventListener('click',function(){
    if (currentAudio) {
        if (currentAudio.paused) {
            currentAudio.play();
            playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-4x"></i>';
        } else {
            currentAudio.pause();
            playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-4x"></i>';
        }
    } else {
        let audio = document.getElementById('audio1');
        playy(audio);
    }

});
