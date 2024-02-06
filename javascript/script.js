document.addEventListener("DOMContentLoaded", function () {
  // Animation for header-left content
  gsap.from(".header-left", {
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 0.5,
  });

  gsap.fromTo(
    [".header-heading", ".header-paragraph"],
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      delay: 1,
    }
  );

  // Animation for header-right review cards
  const reviewCards = gsap.utils.toArray(".review-card");

  reviewCards.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        x: 80,
        delay: 1.5,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 1 + index * 1,
      }
    );

    // Add hover effect using GSAP
    gsap.to(card, {
      scale: 1.2,
      boxShadow: "0 0 20px rgba(49, 128, 242, 0.2)",
      duration: 0.1,
      paused: true,
      ease: "power3.inOut",
    });

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.1,
        scale: 1.2,
        boxShadow: "0 0 20px rgba(49, 128, 242, 0.2)",
        ease: "power3.inOut",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0,
        scale: 1,
        boxShadow: "none",
        ease: "power3.inOut",
      });
    });
  });

  // Scroll-triggered animations for main sections
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".main-section-content").forEach((section, index) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          end: "center center",
          scrub: 1,
          once: true, // Ensure it only triggers once
        },
      }
    );
  });

  if (window.innerWidth <= 1200) {
    // For screens smaller than 1200px
    const reviewCards = gsap.utils.toArray(".review-card");

    reviewCards.forEach((card) => {
      gsap.to(card, {
        scale: 1.1,
        transition: "transform 0.1s ease, z-index 0.1s ease, outline 0.1s ease",
      });
    });
  }
});
