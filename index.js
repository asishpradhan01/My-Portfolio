function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icons = document.querySelector(".hamburger-icons")
    menu.classList.toggle("open")
    icons.classList.toggle("open")
}

const display = document.querySelector(".font-p")
const words = ["programmer", "Developer", "Web Developer", "Freelancer", "Software Enginner"];

let wordIndex = 0;
let charIndex = 0;
let isDel = false;

function typeEffect() {
    const currentword = words[wordIndex];
    const currentChar = currentword.substring(0, charIndex);
    display.textContent = currentChar;
   
    if(!isDel && charIndex < currentword.length) {
        charIndex++;
        setTimeout(typeEffect, 200)
    } else if(isDel && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
        isDel = !isDel;
        wordIndex = !isDel ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
  
}

typeEffect()