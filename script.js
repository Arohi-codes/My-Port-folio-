// ===============================
// PORTFOLIO LOADED
// ===============================

console.log("Portfolio Loaded Successfully 🚀");


// ===============================
// HERO TITLE
// ===============================

const heroTitle = document.getElementById("title");

heroTitle.style.color = "#7c3aed";


// ===============================
// PROJECT BUTTON
// ===============================

const projectBtn = document.getElementById("projectBtn");

projectBtn.addEventListener("click", function () {

    document.getElementById("projects").scrollIntoView({

        behavior: "smooth"

    });

});


// ===============================
// CONTACT BUTTON
// ===============================

const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function () {

    document.getElementById("contact").scrollIntoView({

        behavior: "smooth"

    });

});


// ===============================
// FOOTER YEAR
// ===============================

const year = new Date().getFullYear();

document.getElementById("year").innerHTML =

`© ${year} Arohi | All Rights Reserved`;

// ===============================
// NAVBAR ACTIVE LINK
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// HERO BUTTON HOVER
// ===============================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseover", function(){

        this.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseout", function(){

        this.style.transform = "scale(1)";

    });

});


// ===============================
// WELCOME MESSAGE
// ===============================

window.onload = function(){

    console.log("Welcome to Arohi's Portfolio 💜");

};
