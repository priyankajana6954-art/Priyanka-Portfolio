/* =====================================================
   PRIYANKA PORTFOLIO - SCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------------------------------
       NAVBAR SHADOW ON SCROLL
    ------------------------------------------------- */

    const navbar = document.querySelector(".portfolio-navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {
            navbar.style.boxShadow =
                "0 8px 30px rgba(30, 48, 85, 0.08)";
        } else {
            navbar.style.boxShadow = "none";
        }

    });


    /* -------------------------------------------------
       ACTIVE NAVIGATION LINK
    ------------------------------------------------- */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const target = link.getAttribute("href");

            if (target === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* -------------------------------------------------
       MOBILE NAVBAR CLOSE
    ------------------------------------------------- */

    const navLinksAll = document.querySelectorAll(
        ".navbar-nav .nav-link, .navbar-nav a"
    );

    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinksAll.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });


    /* -------------------------------------------------
       SMOOTH SCROLL
    ------------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                targetId === "#" ||
                targetId.length <= 1
            ) {
                return;
            }

            const targetElement =
                document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                const navbarHeight = 75;

                const position =
                    targetElement.getBoundingClientRect().top +
                    window.pageYOffset -
                    navbarHeight;

                window.scrollTo({
                    top: position,
                    behavior: "smooth"
                });

            }

        });

    });


    /* -------------------------------------------------
       SCROLL REVEAL ANIMATION
    ------------------------------------------------- */

    const revealElements = document.querySelectorAll(
        ".section-heading, .strength-item, .skill-card, " +
        ".project-card, .education-item, .certificate-card, " +
        ".contact-info, .resume-card"
    );

    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });


    /* -------------------------------------------------
       HERO CONTENT ANIMATION
    ------------------------------------------------- */

    const heroContent =
        document.querySelector(".hero-content");

    const heroPhoto =
        document.querySelector(".hero-photo-area");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(25px)";
        heroContent.style.transition =
            "opacity 0.9s ease, transform 0.9s ease";

        setTimeout(function () {

            heroContent.style.opacity = "1";
            heroContent.style.transform =
                "translateY(0)";

        }, 150);

    }


    if (heroPhoto) {

        heroPhoto.style.opacity = "0";
        heroPhoto.style.transform =
            "translateX(30px)";
        heroPhoto.style.transition =
            "opacity 1s ease, transform 1s ease";

        setTimeout(function () {

            heroPhoto.style.opacity = "1";
            heroPhoto.style.transform =
                "translateX(0)";

        }, 300);

    }


    /* -------------------------------------------------
       TYPING EFFECT
    ------------------------------------------------- */

    const typingElement =
        document.querySelector(".typing-text");

    if (typingElement) {

        const words = [
            "BCA Student",
            "Web Design Learner",
            "Technical Support Aspirant"
        ];

        let wordIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord =
                words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;

                if (
                    characterIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(typeEffect, 1500);
                    return;

                }

            } else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;

                if (characterIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) %
                        words.length;

                }

            }

            setTimeout(
                typeEffect,
                deleting ? 50 : 90
            );

        }

        typeEffect();

    }


    /* -------------------------------------------------
       CURRENT YEAR
    ------------------------------------------------- */

    const yearElement =
        document.querySelector("#currentYear");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    /* -------------------------------------------------
       BACK TO TOP BUTTON
    ------------------------------------------------- */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});