var seconde=0;
var minute=0;

var elem = document.getElementById("timerN").innerHTML="<p> Temps Pions Noirs "+minute+" min "+seconde+" s</p>";
var elem = document.getElementById("timerB").innerHTML="<p> Temps Pions Blancs "+minute+" min "+seconde+" s</p>";

function Timer() {
  setInterval(flashText, 1000);
}

  function flashText() {
    if(seconde==60){
      minute++;
      seconde =0;
    }
    var elem = document.getElementById("timerN").innerHTML="<p> Temps Pions Noirs"+minute+" min "+seconde+" s</p>";
    var elem = document.getElementById("timerB").innerHTML="<p> Temps Pions Blancs"+minute+" min "+seconde+" s</p>";
    seconde +=1;
  }

 

  Timer();
