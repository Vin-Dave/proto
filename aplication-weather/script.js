class Weather {
  constructor(city) {
    this.apiKey = "b26b9d8806518649bf70e9463a394a82";
    this.city = city;
    this.temperature = "";
    this.description = "";
    this.icon = "";
    this.location = "";
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`
    );
    const responseData = await response.json();

    this.temperature = Math.round(responseData.main.temp);
    this.description = responseData.weather[0].description;
    this.icon = responseData.weather[0].icon;
    this.location = responseData.name;
  }
}

class UI {
  constructor() {
    this.weatherContainer = document.querySelector(".weather-container");
    this.location = document.querySelector(".location");
    this.icon = document.querySelector(".weather-icon");
    this.temperature = document.querySelector(".temperature");
    this.description = document.querySelector(".description");
  }

  displayWeather(weather) {
    this.location.textContent = weather.location;
    this.icon.style.backgroundImage = `url('https://openweathermap.org/img/w/${weather.icon}.png')`;
    this.temperature.textContent = `${weather.temperature}°C`;
    this.description.textContent = weather.description;

    this.weatherContainer.classList.add("visible");
  }

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.querySelector("form");
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const city = document.querySelector("#city").value.trim();
  const weather = new Weather(city);
  const ui = new UI();

  if (city === "") {
    ui.showAlert("Wpisz nazwę miasta", "error");
  } else {
    weather
      .getWeather()
      .then(() => {
        ui.displayWeather(weather);
      })
      .catch((error) => {
        ui.showAlert(`Nie można pobrać danych pogodowych dla ${city}`, "error");
      });
  }

  document.querySelector("form").reset();
});
