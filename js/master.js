// @ts-nocheck
//local storge checks-
//local storage check color option
let mainColorLocal = localStorage.getItem("color-option");
if (mainColorLocal !== null) {
  document.documentElement.style.setProperty("--main-color", mainColorLocal);
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    // add active class on li element that its data-color === local storage (selected) color
    if (element.dataset.color === mainColorLocal) {
      element.classList.add("active");
    }
  });
}
//random bg optioin
let backgrounOption = true;
//variable to handle  background interval (set or clear)
let backgroundOptInterval;
// local storage check background option
let backgroundLocalOption = localStorage.getItem("backgroundOption");
if (backgroundLocalOption !== null) {
  if (backgroundLocalOption === "true") {
    backgrounOption = true;
  } else {
    backgrounOption = false;
  }
  // Handle active class for background option in local storage
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  //add active class to clicked element in local storage
  if (backgroundLocalOption === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

//Toggle spin class on icon
document.querySelector(".toggle-settings i").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};
//Switch colors
//sellect colors li's
const colorsLi = document.querySelectorAll(".option-box li");
//loop on colors list ass array
colorsLi.forEach((li) => {
  //click on every listitem
  li.addEventListener("click", (e) => {
    //declear the sellected color
    let sellectedColor = e.target.dataset.color;
    //set color on root in css
    document.documentElement.style.setProperty("--main-color", sellectedColor);
    //-- set color on local storage in New bname (color-option)1st step to local storage
    localStorage.setItem("color-option", sellectedColor);
    //remove active class from all childrens
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //add active claas on target itself
    e.target.classList.add("active");
  });
});
// switcher Random Background option (yes / no)
let randomBackEl = document.querySelectorAll(".random-backgrounds span");
// Loop on every span with on click function
randomBackEl.forEach((span) => {
  span.onclick = function (e) {
    // remove active class from all
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add active class on clicked child
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgrounOption = true;
      randomizeImags();
      localStorage.setItem("backgroundOption", true);
    } else {
      backgrounOption = false;
      clearInterval(backgroundOptInterval);
      localStorage.setItem("backgroundOption", false);
    }
  };
});
//Randomize Background images Logic
//Sellect landing page
/** @type {HTMLDivElement | null} */
let landingPage = document.querySelector(".landing-page");
//Get images array
let imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// initialize function to randomize Bg depends on (true-false "yes - No") optional:
// //random bg option
// let backgrounOption = true;
// //variable to handle  background interval (set or clear)
// let backgroundOptInterval;
function randomizeImags() {
  if (backgrounOption === true) {
    backgroundOptInterval = setInterval(() => {
      // get random number inside set interval
      let randomNumber = Math.floor(Math.random() * imagesArray.length);
      //Change background image url Randomly inside set interval
      if (landingPage) {
        landingPage.style.backgroundImage = `url("images/${imagesArray[randomNumber]}")`;
      }
    }, 10000);
  }
}
randomizeImags();
// select skills selector
let ourSkills = document.querySelector(".skills");
