let button = document.querySelector("#btn");
let inputField = document.querySelector("#text");
let square = document.querySelector("#square");
let range = document.querySelector("#range");
let rangeSpan = document.querySelector("#range-span");

const paintSquare = function () {
    square.style.backgroundColor = inputField.value;
};

const circleSize = function (event) {
    rangeSpan.textContent = event.target.value;
    document.querySelector("#circle").style.height = `${+event.target.value}%`;
    document.querySelector("#circle").style.width = `${+event.target.value}%`;
}

button.addEventListener("click",paintSquare);
range.addEventListener("input", circleSize);

document.getElementById("e_btn").style.display = "none";

