"use strick";
/* scroll */
const sectionEls = [...document.querySelectorAll("section")];

sectionEls.slice(3, -2).forEach((e) => e.classList.add("fade-up"));
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;
  sectionEls
    .slice(3, -2)
    .forEach((e) =>
      e.getBoundingClientRect().top < trigger
        ? e.classList.add("fade-up-show")
        : e.classList.remove("fade-up-show")
    );
});
/* scroll */

/* responsive menu */
/* mega_menu_responsive */
const responsiveMenuEl = document.querySelector(".responsive_menu");
const responsiveMenuTitleEls = [
  ...document.querySelectorAll(".responsive_menu .menu_items li"),
];
const getStartEl = document.querySelector(".get_started");

const menuIconEl = document.querySelector(".menu_icon");

const closeIconEls = [...document.querySelectorAll(".close_icon")];
const backIconEls = [...document.querySelectorAll(".back_icon")];

const megaMenuResponsiveEls = [
  ...document.querySelectorAll(".mega_menu_responsive"),
];

menuIconEl.addEventListener("click", () => {
  responsiveMenuEl.classList.add("position-left");
  getStartEl.classList.add("position-left");
});

closeIconEls.forEach((e) =>
  e.addEventListener("click", () => {
    megaMenuResponsiveEls.forEach((e) => e.classList.remove("position-left"));
    responsiveMenuEl.classList.remove("position-left");
    getStartEl.classList.remove("position-left");
  })
);

responsiveMenuTitleEls.forEach((e, index) =>
  e.addEventListener("click", () => {
    megaMenuResponsiveEls[index].classList.add("position-left");
  })
);
backIconEls.forEach((e, index) =>
  e.addEventListener("click", () => {
    megaMenuResponsiveEls[index].classList.remove("position-left");
  })
);
/* mega_menu_responsive */
/* responsive menu */

/* hero_floating */
const heroFloating = document.querySelector(".hero_floating");
const phoneFloating = document.querySelector(".phone_floating");

heroFloating.addEventListener("mousemove", (e) => {
  const rect = heroFloating.getBoundingClientRect();
  const x = e.clientX - rect.left; // X position inside the container
  const y = e.clientY - rect.top; // Y position inside the container

  const centerX = rect.width / 2; // Center X of the container
  const centerY = rect.height / 2; // Center Y of the container

  const rotateX = ((y - centerY) / centerY) * 10; // Rotate based on Y-axis
  const rotateY = ((x - centerX) / centerX) * -10; // Rotate based on X-axis

  phoneFloating.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
});

heroFloating.addEventListener("mouseleave", () => {
  // Reset the phone to its default position when the mouse leaves
  phoneFloating.style.transform = "rotateX(0) rotateY(0) translateZ(0)";
});
/* hero_floating */

/* questions */
const questionsBoxesEl = [...document.querySelectorAll(".questions_box .top")];
const SvgPlusEls = [...document.querySelectorAll(".plus")];
const SvgMinusEls = [...document.querySelectorAll(".minus")];
const questionsOpenEls = [...document.querySelectorAll(".questions_open")];

questionsBoxesEl.forEach((e, index) =>
  e.addEventListener("click", () => {
    SvgPlusEls.forEach((e, ind) =>
      ind == index ? e.classList.toggle("hide") : e.classList.remove("hide")
    );
    SvgMinusEls.forEach((e, ind) =>
      ind == index ? e.classList.toggle("hide") : e.classList.add("hide")
    );
    questionsOpenEls.forEach((e, ind) =>
      ind == index ? e.classList.toggle("show") : e.classList.remove("show")
    );
  })
);
/* questions */
