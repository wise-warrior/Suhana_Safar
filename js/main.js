// all elements of html to processed in js being accessed -->
let cityouter = document.querySelector('.city-outer');
let cityinner = document.querySelector('.city-inner');
let gamestarter = document.querySelector('.game-start');
let car = document.querySelector('.car');
let myaudio = document.getElementById('myaudio');
let seconds = document.getElementById('counter').textContent;
let cloud = document.querySelector('.cloud');

// Game starter Countdown logic --> we make a setinterval func where we decrement the Countdown
// and as soon as its 0 we remove the countdown box !
let countdown = setInterval(function(){
    seconds--;
    document.getElementById('counter').textContent = seconds;
    if (seconds <= 0){
        clearInterval(countdown);
        gamestarter.remove();
        cloud.classList.add('cloudanimation');
    }
},1000);

// this set interval func() does day-night conversion after every 8 secs -->
setInterval(function(){
    cityouter.classList.toggle('daytonight');
}, 8000);

// key press controls -->
document.addEventListener('keypress' , keycontrol);

// this var decides whether to on the headlights or not
let light = false;
// here we make an array where we store the 2 pics of car with headlights on and off
let cararr = ['Pictures/car_off.png' , 'Pictures/car_on.png'];

//this var decides whether to play music or not
let music = false;

// key control func() logic -->
function keycontrol (e){
    // space bar press = 32 : if space bar pressed then car will start moving 
    // and on again pressing it car 'll stop !!
   if (e.keyCode == 32){
        cityinner.classList.toggle('cityanimation');
        car.classList.toggle('caranimation');
   }
   // key = L (code : 108) : if L pressed headlights will Switch On and on again pressing 
   // headlights will Switch Off !!
   if (e.keyCode == 108){
        if(light){
            car.setAttribute('src' , cararr[0]);
            light = false;
        }
        else{
            car.setAttribute('src' , cararr[1]);
            light = true;
        }
   }
   // key = M (code : 109) : If M pressed music will start playing and on again pressing 
   // it music will stop !!
   if (e.keyCode == 109){
        if (music){
            pausemusic();
            music = false;
        }
        else{
            playmusic();
            music = true;
        }
   }
}

// func() to play music -->
function pausemusic (){
    myaudio.pause();
}

//func() to pause music -->
function playmusic (){
    myaudio.play();
}
