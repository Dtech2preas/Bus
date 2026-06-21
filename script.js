// Configuration Object for easy updates
const CONFIG = {
    address: "28 Chroom Street, Annadale, Polokwane, Limpopo",
    phone: "+27 71 732 9214",
    whatsappLink: "https://wa.me/27717329214",
    mapLink: "https://maps.app.goo.gl/placeholder", // Add a real Maps link later
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3308119747587!2d29.444766175965415!3d-23.882194674681774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6c8e3bb22f461%3A0xc3dd6c3216834d85!2s28%20Chroom%20St%2C%20Annadale%2C%20Polokwane%2C%200699%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    businessName: "Makhura Auto Repair Shop",
    galleryImages: [
        { src: "https://images.unsplash.com/photo-1597825624773-4556a31c55b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Workshop Exterior" },
        { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Mechanics Working" },
        { src: "https://images.unsplash.com/photo-1635835694760-466dff6d31bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Diagnostic Equipment" },
        { src: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Customer Vehicles" },
        { src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Engine Repair" },
        { src: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Reception Area" }
    ],
    reviews: [
        { name: "John D.", rating: 5, text: "Fast and reliable service. Helped me when I was stranded on the highway. Professional mechanics and fair prices." },
        { name: "Sarah M.", rating: 5, text: "I've been taking my car here for years. They always diagnose the problem quickly and fix it right the first time." },
        { name: "David K.", rating: 5, text: "Excellent customer service and transparent pricing. No hidden fees, just honest work. Highly recommend to everyone in Polokwane!" }
    ]
};

// Populate dynamic content
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.config-address').forEach(el => el.textContent = CONFIG.address);
    document.querySelectorAll('.config-phone').forEach(el => el.textContent = CONFIG.phone);
    document.querySelectorAll('.config-whatsapp-link').forEach(el => {
        if(el.tagName === 'A') el.href = CONFIG.whatsappLink;
    });
    document.querySelectorAll('.config-business-name').forEach(el => el.textContent = CONFIG.businessName);

    // Populate Gallery
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        CONFIG.galleryImages.forEach(img => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy"><div class="gallery-caption">${img.alt}</div>`;
            galleryContainer.appendChild(div);
        });
    }

    // Populate Map
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <iframe src="${CONFIG.mapEmbedUrl}" width="100%" height="400" style="border:0; border-radius:8px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div style="text-align: center; margin-top: 15px;">
                <a href="${CONFIG.mapLink}" target="_blank" class="btn btn-secondary"><i class="fas fa-directions"></i> Get Directions</a>
            </div>
        `;
    }

    // Populate Reviews
    const reviewsContainer = document.getElementById('reviews-container');
    if (reviewsContainer) {
        CONFIG.reviews.forEach(review => {
            const div = document.createElement('div');
            div.className = 'review-card';
            div.innerHTML = `
                <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                <p class="review-text">"${review.text}"</p>
                <div class="review-author">— ${review.name}</div>
            `;
            reviewsContainer.appendChild(div);
        });
    }
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when a link is clicked
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Adjust for fixed header
            const headerOffset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});