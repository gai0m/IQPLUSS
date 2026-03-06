// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Text Entry Animation
    gsap.from(".hero-content", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
    });

    // 2. History Matrix Cards (Staggered Fade In Up)
    gsap.from(".history-card", {
        scrollTrigger: {
            trigger: ".history-matrix",
            start: "top 80%", // Triggers when the top of the section hits 80% down the viewport
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Delays each card slightly for a wave effect
        ease: "back.out(1.7)" // Adds a little "pop" or bounce
    });

    // 3. Vision Section (Slam in from left and right)
    gsap.from(".ph-animate-left", {
        scrollTrigger: {
            trigger: ".vision-section",
            start: "top 75%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".ph-animate-right", {
        scrollTrigger: {
            trigger: ".vision-section",
            start: "top 75%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // 4. Founder Profile Reveal
    gsap.from(".founder-card", {
        scrollTrigger: {
            trigger: ".founder-zone",
            start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "expo.out"
    });

    // Simple language toggle logic (Visual only for now)
    const langBtn = document.getElementById("lang-toggle");
    const langText = document.getElementById("lang-text");
    
    langBtn.addEventListener("click", () => {
        if (langText.innerText === "ENG") {
            langText.innerText = "عربي";
            document.body.dir = "ltr";
        } else {
            langText.innerText = "ENG";
            document.body.dir = "rtl";
        }
    });
});
