"use strick";
/* hero_floating */
const heroFloating = document.querySelector(".hero_floating");
const phoneFloating = document.querySelector(".phone_floating");

heroFloating.addEventListener("mousemove", (event) => {
  const rect = heroFloating.getBoundingClientRect();
  const x = event.clientX - rect.left; // X position inside the container
  const y = event.clientY - rect.top; // Y position inside the container

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

// console.log(questionsBoxesEl);
// console.log(SvgPlusEls);
// console.log(SvgMinusEls);

questionsBoxesEl.forEach((e, index) =>
  e.addEventListener("click", () => {
    SvgPlusEls.forEach(
      (e,ind) =>(ind == index)?e.classList.toggle('hide'):e.classList.remove('hide') 
    );
    SvgMinusEls.forEach(
      (e,ind) =>(ind == index)?e.classList.toggle('hide'):e.classList.add('hide') 
    );
    questionsOpenEls.forEach(
      (e,ind) =>(ind == index)?e.classList.toggle('show'):e.classList.remove('show') 
    );
  })
);
/* questions */

/* scroll */
const sectionEls = [...document.querySelectorAll("section")];

console.log(sectionEls)
console.log(sectionEls.slice(2,-2))
sectionEls.slice(3).forEach(e=> console.log(e.children)) 



// divEls.forEach((e) => ((e.getBoundingClientRect().top < trigger) e.classList.add('show')));
// window.addEventListener('scroll', ()=>{
//     const trigger = window.innerHeight*0.8;
//     divEls.forEach((e) => ((e.getBoundingClientRect().top < trigger) ? e.classList.add('show') : e.classList.remove('show')));
// if (window.innerHeight*0.8 > divEls.forEach((e) => e.getBoundingClientRect().top)) {

// }
// })