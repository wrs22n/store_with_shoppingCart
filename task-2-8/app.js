let arrayShoppingCart = [];
const checkout = document.querySelector(".shoppingCart__total-sum");

window.addEventListener('load', function() {
    
    let data = JSON.parse(localStorage.getItem('cartItems'));
    if (data) {
        for (let i = 0; i < data.length; i++) {
            let shoppingCartItem = document.createElement("div");
            shoppingCartItem.className = "shoppingCart__item";
        
            let itemImage = document.createElement("img");
            itemImage.className = "shoppingCart__item__img";
            itemImage.src = data[i].image;
        
            let itemDescription = document.createElement("div");
            itemDescription.className = "shoppingCart__item__description";
        
            let itemTitle = document.createElement("h2");
            itemTitle.className = "shoppingCart__item__title";
            itemTitle.textContent = data[i].name;
        
            let itemPrice = document.createElement("p");
            itemPrice.className = "shoppingCart__item__price";
            itemPrice.textContent = data[i].price;
        
            let itemRemoveButton = document.createElement("button");
            itemRemoveButton.className = "shoppingCart__item__remove";
            itemRemoveButton.textContent = "remove";
        
            itemDescription.appendChild(itemTitle);
            itemDescription.appendChild(itemPrice);
            itemDescription.appendChild(itemRemoveButton);
        
            let itemQuantity = document.createElement("div");
            itemQuantity.className = "shoppingCart__amount";
        
            let quantityIncreaseButton = document.createElement("button");
            quantityIncreaseButton.className = "shoppingCart__amount__more";
            let quantityIncreaseButtonIcon = document.createElement("img");
            quantityIncreaseButtonIcon.className = "shoppingCart__amount__more-img";
            quantityIncreaseButtonIcon.src = "./img/icons8-arrow-24 (1).png";
            quantityIncreaseButton.appendChild(quantityIncreaseButtonIcon);
        
            let quantityDecreaseButton = document.createElement("button");
            quantityDecreaseButton.className = "shoppingCart__amount__less";
            let quantityDecreaseButtonIcon = document.createElement("img");
            quantityDecreaseButtonIcon.className = "shoppingCart__amount__less-img";
            quantityDecreaseButtonIcon.src = "./img/icons8-arrow-24.png";
            quantityDecreaseButton.appendChild(quantityDecreaseButtonIcon);
        
            let quantityNumber = document.createElement("span");
            quantityNumber.className = "shoppingCart__amount__number";
            quantityNumber.textContent = data[i].num;
        
            itemQuantity.appendChild(quantityIncreaseButton);
            itemQuantity.appendChild(quantityNumber);
            itemQuantity.appendChild(quantityDecreaseButton);
        
            shoppingCartItem.appendChild(itemImage);
            shoppingCartItem.appendChild(itemDescription);
            shoppingCartItem.appendChild(itemQuantity);
        
            let shoppingCartMain = document.querySelector(".shoppingCart__main");
            shoppingCartMain.appendChild(shoppingCartItem);

            arrayShoppingCart.push(data[i].name);
        }    
    }  
    let dataSum = JSON.parse(localStorage.getItem('Checkout'));
    if (dataSum) {
       checkout.textContent = `$${dataSum.toFixed(2)}`;
    }
});

/** Creation shoppingCart and shoppingCart items */

const sidebar = document.querySelector(".shoppingCart");
const content = document.querySelector(".content");


let summary = JSON.parse(localStorage.getItem("Checkout")) || 0;

