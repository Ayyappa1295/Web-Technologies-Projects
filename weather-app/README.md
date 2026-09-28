# 🌦️ Weather App

A responsive and modern **Weather Application** built using **HTML, CSS, and JavaScript**.
The application uses the **OpenWeather API** to fetch and display real-time weather information for any searched city.

---

## 📌 Project Overview

The Weather App allows users to search for a city and view its current weather conditions.

It displays important weather information such as:

* 🌡️ Current Temperature
* 🌤️ Weather Condition
* 💧 Humidity
* 💨 Wind Speed
* ☁️ Cloudiness
* 🌡️ Feels Like Temperature
* 🌍 Country
* 📅 Current Date

The project also includes a responsive design that works on desktop, tablet, and mobile devices.

---

## 🚀 Features

* 🔎 Search weather by city name
* 🌡️ Real-time temperature
* 🌤️ Dynamic weather icons
* 💧 Humidity information
* 💨 Wind speed information
* ☁️ Cloudiness percentage
* 🌡️ Feels-like temperature
* 🌍 Country information
* ⌨️ Press Enter to search
* 📱 Responsive design
* ⚡ Fast API-based weather data
* ❌ Error handling for invalid cities
* 🎨 Modern and clean user interface

---

## 🛠️ Technologies Used

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| HTML5           | Website structure             |
| CSS3            | Styling and responsive design |
| JavaScript      | Application logic             |
| OpenWeather API | Real-time weather data        |

---

## 📂 Project Structure

```text
weather-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📄 File Description

### `index.html`

Contains the structure of the Weather App, including:

* Search box
* Search button
* Weather card
* Temperature section
* Weather details
* Humidity
* Wind speed
* Cloudiness
* Feels-like temperature

### `style.css`

Contains the complete styling of the application:

* Background design
* Weather card
* Search box
* Buttons
* Weather information cards
* Responsive layout
* Mobile-friendly design

### `script.js`

Contains the application's functionality:

* City search
* API request
* Weather data processing
* Temperature conversion
* Wind speed conversion
* Dynamic weather icons
* Error handling
* Enter-key search

---

## 🌐 API Used

This project uses the **OpenWeather API** to retrieve current weather information.

The application sends a request based on the city entered by the user and receives weather information in JSON format.

Example API request structure:

```text
https://api.openweathermap.org/data/2.5/weather
```

---

## 🔑 API Key Setup

To use the application with live weather data, you need an OpenWeather API key.

In `script.js`, locate:

```javascript
const API_KEY = "YOUR_OPENWEATHER_API_KEY";
```

Replace it with your API key.

Example:

```javascript
const API_KEY = "YOUR_API_KEY";
```

### ⚠️ Security Note

Do **not** publish a real API key inside a public GitHub repository.

For a production application, the API request should be handled through a backend/server-side environment or another secure secret-management method.

---

## ▶️ How to Run the Project

### Method 1 — VS Code

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open `index.html`.
4. Use **Live Server** to run the application.
5. Enter a city name.
6. Click **Search**.

---

### Method 2 — Browser

You can also open:

```text
index.html
```

directly in a web browser.

For API-related functionality, using a local development server such as Live Server is recommended.

---

## 🔍 Example Searches

You can search for cities such as:

```text
Bengaluru
Hyderabad
Chennai
Mumbai
Delhi
Tokyo
Seoul
London
New York
```

---

## 📱 Responsive Design

The Weather App is designed to work across different screen sizes.

### 💻 Desktop

The application displays the weather information in a wide card layout.

### 📱 Mobile

The layout automatically adjusts for smaller screens.

---

## 🎯 Learning Objectives

This project helps demonstrate practical knowledge of:

* HTML page structure
* CSS styling
* CSS Flexbox
* CSS Grid
* Responsive Web Design
* JavaScript DOM manipulation
* JavaScript functions
* Async/Await
* Fetch API
* JSON data
* API integration
* Error handling
* Event listeners

---

## 🔮 Future Improvements

Possible future features include:

* 📍 Current location weather
* 📅 5-day weather forecast
* 🌙 Dark mode
* 🌡️ Celsius/Fahrenheit switch
* 🔍 Search history
* ⭐ Favorite cities
* 🕐 Hourly forecast
* 🌅 Sunrise and sunset time
* 🌧️ Rain probability
* 🌬️ Air quality information
* 🗺️ Weather map
* 🎨 Weather-based background animations

---

## 📸 Screenshots

Add screenshots of your application here after completing the project.

Example:

```text
screenshots/
├── weather-home.png
└── weather-search.png
```

You can later add them to this README using:

```markdown
![Weather App](screenshots/weather-home.png)
```

---

## 💡 Project Highlights

This project demonstrates how frontend technologies can communicate with an external REST API to retrieve and display real-time information.

It combines:

```text
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
Fetch API
  ↓
OpenWeather API
  ↓
JSON Weather Data
  ↓
Weather UI
```

---

## 👨‍💻 Author

**Ayyappa1295**

GitHub:
https://github.com/Ayyappa1295

---

## 📜 License

This project is created for **learning, practice, and portfolio purposes**.

---

⭐ If you find this project useful, consider giving the repository a star!
