"use strict";

const blurPic = document.querySelector(".blurPic");
const percentageDisplay = document.querySelector(".percentageDisplay");
let startOpacity = 0;
const endOpacity = 0.9;
const myInterval = setInterval(function () {
  startOpacity += 0.01;
  percentageDisplay.innerHTML = `${Math.round(startOpacity.toFixed(2) * 100)}%`;
  blurPic.style.opacity = `${startOpacity}`;

  if (startOpacity > endOpacity) {
    clearInterval(myInterval);
    percentageDisplay.classList.add("hidden");
  }
}, 50);
