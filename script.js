// ==========================================
// PORTFOLIO SCRIPT
// Part 1
// ==========================================


// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(function () {

            loader.style.display = "none";

        }, 500);

    }, 1000);

});



// ==========================================
// PROGRESS BAR
// ==========================================

window.addEventListener("scroll", function () {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percentage = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress").style.width =
        percentage + "%";

});




// ==========================================
// SCROLL TO TOP
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});




// ==========================================
// TYPING EFFECT
// ==========================================

const typingText = [

    "Future Software Engineer 💜",

    "Python Developer 🐍",

    "Web Developer 🌐",

    "Startup Founder 🚀",

    "Dream Chaser ✨"

];

let typingIndex = 0;

const typing = document.getElementById("typing");

function changeText() {

    typing.textContent = typingText[typingIndex];

    typingIndex++;

    if (typingIndex >= typingText.length) {

        typingIndex = 0;

    }

}

changeText();

setInterval(changeText, 2500);




// ==========================================
// GREETING
// ==========================================

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {

    greeting.textContent = "☀️ Good Morning";

}

else if (hour < 18) {

    greeting.textContent = "🌸 Good Afternoon";

}

else {

    greeting.textContent = "🌙 Good Evening";

}




// ==========================================
// LIVE CLOCK
// ==========================================

const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    clock.textContent = now.toLocaleTimeString();

}

updateClock();

setInterval(updateClock, 1000);




// ==========================================
// CURRENT DATE
// ==========================================

const date = document.getElementById("date");

const today = new Date();

date.textContent = today.toDateString();




// ==========================================
// RANDOM QUOTES
// ==========================================

const quotes = [

    "Dream Big. Start Small. 💜",

    "Consistency Beats Talent. 🚀",

    "Keep Coding Every Day. 💻",

    "Believe In Yourself. 🌸",

    "Small Steps Lead To Big Success. ⭐"

];

const randomQuote =

quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").textContent = randomQuote;




// ==========================================
// HERO BUTTONS
// ==========================================

document.getElementById("projectBtn")

.addEventListener("click", function () {

    document.getElementById("projects")

    .scrollIntoView({

        behavior: "smooth"

    });

});



document.getElementById("contactBtn")

.addEventListener("click", function () {

    document.getElementById("contact")

    .scrollIntoView({

        behavior: "smooth"

    });

});

// ==========================================
// DARK MODE
// ==========================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    }

    else {

        themeBtn.textContent = "🌙";

    }

});




// ==========================================
// ANIMATED COUNTERS
// ==========================================

const counters = document.querySelectorAll(".counter");

const speed = 60;

counters.forEach(function(counter){

    const target = Number(counter.innerText);

    let count = 0;

    counter.innerText = "0";

    const updateCounter = function(){

        count++;

        counter.innerText = count;

        if(count < target){

            setTimeout(updateCounter, speed);

        }

    };

    updateCounter();

});




// ==========================================
// REVEAL ON SCROLL
// ==========================================

const cards = document.querySelectorAll(".card");

function revealCards(){

    cards.forEach(function(card){

        const position = card.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if(position < screen - 100){

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealCards);

revealCards();




// ==========================================
// NAVBAR ACTIVE LINK
// ==========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link){

    link.addEventListener("click",function(){

        navLinks.forEach(function(item){

            item.style.color = "#444";

        });

        this.style.color = "#7c3aed";

    });

});




// ==========================================
// CONTACT FORM
// ==========================================

const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("💜 Thank you! Your message has been received.");

    form.reset();

});




// ==========================================
// FOOTER YEAR
// ==========================================

const year = document.getElementById("year");

const currentYear = new Date().getFullYear();

year.innerHTML =

"© " + currentYear + " Arohi | All Rights Reserved";




// ==========================================
// HERO TITLE ANIMATION
// ==========================================

const title = document.getElementById("title");

title.style.opacity = "0";

title.style.transform = "translateY(30px)";

setTimeout(function(){

    title.style.transition = "1s";

    title.style.opacity = "1";

    title.style.transform = "translateY(0)";

},300);

// ==========================================
// SMOOTH SECTION FADE
// ==========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(function(section){

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = "0.8s";

    observer.observe(section);

});




// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button){

    button.addEventListener("click",function(){

        button.style.transform = "scale(.95)";

        setTimeout(function(){

            button.style.transform = "scale(1)";

        },150);

    });

});




// ==========================================
// RANDOM CONSOLE MESSAGE
// ==========================================

const messages = [

    "Keep Coding 💜",

    "One Day You'll Build Something Amazing 🚀",

    "Believe In Yourself ⭐",

    "Dream • Code • Repeat 💻",

    "Future CEO Loading... 👑"

];

console.log(

messages[Math.floor(Math.random()*messages.length)]

);




// ==========================================
// KEYBOARD SHORTCUT
// Press H → Home
// ==========================================

document.addEventListener("keydown",function(event){

    if(event.key==="h" || event.key==="H"){

        document.getElementById("home")

        .scrollIntoView({

            behavior:"smooth"

        });

    }

});




// ==========================================
// IMAGE SAFETY
// ==========================================

document.querySelectorAll("img").forEach(function(img){

    img.draggable=false;

});




// ==========================================
// PAGE TITLE
// ==========================================

document.addEventListener("visibilitychange",function(){

    if(document.hidden){

        document.title="Come Back Soon 💜";

    }

    else{

        document.title="Arohi | Portfolio";

    }

});

// ==========================================
// DOUBLE CLICK
// ==========================================

document.body.addEventListener("dblclick",function(){

    console.log("Double Click Detected ✨");

});

// ==========================================
// PAGE READY
// ==========================================

console.log("Everything Loaded Successfully ✅");

console.log("Portfolio Version 1.0 💜");


// ==========================================
// WELCOME MESSAGE
// ==========================================

console.log("Welcome To Arohi's Portfolio 💜");


// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log("Portfolio Loaded Successfully 🚀");

