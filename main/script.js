// script.js

// Reveal sections on scroll
const revealElements = document.querySelectorAll(
  "section, .project-card, .about-img, .about-content"
);

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Animate skill bars only once when visible
const skillBars = document.querySelectorAll(".progressline span");

const animateSkills = () => {
  const triggerPoint = window.innerHeight * 0.85;

  skillBars.forEach((bar, index) => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < triggerPoint && !bar.classList.contains("animated")) {
      const targetWidth = bar.getAttribute("data-width"); // e.g., "90%"

      setTimeout(() => {
        bar.style.width = targetWidth; // instant jump
        bar.classList.add("animated"); // prevent re-trigger
      }, index * 500); // 400ms delay between each bar
    }
  });
};

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: "smooth",
        });
      }
    }
  });
});

// Home Section Animations (Fade-in Image, No Floating)

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const introText = document.querySelector(".info h3");
  const heading = document.querySelector(".info h1");
  const bio = document.querySelector(".bio");
  const button = document.querySelector(".btn-1");
  const image = document.querySelector(".image img");

  // Fade-in nav
  nav.style.opacity = "0";
  nav.style.transform = "translateY(-20px)";
  setTimeout(() => {
    nav.style.transition = "all 1s ease";
    nav.style.opacity = "1";
    nav.style.transform = "translateY(0)";
  }, 300);

  // Typing effect for intro text
  const textContent = "Hi, I'm Yogesh.";
  introText.textContent = "";
  let i = 0;

  function typingEffect() {
    if (i < textContent.length) {
      introText.textContent += textContent.charAt(i);
      i++;
      setTimeout(typingEffect, 100);
    }
  }
  setTimeout(typingEffect, 1000);

  // Animate heading, bio, button
  [heading, bio, button].forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 1500 + index * 300);
  });

  // Fade-in image (static, no floating)
  image.style.opacity = "0";
  image.style.transform = "scale(0.9)";
  setTimeout(() => {
    image.style.transition = "all 1s ease";
    image.style.opacity = "1";
    image.style.transform = "scale(1)";
  }, 2000);
});
