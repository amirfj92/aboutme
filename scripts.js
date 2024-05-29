// scripts.js
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = '#1DB954'; // Green highlight on hover
    });
    link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = '#333'; // Revert back
    });
});
