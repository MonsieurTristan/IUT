var secondeN=0;
var minuteN=0;
var secondeB=0;
var minuteB=0;

var tn;
var tb;

var elem = document.getElementById("timerN").innerHTML="<p> Temps Pions Noirs "+minuteN+" min "+secondeN+" s</p>";
var elem = document.getElementById("timerB").innerHTML="<p> Temps Pions Blancs "+minuteB+" min "+secondeB+" s</p>";

function TimerNoir() {
  tn=setInterval(flashText, 1000);
}

function flashText() {
  if(secondeN==60){
    minuteN++;
    secondeN =0;
  }
  var elem = document.getElementById("timerN").innerHTML="<p> Temps Pions Noirs "+minuteN+" min "+secondeN+" s</p>";

  secondeN +=1;
}

function TimerBlanc() {
  tb=setInterval(flashText2, 1000);
}

function flashText2() {
  if(secondeB==60){
    minuteB++;
    secondeB =0;
  }
  var elem = document.getElementById("timerN").innerHTML="<p> Temps Pions Blancs "+minuteB+" min "+secondeB+" s</p>";

  secondeB +=1;
}

TimerNoir();




