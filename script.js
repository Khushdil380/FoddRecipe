// Sticky Navbar Logic (Optional Enhancement)
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  


  let slideIndex = 0;

  function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    slides.forEach((slide) => {
      slide.style.display = "none"; // Hide all slides
    });
  
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1; // Reset to the first slide
    }
  
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
  }
  
  // Start the slideshow
  showSlides();

  









// Slogans Array
const slogans = [
  "Where every recipe tells a story.",
  "Taste the world, one dish at a time.",
  "Cooking made simple and flavorful.",
  "Discover, Cook, Savor.",
  "From our kitchen to yours, with love.",
  "Your guide to delicious creations.",
  "Recipes to inspire every bite.",
  "Cook smarter, eat better.",
  "Where flavors meet creativity.",
  "Unlock the chef in you."
];

let index = 0; // Current slogan index
const typingText = document.querySelector(".typing-text");

function typeSlogan() {
  typingText.textContent = ""; // Clear current text
  let slogan = slogans[index];
  let charIndex = 0;

  function typeChar() {
    if (charIndex < slogan.length) {
      typingText.textContent += slogan[charIndex];
      charIndex++;
      setTimeout(typeChar, 100); // Adjust typing speed
    } else {
      setTimeout(eraseSlogan, 2000); // Wait before erasing
    }
  }

  typeChar();
}

function eraseSlogan() {
  let slogan = slogans[index];
  let charIndex = slogan.length;

  function eraseChar() {
    if (charIndex > 0) {
      typingText.textContent = slogan.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseChar, 50); // Adjust erasing speed
    } else {
      index = (index + 1) % slogans.length; // Move to the next slogan
      typeSlogan();
    }
  }

  eraseChar();
}

// Start the animation
typeSlogan();










const recipeVideos = document.querySelectorAll(".recipe-video");

recipeVideos.forEach((video) => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
});
