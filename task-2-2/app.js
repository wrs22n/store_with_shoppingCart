const breakfast = document.querySelector(".button-breakfast");
const dinner = document.querySelector(".button-dinner");
const lunch = document.querySelector(".button-lunch");
const shakes = document.querySelector(".button-shakes");
const all = document.querySelector(".button-all");

const buttons = document.querySelector("button");

const menuItems = document.querySelectorAll(".menu__item");

function renderMenu(mealType) {
    menuItems.forEach((element) => {
        if (mealType === element.dataset.meal || mealType === "all") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
}

breakfast.addEventListener("click", () => {
    renderMenu("breakfast");
});
lunch.addEventListener("click", () => {
    renderMenu("lunch");
});
dinner.addEventListener("click", () => {
    renderMenu("dinner");
});
shakes.addEventListener("click", () => {
    renderMenu("shakes");
});
all.addEventListener("click", () => {
    renderMenu("all");
});
