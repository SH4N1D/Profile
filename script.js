// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // Navbar effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// ================= CLOSE MOBILE MENU & SMOOTH SCROLL =================
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.getElementById('navbarNav');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Smooth scroll with offset for navbar
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#') && targetId !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Close mobile menu
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// ================= CURRENT YEAR IN FOOTER =================
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ================= SCROLL ANIMATIONS (FADE IN UP) =================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});

// ================= CONTACT FORM VALIDATION =================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (contactForm.checkValidity()) {
            // Form is valid - Simulate sending
            
            // Get button to show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
            submitBtn.disabled = true;

            // Simulate API delay
            setTimeout(() => {
                formStatus.innerHTML = '<div class="alert alert-success">Message simulated successfully! This is a frontend demo.</div>';
                formStatus.classList.remove('d-none');
                
                // Reset form
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                
                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // Hide status message after 5 seconds
                setTimeout(() => {
                    formStatus.classList.add('d-none');
                }, 5000);
                
            }, 1500);
            
        } else {
            // Form is invalid
            formStatus.classList.add('d-none');
        }

        contactForm.classList.add('was-validated');
    }, false);
}
