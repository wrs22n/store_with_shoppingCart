const inputCity = document.getElementById("cityInput");
const currentCityName = document.querySelector(".currentCity");
const form = document.querySelector("form");
const nextDayWeek = document.querySelectorAll(".day__week");
const nextDayWeather = document.querySelectorAll(".weather__image");
const nextDayDescription = document.querySelectorAll(".weather__next__day p");
const nextDayMinTemp = document.querySelectorAll(".weather__next__temp-min");
const nextDayMaxTemp = document.querySelectorAll(".weather__next__temp-max");
const currentDayWeather = document.querySelector(".weather__current__temp");
const currentDayWeatherFeel = document.querySelector(
    ".weather__current__temp-feel"
);
const currentDayDescription = document.querySelector(
    ".weather__current__description"
);
const currentDayCity = document.querySelector(".weather__current__city");

function getDayOfWeek(date) {
    const arr = ["SUN", "MON", "THE", "WED", "THU", "FRI", "SAT"];
    const todaysDate = new Date(date).getDay();
    return arr[todaysDate];
}

function cityTodayWeather(city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5580d32aeeb4cd13f002ec4664031d1c`
    )
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            currentCityName.textContent = `Selected: ${data.name}, ${data.sys.country}`;
            currentDayWeather.innerHTML =
                Math.round(data["main"]["temp"] - 273) + "&degC";
            currentDayWeatherFeel.innerHTML =
                "Feels like " +
                Math.round(data["main"]["feels_like"] - 273) +
                "&degC";
            currentDayDescription.textContent =
                data["weather"][0]["description"];
            currentDayCity.textContent = `${data.name}, ${data.sys.country}`;
            document.querySelector(
                ".weather__current__img"
            ).innerHTML = `<img src=https://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png>`;
        });
}

function cityNextWeather(city) {
    fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=496295e49f0a5f6dca2a88aa4281ced3&units=metric`
        // `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=daily&appid=5580d32aeeb4cd13f002ec4664031d1c`
    )
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            const date1 = new Date(data.list[0]["dt_txt"]);
            const date2 = new Date(data.list[0]["dt_txt"]);
            const date3 = new Date(data.list[0]["dt_txt"]);
            const date4 = new Date(data.list[0]["dt_txt"]);
            let nextDay1 = new Date(date1.setDate(date1.getDate() + 1));
            let nextDay2 = new Date(date2.setDate(date2.getDate() + 2));
            let nextDay3 = new Date(date3.setDate(date3.getDate() + 3));
            let nextDay4 = new Date(date4.setDate(date4.getDate() + 4));
            console.log(nextDay1);
            console.log(nextDay2);
            console.log(nextDay3);
            console.log(nextDay4);
            let tempMin1 = Infinity;
            let tempMax1 = -Infinity;
            let tempMin2 = Infinity;
            let tempMax2 = -Infinity;
            let tempMin3 = Infinity;
            let tempMax3 = -Infinity;
            let tempMin4 = Infinity;
            let tempMax4 = -Infinity;
            for (let i = 0; i < data.list.length - 1; i++) {
                let currentDate = new Date(data.list[i]["dt_txt"]);
                if (currentDate.getDate() === nextDay1.getDate()) {
                    if (tempMin1 > data.list[i]["main"]["temp_min"]) {
                        tempMin1 = data.list[i]["main"]["temp_min"];
                    }
                    if (tempMax1 < data.list[i]["main"]["temp_max"]) {
                        tempMax1 = data.list[i]["main"]["temp_max"];
                    }
                    nextDayMinTemp[0].innerHTML =
                        Math.round(tempMin1) + "&degC";
                    nextDayMaxTemp[0].innerHTML =
                        Math.round(tempMax1) + "&degC";
                    nextDayWeek[0].textContent = getDayOfWeek(
                        data.list[i]["dt_txt"]
                    );
                    nextDayWeather[0].innerHTML = `<img src=https://openweathermap.org/img/wn/${data.list[i]["weather"][0]["icon"]}@2x.png>`;
                    nextDayDescription[0].textContent =
                        data.list[i]["weather"][0]["description"];
                }
                if (currentDate.getDate() === nextDay2.getDate()) {
                    if (tempMin2 > data.list[i]["main"]["temp_min"]) {
                        tempMin2 = data.list[i]["main"]["temp_min"];
                    }
                    if (tempMax2 < data.list[i]["main"]["temp_max"]) {
                        tempMax2 = data.list[i]["main"]["temp_max"];
                    }
                    nextDayMinTemp[1].innerHTML =
                        Math.round(tempMin2) + "&degC";
                    nextDayMaxTemp[1].innerHTML =
                        Math.round(tempMax2) + "&degC";
                    nextDayWeek[1].textContent = getDayOfWeek(
                        data.list[i]["dt_txt"]
                    );
                    nextDayWeather[1].innerHTML = `<img src=https://openweathermap.org/img/wn/${data.list[i]["weather"][0]["icon"]}@2x.png>`;
                    nextDayDescription[1].textContent =
                        data.list[i]["weather"][0]["description"];
                }
                if (currentDate.getDate() === nextDay3.getDate()) {
                    if (tempMin3 > data.list[i]["main"]["temp_min"]) {
                        tempMin3 = data.list[i]["main"]["temp_min"];
                    }
                    if (tempMax3 < data.list[i]["main"]["temp_max"]) {
                        tempMax3 = data.list[i]["main"]["temp_max"];
                    }
                    nextDayMinTemp[2].innerHTML =
                        Math.round(tempMin3) + "&degC";
                    nextDayMaxTemp[2].innerHTML =
                        Math.round(tempMax3) + "&degC";
                    nextDayWeek[2].textContent = getDayOfWeek(
                        data.list[i]["dt_txt"]
                    );
                    nextDayWeather[2].innerHTML = `<img src=https://openweathermap.org/img/wn/${data.list[i]["weather"][0]["icon"]}@2x.png>`;
                    nextDayDescription[2].textContent =
                        data.list[i]["weather"][0]["description"];
                }
                if (currentDate.getDate() === nextDay4.getDate()) {
                    if (tempMin4 > data.list[i]["main"]["temp_min"]) {
                        tempMin4 = data.list[i]["main"]["temp_min"];
                    }
                    if (tempMax4 < data.list[i]["main"]["temp_max"]) {
                        tempMax4 = data.list[i]["main"]["temp_max"];
                    }
                    nextDayMinTemp[3].innerHTML =
                        Math.round(tempMin4) + "&degC";
                    nextDayMaxTemp[3].innerHTML =
                        Math.round(tempMax4) + "&degC";
                    nextDayWeek[3].textContent = getDayOfWeek(
                        data.list[i]["dt_txt"]
                    );
                    nextDayWeather[3].innerHTML = `<img src=https://openweathermap.org/img/wn/${data.list[i]["weather"][0]["icon"]}@2x.png>`;
                    nextDayDescription[3].textContent =
                        data.list[i]["weather"][0]["description"];
                }
            }
        })
        .catch((error) => console.log(error));
}
console.log(nextDayMinTemp[2]);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const currentCity = inputCity.value;
    cityNextWeather(currentCity);
    cityTodayWeather(currentCity);
});

cityTodayWeather("Kyiv");
cityNextWeather("Kyiv");
