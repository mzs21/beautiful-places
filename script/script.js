"use strict";
var bodyTag = document.querySelector('body');
bodyTag.addEventListener('mousemove', function (e) {
    bodyTag.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
});
