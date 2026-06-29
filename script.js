/* ==========================
        THEME TOGGLE
========================== */

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});


/* ==========================
        SMOOTH SCROLL
========================== */

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});


/* ==========================
        SCROLL ANIMATION
========================== */

window.addEventListener("scroll", () => {

    let elements = document.querySelectorAll(".project-card, .skill-card, .stat-box, .contact-card, .timeline-item");

    elements.forEach(el => {

        let position = el.getBoundingClientRect().top;

        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "0.6s ease";
        } else {
            el.style.opacity = "0";
            el.style.transform = "translateY(40px)";
        }

    });

});


/* ==========================
        INITIAL STATE
========================== */

document.querySelectorAll(".project-card, .skill-card, .stat-box, .contact-card, .timeline-item").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
});
