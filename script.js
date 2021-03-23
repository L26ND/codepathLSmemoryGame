//Global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
// Sound Synthesis Functions
const freqMap = {
  1: 205,
  2: 220,
  3: 280,
  4: 315,
  5: 350,
  6: 410
}
//Global Variables
var pattern = [3, 4, 2, 4, 5, 3, 4, 1];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistakes = 0;
//var time = 10;

var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 200; //how long to pause in between clues

function startGame(){
  //initialize game variables;
  progress = 0;
  clueHoldTime = 1000;
  cluePauseTime = 200;
  gamePlaying = true;
  mistakes = 0;
  for(let i=0; i<8; i++){
    var n = Math.floor(Math.random() * 6)+1;
    pattern[i]=n;
  }
  console.log(pattern);
  document.getElementById("status1").classList.remove("hidden");
  document.getElementById("status2").classList.add("hidden");
  document.getElementById("status3").classList.add("hidden");
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  

}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  //clearInterval();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " for " + clueHoldTime + " + " +cluePauseTime + " ms in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  //setInterval(time--, 1000);
}
function guess(btn){
  console.log("user guessed: " + btn);
  //console.log("time: "+ time);
  if(!gamePlaying){
    return; 
  }
  // add game logic here
  //if(time>=0){
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      if(progress == 7){
        winGame();
      }
      else{
        progress++;
        clueHoldTime -= Math.floor(500/(progress+1))*(clueHoldTime>250);//decrease the hold time, minimum time=50ms
        cluePauseTime -= Math.floor(90/(progress+1))*(cluePauseTime>80);//decrease the pause time, minimum time=50ms
        //time=10;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    mistakes++;
    strike();
    playClueSequence();

  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
function strike(){
  if(mistakes==1){
    document.getElementById("status1").classList.add("hidden");
    document.getElementById("status2").classList.remove("hidden");
  }
  else if(mistakes==2){
    document.getElementById("status2").classList.add("hidden");
    document.getElementById("status3").classList.remove("hidden");
  }
  else{
    loseGame();
  }
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)