const weatherData = [
    {
        location: "Kolkata",
        condition: "Humid",
        temp: "30°C",
        humidity: "78%",
        wind: "10 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/728/728093.png",
        bg: "linear-gradient(145deg, #ff9dc9, #ffe0f1)"
    },
    {
        location: "Bengaluru",
        condition: "Cloudy",
        temp: "22°C",
        humidity: "60%",
        wind: "7 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/414/414927.png",
        bg: "linear-gradient(145deg, #c4d7ff, #e7eeff)"
    },
    {
        location: "Mumbai",
        condition: "Rainy",
        temp: "27°C",
        humidity: "90%",
        wind: "15 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/3313/3313998.png",
        bg: "linear-gradient(145deg, #8ac2ff, #dcedff)"
    },
    {
        location: "Delhi",
        condition: "Sunny",
        temp: "35°C",
        humidity: "40%",
        wind: "12 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
        bg: "linear-gradient(145deg, #ffd36a, #ffecb3)"
    },
    {
        location: "Chennai",
        condition: "Windy",
        temp: "32°C",
        humidity: "65%",
        wind: "20 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/5531/5531551.png",
        bg: "linear-gradient(145deg, #9ae8ff, #e8faff)"
    },
    {
        location: "Hyderabad",
        condition: "Partly Cloudy",
        temp: "28°C",
        humidity: "72%",
        wind: "11 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
        bg: "linear-gradient(145deg, #ffcbb1, #ffe8dc)"
    }
];

let index = 0;

const card = document.getElementById("card");

// REFRESH BUTTON
document.getElementById("refreshBtn").addEventListener("click", () => {
    index = (index + 1) % weatherData.length;
    const data = weatherData[index];

    // Re-trigger animation
    card.style.animation = "none";
    setTimeout(() => {
        card.style.animation = "fadeIn 0.4s ease, slideUp 0.4s ease";
    }, 10);

    document.getElementById("location").textContent = data.location;
    document.getElementById("condition").textContent = data.condition;
    document.getElementById("temperature").textContent = data.temp;
    document.getElementById("humidity").textContent = "Humidity: " + data.humidity;
    document.getElementById("wind").textContent = "Wind: " + data.wind;
    document.getElementById("weatherIcon").src = data.icon;

    card.style.background = data.bg;
});

/* LIGHT & DARK MODE */
document.getElementById("modeToggle").addEventListener("click", () => {
    const body = document.body;

    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        modeToggle.textContent = "☀️ Light Mode";
    } else {
        body.classList.replace("dark", "light");
        modeToggle.textContent = "🌙 Dark Mode";
    }
});
