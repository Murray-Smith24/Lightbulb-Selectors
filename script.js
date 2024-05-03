const bulb1 = document.querySelector("#lightbulb1");
const bulb2 = document.querySelector("#lightbulb2");
const bulb3 = document.querySelector("#lightbulb3");
let output = document.querySelector("h3, .subtitle");
let count = 0;

function tally(event) {
    count++;
    output.innerHTML = "You've clicked the lights " + count +  " times";
    event.target.classList.toggle("active");
}

bulb1.addEventListener("click", tally);
bulb2.addEventListener("click", tally);
bulb3.addEventListener("click", tally);
