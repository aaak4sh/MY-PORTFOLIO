// GSAP Animations and Functionalities
document.addEventListener("DOMContentLoaded", () => {
    // Header animation
    gsap.from("header", {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "power3.out"
    });

    // Hero section animation
    gsap.from("#hero h1", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from("#hero p", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });

    gsap.from("#hero .btn", {
        duration: 1.5,
        scale: 0,
        ease: "back.out",
        delay: 0.6
    });

    // Portfolio section animations
    gsap.utils.toArray(".portfolio-item").forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        contactForm.reset();
    });

    // Back-to-top button
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "⬆";
    backToTopButton.className = "back-to-top";
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
});
