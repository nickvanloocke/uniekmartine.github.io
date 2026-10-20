/*
    Uniek Martine

    Handles:
    - Mobile navigation
    - Closing menu when clicking a link
    - Escape key
    - Load
*/


document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileLinks = document.querySelectorAll(".mobile-nav a");


    /*
        Open / close mobile menu
    */

    menuButton.addEventListener("click", () => {

        const isOpen = mobileNav.classList.toggle("open");

        menuButton.classList.toggle("active", isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    /*
        Close menu when clicking a navigation link
    */

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /*
        Close menu with Escape
    */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            mobileNav.classList.remove("open");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /*
        Load
    */

    const heading = document.querySelector('.js-header');
    heading?.classList.add('is-loaded');

    const hero = document.querySelector('.js-hero');
    hero?.classList.add('is-loaded');


    /*
        Intersection observer
    */

    // Select all elements you want to observe
    const items = document.querySelectorAll('.piece-card, .collection-card, .maker');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Check if the element is inside the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Optional: Stop observing if you only want the animation to play once
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2 // Triggers when 20% of the element is visible
    });

    // Attach the observer to each .product element
    items.forEach(item => observer.observe(item));

});

