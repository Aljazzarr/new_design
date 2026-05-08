// @ts-nocheck
//local storge checks-
//local storage check color option
let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    // add active class on li element that its data-color === local storage (selected) color
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
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
// switch Random Background option (yes / no)
let randomBackEl = document.querySelectorAll(".random-backgrounds span");
// Loop on every span with on click function
randomBackEl.forEach((span) => {
  //click on span
  span.onclick = function () {
    this.parentElement.querySelector(".active").classList.remove("active");
    this.classList.add("active");
  };
});
//Sellect landing page
/** @type {HTMLDivElement | null} */
let landingPage = document.querySelector(".landing-page");
//Get images array
let imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
setInterval(() => {
  // get random number inside set interval
  let randomNumber = Math.floor(Math.random() * imagesArray.length);
  //Change background image url Randomly inside set interval
  if (landingPage) {
    landingPage.style.backgroundImage = `url("images/${imagesArray[randomNumber]}")`;
  }
}, 10000);
