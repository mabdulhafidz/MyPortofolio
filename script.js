function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon .classList.toggle("open")
}

document.addEventListener("DOMContentLoaded", function() {
    const observerOptions =  {
        threshold : 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target)
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.skills-wrapper').forEach(wrapper => {
        observer.observe(wrapper);
    });
});