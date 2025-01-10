const apiKey = "eb69d201806c54c00955dc29d5dff815";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInp = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404) {
        document.querySelector(".error p").style.display = "block"
    } else {
         document.querySelector(".error p").style.display = "none"
    }
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.ceil(data.main.temp) + "°c";
    document.querySelector(".humadity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km";

    if(data.weather[0].main === "Clear") {
        document.querySelector(".wimage").src = "./images/clear.png";
    } else if(data.weather[0].main === "Clouds") {
        document.querySelector(".wimage").src = "./images/clouds.png";
    } else if(data.weather[0].main === "Drizzle") {
        document.querySelector(".wimage").src = "./images/drizzle.png";
    }  else if(data.weather[0].main === "Mist") {
        document.querySelector(".wimage").src = "./images/mist.png";
    } else if(data.weather[0].main === "Rain") {
        document.querySelector(".wimage").src = "./images/rain.png";
    } else if(data.weather[0].main === "Snow") {
        document.querySelector(".wimage").src = "./images/snow.png";
    } else {
        document.querySelector(".wimage").src = "./images/mist.png";
    }
}

searchButton.addEventListener("click", () => {
    checkWeather(searchInp.value);
})
