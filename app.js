// manipulate active status on buttons
const activeStatus = (myTarget, current) => {
   myTarget.forEach((a) => a.classList.remove("active"));
   current.classList.add("active");
};
// header menu
const navLinks = document.querySelectorAll(".nav-list li a");
navLinks.forEach((link) =>
   link.addEventListener("click", () => {
      activeStatus(navLinks, link);
   })
);

// filter works
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) =>
   btn.addEventListener("click", () => {
      activeStatus(filterBtns, btn);
   })
);

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

// FAQ
const faqTitles = document.querySelectorAll("#faq-body .details");

faqTitles.forEach((faq, i) =>
   faq.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");
   })
);
