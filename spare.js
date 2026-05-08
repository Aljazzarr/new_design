// ////*** Start Local Storage Section ***////

// /**
//  * 1. PERSISTENT SETTINGS (Local Storage)
//  * Apply saved color preference if available
//  */
// const savedColor = localStorage.getItem("color_option");
// if (savedColor !== null) {
//   // Apply saved color to CSS root variable
//   document.documentElement.style.setProperty("--special-color", savedColor);

//   // Update UI: mark the saved color as active
//   document.querySelectorAll(".colors-list li").forEach((li) => {
//     li.classList.remove("active");
//     if (li.dataset.color === savedColor) {
//       li.classList.add("active");
//     }
//   });
// }

// /**
//  * Load saved background option (yes/no) from localStorage
//  */
// let savedBackgroundLocalItem = localStorage.getItem("background_option");
// let backgroundOption = savedBackgroundLocalItem === "no" ? false : true;

// ////*** End Local Storage Section ***////

// ////*** SETTINGS PANEL TOGGLE ***////

// const toggleBtn = document.querySelector(".toggle-settings .fa-gear");
// const settingsBox = document.querySelector(".setting-box");

// if (toggleBtn && settingsBox) {
//   toggleBtn.onclick = function () {
//     this.classList.toggle("fa-spin"); // animate the gear icon
//     settingsBox.classList.toggle("open"); // show/hide settings box
//   };
// }

// ////*** COLOR SWITCHER ***////

// const colorsList = document.querySelectorAll(".colors-list li");

// colorsList.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     const selectedColor = e.currentTargettarget.dataset.color;

//     // Apply selected color
//     document.documentElement.style.setProperty(
//       "--special-color",
//       selectedColor,
//     );

//     // Save to localStorage
//     localStorage.setItem("color_option", selectedColor);

//     // Update active class
//     e.target.parentElement.querySelectorAll(".active").forEach((el) => {
//       el.classList.remove("active");
//     });
//     e.target.classList.add("active");
//   });
// });

// ////*** RANDOM BACKGROUND SWITCHER ***////

// const randomBackgroundSpans = document.querySelectorAll(
//   ".random-backgrounds span",
// );
// let backgroundInterval;

// // Update UI based on saved background option
// if (!backgroundOption) {
//   randomBackgroundSpans.forEach((span) => {
//     span.classList.remove("active");
//     if (span.dataset.background === "no") {
//       span.classList.add("active");
//     }
//   });
// }

// randomBackgroundSpans.forEach((span) => {
//   span.addEventListener("click", (event) => {
//     // Remove active class from siblings
//     event.target.parentElement.querySelectorAll(".active").forEach((el) => {
//       el.classList.remove("active");
//     });
//     event.target.classList.add("active");

//     // Update background option
//     if (el.dataset.background === "yes") {
//       backgroundOption = true;
//       localStorage.setItem("background_option", "yes");
//       randomizeBackground();
//     } else {
//       backgroundOption = false;
//       localStorage.setItem("background_option", "no");
//       clearInterval(backgroundInterval);
//     }
//   });
// });

// ////*** BACKGROUND CHANGER (Landing Page) ***////

// const landingPage = document.querySelector(".landing-page");
// const imgsArray = ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg"];

// function randomizeBackground() {
//   if (backgroundOption) {
//     clearInterval(backgroundInterval); // clear any previous interval
//     backgroundInterval = setInterval(() => {
//       const randomNumber = Math.floor(Math.random() * imgsArray.length);
//       if (landingPage) {
//         landingPage.style.backgroundImage = `url("images/${imgsArray[randomNumber]}")`;
//       }
//     }, 10000); // change every 10 seconds
//   }
// }

// // Initialize background changer on page load
// randomizeBackground();