document.querySelector(".header__button").addEventListener("click",() => {
    sidebar.style.display = "flex";
    content.classList.add("content-style");
    document.body.style.overflow = "hidden";
})
document.querySelector(".shoppingCart__close").addEventListener("click",() => {
    sidebar.style.display = "none";
    content.classList.remove("content-style");
    document.body.style.overflow = "auto";
})
function createShoppingCartItem() {
    const collectionItems = document.querySelectorAll(".collection__item");

    collectionItems.forEach(item => {
        const img = item.querySelector('.collection__img');
        const text = item.querySelector('.collection__text').textContent;
        const price = item.querySelector('.collection__price').textContent;
        let quantityNumber = document.createElement("span");
    
        let obj = {
            name: text,
            image: img.src,
            price: price,
            num: 1,
            increment: function() {
                this.num += 1;
            }
        };
        img.addEventListener("click", (e) => {
            /** calculation checkout */
            summary += Number(price.slice(1));
            checkout.textContent = `$${summary.toFixed(2)}`;
            localStorage.setItem("Checkout", JSON.stringify(summary));
            /** setting item in shopping cart */
            if (arrayShoppingCart.includes(obj.name)) {
                let data = JSON.parse(localStorage.getItem('cartItems'));
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name === obj.name) {
                        let a = data[i].num++;
                        quantityNumber.textContent = a;
                    }
                }
                localStorage.setItem("cartItems", JSON.stringify(data));
                let shoppingItems = document.querySelectorAll(".shoppingCart__item");
                shoppingItems.forEach(item => {
                    if (item.querySelector(".shoppingCart__item__title").textContent === e.target.parentNode.querySelector(".collection__text").textContent) {
                        let shoppingContent = item.querySelector(".shoppingCart__amount__number");
                        let shoppingContentNumber = shoppingContent.textContent; 
                        shoppingContent.textContent = Number(shoppingContentNumber) + Number(1);
                    }
                })
            }
            if (arrayShoppingCart.indexOf(obj.name) === -1) {
    
                let shoppingCartItem = document.createElement("div");
                shoppingCartItem.className = "shoppingCart__item";
            
                let itemImage = document.createElement("img");
                itemImage.className = "shoppingCart__item__img";
                itemImage.src = img.src;
            
                let itemDescription = document.createElement("div");
                itemDescription.className = "shoppingCart__item__description";
            
                let itemTitle = document.createElement("h2");
                itemTitle.className = "shoppingCart__item__title";
                itemTitle.textContent = text;
            
                let itemPrice = document.createElement("p");
                itemPrice.className = "shoppingCart__item__price";
                itemPrice.textContent = price;
            
                let itemRemoveButton = document.createElement("button");
                itemRemoveButton.className = "shoppingCart__item__remove";
                itemRemoveButton.textContent = "remove";
            
                itemDescription.appendChild(itemTitle);
                itemDescription.appendChild(itemPrice);
                itemDescription.appendChild(itemRemoveButton);
            
                let itemQuantity = document.createElement("div");
                itemQuantity.className = "shoppingCart__amount";
            
                let quantityIncreaseButton = document.createElement("button");
                quantityIncreaseButton.className = "shoppingCart__amount__more";
                let quantityIncreaseButtonIcon = document.createElement("img");
                quantityIncreaseButtonIcon.className = "shoppingCart__amount__more-img";
                quantityIncreaseButtonIcon.src = "./img/icons8-arrow-24 (1).png";
                quantityIncreaseButton.appendChild(quantityIncreaseButtonIcon);
            
                let quantityDecreaseButton = document.createElement("button");
                quantityDecreaseButton.className = "shoppingCart__amount__less";
                let quantityDecreaseButtonIcon = document.createElement("img");
                quantityDecreaseButtonIcon.className = "shoppingCart__amount__less-img";
                quantityDecreaseButtonIcon.src = "./img/icons8-arrow-24.png";
                quantityDecreaseButton.appendChild(quantityDecreaseButtonIcon);
            
                
                quantityNumber.className = "shoppingCart__amount__number";
                quantityNumber.textContent = 1;
            
                itemQuantity.appendChild(quantityIncreaseButton);
                itemQuantity.appendChild(quantityNumber);
                itemQuantity.appendChild(quantityDecreaseButton);
            
                shoppingCartItem.appendChild(itemImage);
                shoppingCartItem.appendChild(itemDescription);
                shoppingCartItem.appendChild(itemQuantity);
            
                let shoppingCartMain = document.querySelector(".shoppingCart__main");
                shoppingCartMain.appendChild(shoppingCartItem);
    
                let previousItems = JSON.parse(localStorage.getItem("cartItems")) || [];
                previousItems.push(obj);
                localStorage.setItem("cartItems", JSON.stringify(previousItems));
    
                arrayShoppingCart.push(text);
            }
        })
    });
}
createShoppingCartItem();
/** Checkout button */

const checkoutButton = document.querySelector('.shoppingCart__checkout');

checkoutButton.addEventListener('click', function() {
    const shoppingItem = document.querySelectorAll(".shoppingCart__item");
    localStorage.clear();
    shoppingItem.forEach(function(div) {
        div.remove();
    })
    checkout.textContent = '$0';
    arrayShoppingCart = arrayShoppingCart.slice(0,arrayShoppingCart[arrayShoppingCart.length - 1]);
    summary = 0;
});

/** Remove shoppingCart item */

