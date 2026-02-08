// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link (on mobile)
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Button hover effects
document.querySelectorAll('.shop-now, .watch-video, li button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heartIcons = document.querySelectorAll('.heart-icon');
    const favoritedProducts = JSON.parse(localStorage.getItem('favoritedProducts')) || [];
    heartIcons.forEach(icon => {
        const productCard = icon.closest('.product-card');
        const productId = productCard.getAttribute('data-id');
        const isFavorited = favoritedProducts.includes(productId);
        if (isFavorited) {
            productCard.classList.add('favorited');
            icon.classList.add('favorited');
        }
    });
    heartIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.getAttribute('data-id');
            const isFavorited = productCard.classList.toggle('favorited');
            this.classList.toggle('favorited');
            if (isFavorited) {
                favoritedProducts.push(productId);
            } else {
                const index = favoritedProducts.indexOf(productId);
                if (index > -1) {
                    favoritedProducts.splice(index, 1);
                }
            }
            localStorage.setItem('favoritedProducts', JSON.stringify(favoritedProducts));
        });
    });
});