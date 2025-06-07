const text = "Create jouw Paradise!";
const typingElement = document.getElementById("typing");

let i = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting) {
    typingElement.textContent = text.substring(0, i + 1);
    i++;

    if (i === text.length) {
      // Pause at full text
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 2000); // pause duration
    } else {
      setTimeout(typeEffect, 100); // typing speed
    }
  } else {
    typingElement.textContent = text.substring(0, i - 1);
    i--;

    if (i === 0) {
      isDeleting = false;
      setTimeout(typeEffect, 500); // pause before retyping
    } else {
      setTimeout(typeEffect, 50); // deleting speed
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
