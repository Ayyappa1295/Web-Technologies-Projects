const API_KEY = "YOUR_OPENWEATHER_API_KEY";

async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    const message = document.getElementById("message");

    if (city === "") {
        message.textContent = "⚠️ Please enter a city name.";
        return;
    }

    message.textContent = "⏳ Loading weather...";

    try {

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);

        message.textContent = "";

    } catch (error) {

        message.textContent =
            "❌ City not found. Please enter a valid city name.";
    }
}


function displayWeather(data) {

    const cityName = data.name;

    const temperature =
        Math.round(data.main.temp);

    const feelsLike =
        Math.round(data.main.feels_like);

    const humidity =
        data.main.humidity;

    const wind =
        (data.wind.speed * 3.6).toFixed(1);

    const clouds =
        data.clouds.all;

    const description =
        data.weather[0].description;

    const icon =
        data.weather[0].main;

    document.getElementById("cityName").textContent =
        `${cityName}, ${data.sys.country}`;

    document.getElementById("temperature").textContent =
        temperature;

    document.getElementById("feelsLike").textContent =
        `${feelsLike}°C`;

    document.getElementById("humidity").textContent =
        `${humidity}%`;

    document.getElementById("wind").textContent =
        `${wind} km/h`;

    document.getElementById("clouds").textContent =
        `${clouds}%`;

    document.getElementById("description").textContent =
        description;

    document.getElementById("date").textContent =
        new Date().toDateString();

    document.getElementById("weatherIcon").textContent =
        getWeatherIcon(icon);
}


function getWeatherIcon(weather) {

    switch (weather) {

        case "Clear":
            return "☀️";

        case "Clouds":
            return "☁️";

        case "Rain":
            return "🌧️";

        case "Drizzle":
            return "🌦️";

        case "Thunderstorm":
            return "⛈️";

        case "Snow":
            return "❄️";

        case "Mist":
        case "Smoke":
        case "Haze":
        case "Dust":
        case "Fog":
        case "Sand":
        case "Ash":
            return "🌫️";

        default:
            return "🌤️";
    }
}


document
    .getElementById("cityInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            getWeather();
        }

    });
