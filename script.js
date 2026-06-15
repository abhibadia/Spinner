const words = ["fan", "sound engineer", "producer", "rapper", "singer", "innovator", "creator", "rave-goer", "party animal"];

const typingWord = document.getElementById("typing-word");

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingWord.textContent = currentWord.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    typingWord.textContent = currentWord.substring(0, letterIndex + 1);
    letterIndex++;
  }

  let speed = isDeleting ? 70 : 120;

  if (!isDeleting && letterIndex === currentWord.length) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();