const navLinks = document.querySelectorAll(".nav-list li a");

navLinks.forEach((link) =>
   link.addEventListener("click", (e) => {
      navLinks.forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
   })
);

// fixed header
const nav = document.querySelector("#nav");

window.addEventListener("scroll", (e) => {
   const scrollY = window.scrollY;

   if (scrollY > 0) {
      nav.classList.add("fixed");
   } else {
      nav.classList.remove("fixed");
   }
});

// video show & hide
const videoContainer = document.querySelector("#video-container");
const playBtn = document.querySelector("#play-btn");

playBtn.addEventListener("click", () => {
   videoContainer.classList.add("show");
});

videoContainer.addEventListener("click", (e) => {
   if (e.target !== e.currentTarget) {
      return;
   } else {
      e.currentTarget.classList.remove("show");
   }
});
