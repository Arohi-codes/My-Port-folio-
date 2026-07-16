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

// ===============================
// TYPING EFFECT
// ===============================

const text = [

    "Future Software Engineer 💜",

    "Future Startup Founder 🚀",

    "Python Developer 🐍",

    "Web Developer 🌐",

    "Dream Chaser ✨"

];

let index = 0;

const typing = document.getElementById("typing");

setInterval(function(){

    typing.innerHTML = text[index];

    index++;

    if(index >= text.length){

        index = 0;

    }

},2000);

// ===============================
// DARK MODE
// ===============================

const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click",function(){

    document.body.classList.toggle("dark");

});

// ===============================
// COUNTER
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    let count = 0;

    const target = Number(counter.innerHTML);

    counter.innerHTML = 0;

    const timer = setInterval(function(){

        count++;

        counter.innerHTML = count;

        if(count >= target){

            clearInterval(timer);

        }

    },30);

});

// ===============================
// SCROLL ANIMATION
// ===============================

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",function(){

    cards.forEach(card=>{

        const position = card.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if(position < screen-100){

            card.classList.add("show");

        }

    });

});


