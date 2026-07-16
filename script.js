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

// ===============================
// RANDOM QUOTES
// ===============================

const quotes = [

    "Dream Big 💜",

    "Never Stop Learning 🚀",

    "Code. Learn. Repeat. 💻",

    "Success Loves Consistency ⭐",

    "Believe In Yourself 🌸"

];

const quote = document.getElementById("quote");

const random = Math.floor(Math.random()*quotes.length);

quote.innerHTML = quotes[random];

// ===============================
// LIVE CLOCK
// ===============================

const clock = document.getElementById("clock");

setInterval(function(){

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();

},1000);

// ===============================
// DATE
// ===============================

const date = document.getElementById("date");

const today = new Date();

date.innerHTML = today.toDateString();

// ===============================
// WELCOME
// ===============================

window.addEventListener("load",function(){

    document.body.style.opacity="1";

});

// ===============================
// MOUSE POSITION
// ===============================

document.addEventListener("mousemove",function(event){

    console.log(

        event.clientX,

        event.clientY

    );

});

// ===============================
// KEYBOARD
// ===============================

document.addEventListener("keydown",function(event){

    if(event.key==="h"){

        alert("Hello Arohi 💜");

    }

});

// ===============================
// SCROLL
// ===============================

window.addEventListener("scroll",function(){

    const scroll =

    window.scrollY;

    console.log(scroll);

});

// ===============================
// PAGE READY
// ===============================

console.log("Everything Loaded Successfully 🚀");

// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load",function(){

    const loader = document.getElementById("loader");

    loader.style.display="none";

});

// ===============================
// THEME SWITCH
// ===============================

const theme = document.getElementById("theme");

theme.addEventListener("click",function(){

    document.body.classList.toggle("dark");

});

// ===============================
// PROGRESS BAR
// ===============================

window.addEventListener("scroll",function(){

    let scroll = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight -

    document.documentElement.clientHeight;

    let progress = (scroll/height)*100;

    document.getElementById("progress").style.width =

    progress + "%";

});

// ===============================
// REVEAL
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",function(){

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            section.classList.add("visible");

        }

    });

});

// ===============================
// RANDOM HERO COLOR
// ===============================

const colors=[

"#faf5ff",

"#fdf2f8",

"#f3e8ff",

"#eef2ff"

];

const randomColor=

colors[Math.floor(Math.random()*colors.length)];

document.querySelector(".hero").style.background=randomColor;

// ===============================
// GREETING
// ===============================

const hour=new Date().getHours();

const greet=document.getElementById("greeting");

if(hour<12){

greet.innerHTML="Good Morning ☀️";

}

else if(hour<18){

greet.innerHTML="Good Afternoon 🌸";

}

else{

greet.innerHTML="Good Evening 🌙";

}

// ===============================
// VISITOR
// ===============================

console.log("Thank you for visiting my portfolio 💜");


