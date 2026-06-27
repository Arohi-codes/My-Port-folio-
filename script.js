
// 🌸 Typing Animation

const texts = [
"Future Software Engineer 👩‍💻",
"Python Developer 🐍",
"Startup Founder 🚀",
"Dream Big ✨"
];

let index = 0;
let char = 0;

function typeEffect(){

let h2 = document.querySelector(".hero-box h2");

if(char < texts[index].length){

h2.innerHTML += texts[index].charAt(char);
char++;
setTimeout(typeEffect,100);

}else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

let h2 = document.querySelector(".hero-box h2");

if(char > 0){

h2.innerHTML = texts[index].substring(0,char-1);
char--;
setTimeout(eraseEffect,50);

}else{

index++;
if(index >= texts.length){
index = 0;
}

setTimeout(typeEffect,300);

}

}

typeEffect();


// 🌸 Floating Hearts Generator

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "💖";

heart.style.left = Math.random() * 100 + "vw";

heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

document.body.appendChild(heart);

setTimeout(() => {
heart.remove();
}, 6000);

}

setInterval(createHeart, 300);
