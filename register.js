// register.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form validation and confirmation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
  const phone = this.querySelector('input[placeholder="Phone Number"]').value.trim();
  const email = this.querySelector('input[placeholder="Email Address"]').value.trim();

  if (!name || !phone) {
    alert("Please fill in your name and phone number.");
    return;
  }

  alert("Thank you for your inquiry! We’ll get back to you soon.");
  this.reset();
});

// Image hover animation
const images = document.querySelectorAll(".image-gallery img");
images.forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "transform 0.3s ease";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

// Load virtual tour alert fallback
const virtualTour = document.querySelector(".virtual-tour");
if (virtualTour) {
  virtualTour.addEventListener("click", function (e) {
    if (this.href.includes("dummy-tour")) {
      e.preventDefault();
      alert("Virtual tour is currently unavailable. Please check back later.");
    }
  });
}
