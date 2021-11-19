var time =120;
var score = 0;
var base = 7;
var base2 = 5;
const moles = [0,0,0,0,0,0,0,0,0]

var timer2 = setInterval(function(){
  time -= 1;
  document.getElementById("timer").innerHTML = Math.ceil(time/2);
  if(time == 0){
    clearInterval(timer2);
    for(var i = 1; i < 10; i++){
      document.getElementById(i).onclick = null;
    }
    alert('Game Over! Please use the "Reset Game" button to restart.')
    return;
  }
  moleDown();
  moleUp();
}, 500);

function moleUp(){
  for(var i = 1; i<10; i++){
    h = Math.floor(Math.random()*100);
    if(h % base == 0 && moles[i-1] == 0){ 
      document.getElementById(i).src = "mole.png";
      document.getElementById(i).onclick = function(){
        score += 1;
        document.getElementById("score").innerHTML = score;
        this.src = "hole.png";
        this.onclick=null;
      }
      moles[i-1] = 1
    }
  }  
}

function moleDown(){
  for(var i = 1; i<10; i++){
    h = Math.floor(Math.random()*100);
    // h=6;
    if(h % base2 == 0 && moles[i-1] == 1){
      document.getElementById(i).src = "hole.png"
      document.getElementById(i).onclick = null;
      moles[i-1] = 0
    }
  }  
}

function resetClicked(){
  document.getElementById("timer").innerHTML = 60;
  time = 120;
  score = 0;
  document.getElementById("score").innerHTML = 0;
  for(var i = 1; i < 10; i++){
    document.getElementById(i).src = "hole.png"
  }
  clearInterval(timer2);
  timer2 = setInterval(function(){
    time -= 1;
    document.getElementById("timer").innerHTML = Math.ceil(time/2);
    if(time == 0){
      clearInterval(timer2);
      for(var i = 1; i < 10; i++){
        document.getElementById(i).onclick = null;
      }
      alert('Game Over! Please use the "Reset Game" button to restart.')
      return;
    }
    moleDown();
    moleUp();
  }, 500);
}