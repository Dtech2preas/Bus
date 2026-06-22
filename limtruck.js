// Configuration Object for Limtruck Auto Electrical & Dyno Centre
const CONFIG = {
    address: "61 Koper Street, Laboria, Polokwane",
    phone: "082 689 5370",
    officePhone: "015 007 1068",
    email: "limtruckauto@gmail.com",
    whatsappLink: "https://wa.me/27826895370",
    // Base on the coordinates from their Google Site embed: -23.867223, 29.443415
    mapLink: "https://www.google.com/maps/search/?api=1&query=-23.867223,29.443415",
    mapEmbedUrl: "https://maps-api-ssl.google.com/maps?hl=en-US&ll=-23.867223,29.443415&output=embed&q=61+Koper+St,+Polokwane+Ext+8,+Polokwane,+0700,+South+Africa+(61+Koper+St)&z=17",
    businessName: "Limtruck Auto Electrical & Dyno Centre",
    galleryImages: [
        { src: "https://images.unsplash.com/photo-1625047509168-a71c6684e27f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Auto Electrical Work" },
        { src: "https://images.unsplash.com/photo-1632823462943-41bb38053a42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Dyno Testing" },
        { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Engine Tuning" },
        { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Vehicle Diagnostics" },
        { src: "https://images.unsplash.com/photo-1530906358829-e84b2769270f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Cross Border Assistance" },
        { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Expert Mechanics" }
    ],
    reviews: [
        { name: "Brian M", rating: 5, text: "Service was excellent. Staff was really kind and well informed. I knew my car's problem and didn't even tell them. within 3mins without a diagnostic machine they had figured it out." },
        { name: "Walter H", rating: 5, text: "Excellent service! The staff went above and beyond, they went out of their way to help" }
    ]
};

// Populate dynamic content
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.config-address').forEach(el => el.textContent = CONFIG.address);
    document.querySelectorAll('.config-phone').forEach(el => el.textContent = CONFIG.phone);
    document.querySelectorAll('.config-office-phone').forEach(el => el.textContent = CONFIG.officePhone);
    document.querySelectorAll('.config-email').forEach(el => el.textContent = CONFIG.email);
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
            <iframe src="${CONFIG.mapEmbedUrl}" width="100%" height="400" style="border:0; border-radius:4px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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