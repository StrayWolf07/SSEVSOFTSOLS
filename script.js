document.addEventListener('DOMContentLoaded', () => {
    // ✅ Create and append the header bar dynamically
    const headerBar = document.createElement('div');
    headerBar.className = 'header-bar';
    headerBar.textContent = 'SSEV Softsols';
    document.body.appendChild(headerBar);

    // ✅ Show the header bar after the welcome text fades out
    setTimeout(() => {
        headerBar.classList.add('visible');
    }, 9000);

    // ✅ Content boxes for the intro section
    const contentBoxes = document.createElement('div');
    contentBoxes.className = 'content-boxes';

    const boxData = [
        { imgSrc: './man-wearing-vr-headset-interacting-with-virtual-reality_14117-915303.avif', text: 'AI technologies to aid sense-disabled persons and virtual reality' },
        { imgSrc: './HD-wallpaper-erp.jpg', text: 'Integrated Asset Management solution for Plants, Projects, and Infrastructure' },
        { imgSrc: './agricultural-robots-work-smart-farms_35913-3364.avif', text: 'Techno Agricultural Innovation: An AI-based helping hand for the farm sector' },
        { imgSrc: './1728815629175.jpeg', text: 'Responsible Traffic Management Solutions for Eco and Safe Traffic Flow' }
    ];

    boxData.forEach(data => {
        const box = document.createElement('div');
        box.className = 'content-box';

        const img = document.createElement('img');
        img.src = data.imgSrc;
        img.alt = data.text;

        const boxText = document.createElement('div');
        boxText.className = 'content-text';
        boxText.textContent = data.text;

        box.appendChild(img);
        box.appendChild(boxText);
        contentBoxes.appendChild(box);
    });

    document.body.appendChild(contentBoxes);

    // ✅ Fade in content boxes after welcome animation
    setTimeout(() => {
        contentBoxes.style.opacity = '1';

        // ✅ Ensure sections fade in smoothly after content boxes
        setTimeout(() => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => section.classList.add('visible')); 
        }, 3000);
    }, 9000);

    // ✅ Intersection Observer for smooth animations
    const sections = document.querySelectorAll('section');
    const observerOptions = { threshold: 0.3, rootMargin: "100px 0px" };  

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                // ✅ Prevent Careers & Contact Us sections from disappearing
                if (!entry.target.classList.contains('no-hide')) {
                    entry.target.classList.remove('visible');
                }
            }
        });
    }, observerOptions);

    // ✅ Observe all sections correctly
    sections.forEach(section => observer.observe(section));

    // ✅ Fix Careers & Contact Us animation (they won’t disappear)
    document.querySelector('#careers')?.classList.add('no-hide');
    document.querySelector('#contact-us')?.classList.add('no-hide');

    // ✅ Smooth scrolling for navigation links & Home page reload
    document.querySelectorAll('.nav-left a, .nav-right a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();  
            const targetId = link.getAttribute('href').substring(1);
            if (targetId === "products") {
                window.location.href = 'products.html'; // ✅ Open products.html
            } else if (targetId === "") {
                location.reload(); // ✅ Reload the page when Home is clicked
            } else {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ✅ Slideshow Functionality for Gallery Section
    const images = [
        './man-wearing-vr-headset-interacting-with-virtual-reality_14117-915303.avif',
        './HD-wallpaper-erp.jpg',
        './agricultural-robots-work-smart-farms_35913-3364.avif',
        './1728815629175.jpeg'
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById('slideshow');

    function updateImage() {
        imgElement.src = images[currentIndex];
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }

    document.getElementById('next')?.addEventListener('click', nextImage);
    document.getElementById('prev')?.addEventListener('click', prevImage);
    setInterval(nextImage, 3000);

    // ✅ Prevent content boxes from being clickable
    const galleryContentBoxes = document.querySelectorAll('.content-box');
    galleryContentBoxes.forEach((box) => {
        box.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    });

    // ✅ Reload page when logo is clicked
    const logo = document.querySelector('.company-logo');
    if (logo) {
        logo.addEventListener('click', () => {
            location.reload();
        });
    }

    // ✅ Form submission handler
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
        });
    }

    // ✅ Scroll-triggered NOVA text box (Fix)
    const textBox = document.getElementById("textBox");

    function handleScroll() {
        if (textBox) {
            var position = textBox.getBoundingClientRect().top;
            var screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                textBox.classList.add("show");
            }
        }
    }

    // ✅ Trigger once on load in case it's already visible
    handleScroll();

    // ✅ Attach event listener for scrolling
    window.addEventListener("scroll", handleScroll);
});
