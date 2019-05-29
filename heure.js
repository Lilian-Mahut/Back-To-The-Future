// horaire
var date = new Date();
var month = date.getMonth();
var day = date.getDay();
var heure = date.getHours();
var minute = date.getMinutes();
var seconde = date.getSeconds();
var f = function() {
  if(seconde<59)
    seconde++;
  else  {
    minute++;seconde=00;
  }
  if(minute>59) {
    heure++;minute=0;
  }
document.getElementById("month").innerHTML = month;
document.getElementById("day").innerHTML = day;
document.getElementById("hour").innerHTML = heure;
document.getElementById('minutes').innerHTML = minute;
setTimeout(ff, 1000);
}
setTimeout(f, 1000);

// clignotement (div: tilt)
var clignotement = function(){ 
  if (document.getElementById('tilt').style.visibility=='visible'){ 
     document.getElementById('tilt').style.visibility='hidden'; 
  } 
  else{ 
  document.getElementById('tilt').style.visibility='visible'; 
  } 
}; 

periode = setInterval(clignotement, 800); 
