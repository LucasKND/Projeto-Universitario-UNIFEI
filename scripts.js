document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            nav.classList.toggle("active");
            const isExpanded = menuToggle.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isExpanded);
        });

        // Close menu when clicking a link
        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                nav.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains("active")) {
                menuToggle.classList.remove("active");
                nav.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    
    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const accordion = header.parentElement;
            accordion.classList.toggle("active");
        });
    });

    // Navigation active state
    const navLinks = Array.from(document.querySelectorAll("nav a[href^='#']"));
    if (navLinks.length === 0) {
        return;
    }

    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter((section) => section instanceof HTMLElement);

    if (sections.length === 0) {
        return;
    }

    // Marca o primeiro item como ativo até que o observer atualize.
    navLinks[0].classList.add("ativo");
    navLinks[0].setAttribute("aria-current", "true");

    const observer = new IntersectionObserver(
        (entries) => {
            entries
                .filter((entry) => entry.isIntersecting)
                .forEach((entry) => {
                    const id = `#${entry.target.id}`;
                    navLinks.forEach((link) => {
                        const isActive = link.getAttribute("href") === id;
                        link.classList.toggle("ativo", isActive);
                        if (isActive) {
                            link.setAttribute("aria-current", "true");
                        } else {
                            link.removeAttribute("aria-current");
                        }
                    });
                });
        },
        {
            rootMargin: "0px 0px -55% 0px",
            threshold: 0.4,
        }
    );

    sections.forEach((section) => observer.observe(section));

    // Video grid play/pause functionality
    const videoItems = document.querySelectorAll(".video-item");
    
    videoItems.forEach((item) => {
        const video = item.querySelector("video");
        const overlay = item.querySelector(".play-overlay");
        
        if (video && overlay) {
            // Click to play/pause
            item.addEventListener("click", () => {
                if (video.paused) {
                    // Pause all other videos first
                    document.querySelectorAll(".video-item video").forEach((v) => {
                        if (v !== video) {
                            v.pause();
                            v.closest(".video-item").classList.remove("playing");
                        }
                    });
                    video.play();
                    item.classList.add("playing");
                } else {
                    video.pause();
                    item.classList.remove("playing");
                }
            });
            
            // When video ends, show overlay again
            video.addEventListener("ended", () => {
                item.classList.remove("playing");
            });
            
            // Hover preview - play on hover (muted)
            item.addEventListener("mouseenter", () => {
                if (video.paused && !item.classList.contains("playing")) {
                    video.currentTime = 0;
                    video.play().catch(() => {});
                }
            });
            
            item.addEventListener("mouseleave", () => {
                if (!item.classList.contains("playing")) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }
    });
});
