<<<<<<< HEAD
var seconde=0;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  var seconde=0;
=======
window.onload(){
>>>>>>> ee2d0e6541b2976e07c03646c05c3c4316491981
  var seconde=55;
  var minute=0;
  function Timer() {
    setInterval(flashText, 1000);
  }
>>>>>>> b847f44c4a256f49e7c315737d5ac8c8aa3ff170

var seconde=0;
var minute=0;

<<<<<<< HEAD
  function flashText() {
    if(seconde==60){
      minute++;
      seconde =0;
    }
    var elem = document.getElementById("timer").innerHTML="<p class=timer>"+minute+" min "+seconde+" s</p>";
    seconde +=1;
  }
=======

function Timer() {
  setInterval(flashText, 1000);
}

function flashText() {
  if(seconde==60){
    minute++;
    seconde =0;
  }
  var elem = document.getElementById("timer").innerHTML="<p class=timer>"+minute+" min "+seconde+" s</p>";
  seconde +=1;
}

Timer();
>>>>>>> ee2d0e6541b2976e07c03646c05c3c4316491981
