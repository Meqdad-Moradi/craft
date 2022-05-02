const navLinks = document.querySelectorAll(".nav-list li a");

navLinks.forEach((link) =>
   link.addEventListener("click", (e) => {
      navLinks.forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
   })
);
