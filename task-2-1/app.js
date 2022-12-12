let arr = [
    "#F1f5f8",
    "Green",
    "Rgba(133,122,200)",
    "Red",
    "#F15025",
    "Rgb(0,102,204)",
];
let body = document.querySelector("body");
let text = document.querySelector(".text");
let button = document.querySelector("button");

button.addEventListener("click", function () {
    let i = 1 + Math.random() * (6 + 1 - 1);
    body.style.backgroundColor = arr[Math.floor(i) - 1];
    text.textContent = arr[Math.floor(i) - 1];
    text.style.color = arr[Math.floor(i) - 1];
});
