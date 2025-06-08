const texts = ["Create jouw Paradise!", "Overleef en werk samen!", "Heb plezier met je vrienden!"];
const typingSpeed = 100;
const deletingSpeed = 60;
const pauseTime = 1500;

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.getElementById("typing");

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typedText.textContent = currentText.substring(0, charIndex--);
  } else {
    typedText.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => isDeleting = true, pauseTime);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

type();
