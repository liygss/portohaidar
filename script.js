// Efek fade-in untuk header
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    header.classList.add('fade-in');
});

// Efek slide-up untuk setiap section saat di-scroll
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.1 // Ketika 10% dari elemen terlihat
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
            // Hentikan pengamatan setelah animasi berjalan
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});