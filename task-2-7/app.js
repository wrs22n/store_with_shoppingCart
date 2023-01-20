const darkMode = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
const countries = document.querySelector(".main__countries");
const continents = document.querySelector(".search__continents");
const countryInput = document.querySelector(".search__country");

/* create div */
function createCountriesElements(url) {
    fetch(url)
    .then((resp)=>resp.json())
    .then((data) => {
        console.log(data);  
        for (let i = 0; i < data.length; i++) {
            if ((data[i]['name']['common']).toLowerCase() === (countryInput.value).toLowerCase()) {
                const element = data[i];
                data[i] = data[0];
                data[0] = element;
            }
        }
        let createCountry = '';
        for (let i = 0; i < data.length; i++) {
            createCountry += `
                <div class="main__country">
                    <img class="country__img" src="" alt="">
                    <div>
                        <h2 class="country__name"></h2>
                        <p class="country__population"></p>
                        <p class="country__region"></p>
                        <p class="country__capital"></p>
                    </div>
                </div>
            `
            countries.innerHTML = createCountry;
        }
        const countryImg = document.querySelectorAll(".country__img");
        const countryName = document.querySelectorAll(".country__name");
        const countryPopulation = document.querySelectorAll(".country__population");
        const countryRegion = document.querySelectorAll(".country__region");
        const countryCapital = document.querySelectorAll(".country__capital");
        for (let i = 0; i < data.length; i++) {
            countryImg[i].src = data[i]['flags']['png'];
            countryName[i].textContent = data[i]['name']['common'];
            countryPopulation[i].textContent = `Population: ${(data[i]['population']).toLocaleString()}`;
            countryRegion[i].textContent = `Region: ${data[i]['region']}`;
            countryCapital[i].textContent =  `Capital: ${data[i]['capital']}`;
        }
    });
}

/*  dark mode */ 
darkMode.addEventListener("click",(e) => {
    e.preventDefault();
    if (localStorage.getItem("theme") === "dark") {
        localStorage.removeItem("theme");
    } else {
        localStorage.setItem("theme", "dark");;
    }
    addRemoveDarkMode()
})

function addRemoveDarkMode() {
    if (localStorage.getItem("theme") === "dark") {
        wrapper.classList.add("dark");
    } else {
        wrapper.classList.remove("dark");
    }
}

addRemoveDarkMode()

/* creation all countries */

function createAllCountries() {
    let url = 'https://restcountries.com/v3.1/all';
    createCountriesElements(url);
}

createAllCountries()

/* filter by region */

continents.addEventListener('change',(e) => {
    region(e.target.value);
})

function region(region) {
    let url = `https://restcountries.com/v3.1/region/${region}`;
    createCountriesElements(url);
}

/* country selection */

countryInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let url = 'https://restcountries.com/v3.1/all';
        createCountriesElements(url);
    }
})
