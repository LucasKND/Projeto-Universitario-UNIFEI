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

    // Video modal functionality
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalClose = document.querySelector('.video-modal-close');
    
    const videoItems = document.querySelectorAll(".video-item");
    
    videoItems.forEach((item) => {
        const video = item.querySelector("video");
        
        if (video) {
            // Click to open modal
            item.addEventListener("click", () => {
                const videoSrc = video.getAttribute('src');
                modalVideo.setAttribute('src', videoSrc);
                videoModal.classList.add('active');
                modalVideo.play();
            });
            
            // Hover preview - play on hover (muted)
            item.addEventListener("mouseenter", () => {
                if (video.paused) {
                    video.play().catch(() => {});
                }
            });
            
            item.addEventListener("mouseleave", () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });
    
    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            videoModal.classList.remove('active');
            modalVideo.pause();
            modalVideo.setAttribute('src', '');
        });
    }
    
    // Close modal on background click
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoModal.classList.remove('active');
                modalVideo.pause();
                modalVideo.setAttribute('src', '');
            }
        });
    }
    
    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            videoModal.classList.remove('active');
            modalVideo.pause();
            modalVideo.setAttribute('src', '');
        }
    });
});
