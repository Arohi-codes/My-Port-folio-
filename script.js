console.log("Portfolio Loaded Successfully 🚀");

alert("Welcome to Arohi's Portfolio 💜");

let name = "Arohi";

console.log(name);

let projectButton = document.getElementById("projectBtn");

projectButton.onclick = function(){

    alert("Projects section is coming soon 🚀");

}

let contactButton = document.getElementById("contactBtn");

contactButton.onclick = function(){

    alert("Thank you for visiting my portfolio 💜");

}

let heading = document.getElementById("title");

heading.innerHTML = "Welcome To My Portfolio 💜";

heading.style.color = "#7c3aed";

document.body.style.background = "#ffffff";

heading.onmouseover = function(){

    heading.style.color = "deeppink";

}

heading.onmouseout = function(){

    heading.style.color = "#7c3aed";

}

let currentYear = new Date().getFullYear();

document.getElementById("year").innerHTML =

"© " + currentYear + " Arohi";
