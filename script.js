document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('header nav');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close mobile menu when a navigation link is clicked
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
});
