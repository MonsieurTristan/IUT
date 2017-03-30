var seconde=55;
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