function touches(e){
    var x = e.touches ? e.touches[0].clientX : e.clientX, 
            y = e.touches ? e.touches[0].clientY : e.clientY;
  var w = window.innerWidth / 2;
  var h = window.innerHeight / 2;
  
  var l = -(x - w) / (w / 10) - 10;
  var t = -(y - h) / (h / 10) - 10;
      //10 / (y - (h / 2)) * 100;             
//   console.log(y + ' | ' + h + ' | ' + t);
  
    TweenMax.to($('.bgimg'), 2.5, {
        top: t + "%",
        left: l + "%"
    });
    
}

$(document).ready(function() {
    window.addEventListener("mousemove", touches);
    window.addEventListener("touchstart", touches);
    window.addEventListener("touchmove", touches);
});


































