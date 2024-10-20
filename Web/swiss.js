// Smooth scrolling to sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation
const form = document.getElementById('feedback-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    if (name && email && rating && comment) {
        // Submit form data to server or display success message
        console.log('Form submitted successfully!');
    } else {
        alert('Please fill in all fields!');
    }
}); 