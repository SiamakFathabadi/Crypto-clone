'use strick';
const heroFloating = document.querySelector('.hero_floating');
const phoneFloating = document.querySelector('.phone_floating');

heroFloating.addEventListener('mousemove', (event) => {
    const rect = heroFloating.getBoundingClientRect();
    const x = event.clientX - rect.left; // X position inside the container
    const y = event.clientY - rect.top;  // Y position inside the container

    const centerX = rect.width / 2; // Center X of the container
    const centerY = rect.height / 2; // Center Y of the container

    const rotateX = ((y - centerY) / centerY) * 10; // Rotate based on Y-axis
    const rotateY = ((x - centerX) / centerX) * -10; // Rotate based on X-axis

    phoneFloating.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  });

  heroFloating.addEventListener('mouseleave', () => {
    // Reset the phone to its default position when the mouse leaves
    phoneFloating.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
  });

