/*  Creation of each product  */ 

const collection = document.querySelector('.collection'); 

function createItem(item) {
    const div = document.createElement('div');
    div.classList.add('collection__item');
    div.setAttribute('data-company', item.company);
    div.setAttribute('data-price', item.price.slice(1));
  
    const img = document.createElement('img');
    img.classList.add('collection__img');
    img.src = item.img;
  
    const name = document.createElement('p');
    name.classList.add('collection__text');
    name.textContent = item.name;
  
    const price = document.createElement('p');
    price.classList.add('collection__price');
    price.textContent = item.price;
  
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);
  
    return div;
}

itemList.forEach(item => {
    const div = createItem(item);
    collection.appendChild(div);
});

/** Sort by range value and company name*/

function fun1() {
    let rng = document.getElementById('price-range'); 
    let span = document.getElementById('price-value'); 
    span.innerHTML = rng.value;
}
fun1();

const ikea = document.querySelector(".filter__item__ikea");
const marcos = document.querySelector(".filter__item__macros");
const caressa = document.querySelector(".filter__item__caressa");
const liddy = document.querySelector(".filter__item__liddy");
const all = document.querySelector(".filter__item__all");

function renderCompany(companyName) {
    const companyNames = document.querySelectorAll(".collection__item");
    companyNames.forEach((element) => {
        if (companyName === element.dataset.company || companyName === "all") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
}
/*
function sortItemsByPrice(arr, rangeValue) {
    const sortedArr = arr.filter(item => item.price.slice(1) <= rangeValue);
    return sortedArr;
}*/
 
const priceRange = document.getElementById('price-range');

function priceRangeFilter() {
    priceRange.addEventListener('input', function() {
        let minPrice = parseInt(this.value);
        let products = collection.querySelectorAll('.collection__item');
        console.log(minPrice);
        for (let i = 0; i < products.length; i++) {
            let price = parseInt(products[i].getAttribute('data-price'));
            
            if (price >= minPrice) {
            products[i].style.display = 'block';
            } else {
            products[i].style.display = 'none';
            }
        }
    });
}
priceRangeFilter();

ikea.addEventListener("click", () => {
    renderCompany("ikea");
});
marcos.addEventListener("click", () => {
    renderCompany("marcos");
});
caressa.addEventListener("click", () => {
    renderCompany("caressa");
});
liddy.addEventListener("click", () => {
    renderCompany("liddy");
});
all.addEventListener("click", () => {
    renderCompany("all");
});

/** Filter by search input */
  
let filterSearch = document.querySelector(".filter__search");

filterSearch.addEventListener("input", (event) => {
    const searchQuery = event.target.value.toLowerCase(); 
    filterItemsByName(searchQuery);
})

function filterItemsByName(searchQuery) {
    const items = document.getElementsByClassName('collection__item'); 
    for (const item of items) {
      const itemName = item.querySelector('.collection__text').textContent.toLowerCase(); 
      if (itemName.includes(searchQuery)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none'; 
      }
    }
  }
 