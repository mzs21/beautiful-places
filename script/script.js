"use strict";
var bodyTag = document.querySelector('body');
bodyTag.addEventListener('mousemove', function (e) {
    var color1 = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
    var color2 = "rgb(" + e.offsetY + "," + e.offsetX + ", 40)";
    bodyTag.style.backgroundImage = 'linear-gradient(100deg,' + color1 + ',red,orange,yellow, ' + color2 + ', green,blue,indigo,violet)';
    // bodyTag.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
});