let removeButtons = document.querySelectorAll(".shoppingCart__item");

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('shoppingCart__item__remove')) {
        console.log("hello");
        /** remove div element */
        const divElement = event.target.parentNode;
        const divParent = divElement.parentNode; 
        divParent.parentNode.removeChild(divParent);

        /** remove element from array */
        if (arrayShoppingCart.includes(divElement.querySelector(".shoppingCart__item__title").textContent)) {
        let index = arrayShoppingCart.indexOf(divElement.querySelector(".shoppingCart__item__title").textContent);
        if (index !== -1) {
            arrayShoppingCart.splice(index, 1);
        }
        }

        /** remove from localStorage */
        let arrayStorage = JSON.parse(localStorage.getItem("cartItems"));
        let itemToDelete = divElement.querySelector(".shoppingCart__item__title").textContent; 
        arrayStorage.forEach(item => {
            if (item.name === itemToDelete) {
                let indexStorage = arrayStorage.indexOf(item);
                if (indexStorage !== -1) {
                    arrayStorage.splice(indexStorage, 1);
                }
            }
        })
        localStorage.setItem("cartItems", JSON.stringify(arrayStorage));

        /** calculation checkout */
        let divAmount = divParent.querySelector(".shoppingCart__amount");
        summary = (Number(checkout.textContent.slice(1))) - (Number(divElement.querySelector(".shoppingCart__item__price").textContent.slice(1))) * Number(divAmount.querySelector(".shoppingCart__amount__number").textContent);
        checkout.textContent = `$${summary.toFixed(2)}`;
        
        let checkoutSum = JSON.parse(localStorage.getItem("Checkout"));
        checkoutSum = checkoutSum - (Number(divElement.querySelector(".shoppingCart__item__price").textContent.slice(1))) * Number(divAmount.querySelector(".shoppingCart__amount__number").textContent);  
        localStorage.setItem("Checkout", JSON.stringify(checkoutSum));
    }

    if (event.target.classList.contains('shoppingCart__amount__more-img')) {
        console.log("hellouuu");
        let shoppingItems = event.target.parentNode.parentNode.querySelector('.shoppingCart__amount__number');
        const divElement = event.target.parentNode.parentNode.parentNode;
        let data = JSON.parse(localStorage.getItem('cartItems'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === divElement.querySelector('.shoppingCart__item__title').textContent) {
                let a = data[i].num++;
                shoppingItems.textContent = a + 1;
            }
        }
        localStorage.setItem("cartItems", JSON.stringify(data));
        let checkoutSum = JSON.parse(localStorage.getItem("Checkout"));
        checkoutSum = checkoutSum + (Number(divElement.querySelector(".shoppingCart__item__price").textContent.slice(1)));  
        localStorage.setItem("Checkout", JSON.stringify(checkoutSum));
        summary += Number(divElement.querySelector(".shoppingCart__item__price").textContent.slice(1));
        checkout.textContent = `$${summary.toFixed(2)}`;
    }

    if (event.target.classList.contains('shoppingCart__amount__less-img')) {
        console.log("hellouuu");
        let shoppingItems = event.target.parentNode.parentNode.querySelector('.shoppingCart__amount__number');
        const divElement = event.target.parentNode.parentNode.parentNode;
        let data = JSON.parse(localStorage.getItem('cartItems'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === divElement.querySelector('.shoppingCart__item__title').textContent) {
                let a = data[i].num--;
                shoppingItems.textContent = a - 1;
            }
        }
        localStorage.setItem("cartItems", JSON.stringify(data));
        let checkoutSum = JSON.parse(localStorage.getItem("Checkout"));
        checkoutSum = checkoutSum - (Number(divElement.querySelector(".shoppingCart__item__price").textContent.slice(1)));  
        localStorage.setItem("Checkout", JSON.stringify(checkoutSum));
        summary -= Number(divElement.querySelector(".shoppingCart__item__price").textContent.slice(1));
        checkout.textContent = `$${summary.toFixed(2)}`;

        if (shoppingItems.textContent == 0) {
            divElement.parentNode.removeChild(divElement);

            if (arrayShoppingCart.includes(divElement.querySelector(".shoppingCart__item__title").textContent)) {
                let index = arrayShoppingCart.indexOf(divElement.querySelector(".shoppingCart__item__title").textContent);
                if (index !== -1) {
                    arrayShoppingCart.splice(index, 1);
                }
            }

            let arrayStorage = JSON.parse(localStorage.getItem("cartItems"));
            let itemToDelete = divElement.querySelector(".shoppingCart__item__title").textContent; 
            arrayStorage.forEach(item => {
                if (item.name === itemToDelete) {
                    let indexStorage = arrayStorage.indexOf(item);
                    if (indexStorage !== -1) {
                        arrayStorage.splice(indexStorage, 1);
                    }
                }
            })
            localStorage.setItem("cartItems", JSON.stringify(arrayStorage));
        }
    }
});

