document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "fan",
    "sound engineer",
    "producer",
    "rapper",
    "singer",
    "innovator",
    "creator",
    "rave-goer",
    "party animal"
  ];

  const typingWord = document.getElementById("typing-word");
  const typingArtist = document.getElementById("typing-artist");

  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!typingWord) return;

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

  const artistWord = "Drake";
  let artistLetterIndex = 0;

  function typeEffectArtist() {
    if (!typingArtist) return;

    if (artistLetterIndex < artistWord.length) {
      typingArtist.textContent = artistWord.substring(0, artistLetterIndex + 1);
      artistLetterIndex++;

      setTimeout(typeEffectArtist, 120);
    }
  }

  typeEffect();
  typeEffectArtist();
});

function fitBracketToScreen() {
  const bracketFit = document.querySelector(".bracket-fit");
  const bracketBoard = document.querySelector(".bracket-board");

  if (!bracketFit || !bracketBoard) return;

  const baseWidth = 1700;
  const baseHeight = 1000;

  const availableWidth = bracketFit.clientWidth;

  // Shrinks the bracket if needed, but does not enlarge it past original size
  const scale = Math.min(1, availableWidth / baseWidth);

  const scaledWidth = baseWidth * scale;
  const scaledHeight = baseHeight * scale;

  bracketBoard.style.transform = `scale(${scale})`;
  bracketBoard.style.left = `${(availableWidth - scaledWidth) / 2}px`;

  bracketFit.style.height = `${scaledHeight}px`;
}

window.addEventListener("load", fitBracketToScreen);
window.addEventListener("resize", fitBracketToScreen);