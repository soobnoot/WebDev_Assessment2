const allCarousels = document.querySelectorAll('.fade-carousel');

allCarousels.forEach((carousel) => {

  const images = carousel.querySelectorAll('.carousel-inner img');
  let currentIndex = 0;

  function cycle() {
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add('active');
  }

  setInterval(cycle, 3000); 
});

document.querySelector('.subscribe-form').addEventListener('submit', (e) => {
  e.preventDefault(); 
  alert('Thanks for subscribing!');
});

document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the page from refreshing

    const formData = {
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        vessel: document.getElementById('vesselType').value,
        enquiry: document.getElementById('enquiry').value
    };

    console.log("Form Submitted:", formData);
    alert("Thank you! Your enquiry has been sent.");
});