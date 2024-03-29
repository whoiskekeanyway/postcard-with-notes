const toggleBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  //burger animation
  burger.classList.toggle("toggle");
});

// Function to dynamically change the date

const footerYear = document.querySelectorAll(".year");
footerYear.forEach((copyright) => {
  copyright.innerHTML = new Date().getFullYear();
});

function showOnHover(trigger, element) {
  trigger.onmouseover = function () {
    element.style.display = "block";
    trigger.style.display = "none";
  };
  element.onmouseout = function () {
    element.style.display = "none";
    trigger.style.display = "block";
  };
}

let trigger = document.getElementById("trigger");
let element = document.getElementById("element-to-show");
showOnHover(trigger, element);

// Back to top button

//Get the button
var backToTopBtn = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".icon",
    //   markers: true,
  },
});

tl.from(".icon", { x: -200, opacity: 0, duration: 1 })
  .from(".nav-list", { y: -50, opacity: 0, duration: 0.8 })
  .from(".extra", { x: 100, opacity: 0, duration: 1 })
 // .from("footer", { y: 10, opacity: 0, duration: 1.5 });
