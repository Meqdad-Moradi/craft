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

///////////////////////////////////////////////////////////////////////
// filter the work section

// create the data
const datas = [
   {
      id: 1,
      img: "./images/branding.jpg",
      title: "Branding",
      subTitle: "Product Branding",
      category: "branding",
   },
   {
      id: 2,
      img: "./images/packag-design.jpg",
      title: "Graphics Design",
      subTitle: "Packaging Design",
      category: "Graphics Design",
   },
   {
      id: 3,
      img: "./images/product-branding.jpg",
      title: "Branding",
      subTitle: "Product Branding",
      category: "branding",
   },
   {
      id: 4,
      img: "./images/website-mockup.jpg",
      title: "Web Development",
      subTitle: "Beauty Care Web Apps",
      category: "Web Design",
   },
   {
      id: 5,
      img: "./images/mockup.jpg",
      title: "Graphics Design",
      subTitle: "Mocup Design",
      category: "Graphics Design",
   },
   {
      id: 6,
      img: "./images/mobile-app.jpg",
      title: "App Development",
      subTitle: "Mobile Apps Design",
      category: "Marketing",
   },
];

// select and manipulating data
const worksCard = document.querySelector("#works-card");
worksCard.innerHTML = "";

const readDatas = () => {
   const works = datas
      .map((item) => {
         const { id, img, title, subTitle, category } = item;
         return `
      <article class="card">
         <div class="img-box">
            <img
               src=${img}
               alt=${title}
            />
         </div>
         <div class="details">
            <p>${title}</p>
            <h3>${subTitle}</h3>
         </div>
      </article>`;
      })
      .join(" ");

   worksCard.innerHTML = works;
};

// 

window.addEventListener('DOMContentLoaded', ()=>{
   readDatas()
})