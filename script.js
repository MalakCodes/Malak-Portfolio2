// ===== Show More Buttons =====
const buttons = document.querySelectorAll('.more-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const text = button.previousElementSibling;
    if(text.style.display === 'block') {
      text.style.display = 'none';
      button.textContent = 'Show more';
    } else {
      text.style.display = 'block';
      button.textContent = 'Show less';
    }
  });
});

// ===== Animated Text =====
const phrases = [
  "I'm Malak Alotaibi.",
  "Computer Science Student.",
  "Web Developer, Ai specialist."
];

const animatedText = document.getElementById("animated-text");

let currentPhrase = 1;
let currentChar = 1;
let isDeleting = false;
let typingSpeed = 30;
let deletingSpeed = 20;

function type() {
  const fullText = phrases[currentPhrase];
  
  if (isDeleting) {
    animatedText.textContent = fullText.substring(0, currentChar--);
  } else {
    animatedText.textContent = fullText.substring(0, currentChar++);
  }

  if (!isDeleting && currentChar === fullText.length) {
    setTimeout(() => { isDeleting = true; type(); }, 500); // أقل وقت انتظار
    return;
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

type();

// ===== Scroll Fade-in =====
function handleFadeIn() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50 && !el.classList.contains('show')) {
      el.classList.add('show');
    }
  });
}

// ===== Header Shadow =====
function handleHeader() {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
}

// ===== Scroll Event =====
window.addEventListener('scroll', () => {
  handleFadeIn();
  handleHeader();
});

// ===== Initialize on Load =====
window.addEventListener('load', () => {
  handleFadeIn();
  handleHeader();
});
// Toggle dropdowns
const dropButtons = document.querySelectorAll('.drop-btn');

dropButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'grid' ? 'none' : 'grid';
  });
});
