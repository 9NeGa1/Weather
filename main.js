const apiKey = "f7922902abd3107e3ef9cb6a812c4d36";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-image i");

const weather = document.querySelector(".weather");
const error = document.querySelector(".error");



async function checkWeather(city) {
    const response = await fetch(apiURL+city+`&apikey=${apiKey}`)

    if (response.status == 404) {
        error.style.display = "block";
        weather.style.display = "none";

        
    }
    const data = await response.json();
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#8451";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"


if(data.weather[0].main === "Clear") {
    weatherIcon.className = "fa-solid fa sun";
}
else if(data.weather[0].main === "Rain") {
    weatherIcon.className = "fa-solid fa-cloud-rain";
}
else if(data.weather[0].main === "Mist") {
    weatherIcon.className = "fa-solid fa-cloud-mist";
}
else if(data.weather[0].main === "Drizzle") {
    weatherIcon.className = "fa-solid fa-cloud-drizzle";
}

        error.style.display = "none";
        weather.style.display = "block";
}


searchButton.addEventListener("click", () => {

    checkWeather(searchInput.value);
    searchInput.value = "";
})

searchInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        checkWeather(searchInput.value);
        searchInput.value = "";
    }
    
})