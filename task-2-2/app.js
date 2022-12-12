const breakfast = document.querySelector(".button-breakfast");
const dinner = document.querySelector(".button-dinner");
const lunch = document.querySelector(".button-lunch");
const shakes = document.querySelector(".button-shakes");
const all = document.querySelector(".button-all");

const buttons = document.querySelector("button");

const menuItems = document.querySelectorAll(".menu__item");

function Menu(item) {
    menuItems.forEach((element) => {
        if (element.classList.contains(`${item}`)) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
}

breakfast.addEventListener("click", () => {
    Menu("breakfast");
});
lunch.addEventListener("click", () => {
    Menu("lunch");
});
dinner.addEventListener("click", () => {
    Menu("dinner");
});
shakes.addEventListener("click", () => {
    Menu("shakes");
});
all.addEventListener("click", () => {
    Menu("menu__item");
});
