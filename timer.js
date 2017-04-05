<<<<<<< HEAD
  var seconde=0;
=======
window.onload(){
  var seconde=55;
>>>>>>> 79c9eaa2b9587cfc28a55c3de3f6e21fd318d185
  var minute=0;
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
}