const navLinks = document.querySelectorAll(".nav-list li a");

navLinks.forEach((link) =>
   link.addEventListener("click", (e) => {
      navLinks.forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
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
const faqTitles = [...document.querySelectorAll("#faq-body .details")];

faqTitles.forEach((faq, i) =>
   faq.addEventListener("click", (e) => {
      faqTitles.forEach((faq) => faq.classList.remove("active"));
      e.currentTarget.classList.toggle("active");
   })
);
