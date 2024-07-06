const API_KEY = "524fc2453b5dfb071ec3b8986ce771e0";
const form = document.querySelector("#form");
const input = document.querySelector(".form__input");
const colors = document.querySelector(":root");

switch (0) {
  case 0:
    document.body.classList.add("h0");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 1:
    document.body.classList.add("h1");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 2:
    document.body.classList.add("h2");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 3:
    document.body.classList.add("h3");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 4:
    document.body.classList.add("h4");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 5:
    document.body.classList.add("h5");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 6:
    document.body.classList.add("h6");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 7:
    document.body.classList.add("h7");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 8:
    document.body.classList.add("h8");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 9:
    document.body.classList.add("h9");
    colors.style.setProperty("--main-shadow", "rgba(0, 0, 0, 0.5)");

    break;
  case 10:
    document.body.classList.add("h10");
    colors.style.setProperty("--main-shadow", "rgba(0, 0, 0, 0.5)");

    break;
  case 11:
    document.body.classList.add("h11");
    colors.style.setProperty("--main-shadow", "rgba(0, 0, 0, 0.5)");

    break;
  case 12:
    document.body.classList.add("h12");
    colors.style.setProperty("--main-shadow", "rgba(0, 0, 0, 0.5)");

    break;
  case 13:
    document.body.classList.add("h13");
    colors.style.setProperty("--main-shadow", "rgba(0, 0, 0, 0.5)");

    break;
  case 14:
    document.body.classList.add("h14");
    colors.style.setProperty("--main-shadow", "rgba(0, 0, 0, 0.5)");

    break;
  case 15:
    document.body.classList.add("h15");
    colors.style.setProperty("--main-shadow", "rgba(0, 0, 0, 0.5)");

    break;
  case 16:
    document.body.classList.add("h16");
    colors.style.setProperty("--main-shadow", "rgba(0, 0, 0, 0.5)");

    break;
  case 17:
    document.body.classList.add("h17");
    colors.style.setProperty("--main-shadow", "rgba(0, 0, 0, 0.5)");
    break;
  case 18:
    document.body.classList.add("h18");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 19:
    document.body.classList.add("h19");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 20:
    document.body.classList.add("h20");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 21:
    document.body.classList.add("h21");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 22:
    document.body.classList.add("h22");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
    break;
  case 23:
    document.body.classList.add("h23");
    colors.style.setProperty("--main-color", "#fff");
    colors.style.setProperty("--main-placeholder", "rgba(255, 255, 255, 0.5)");
}

setInterval(() => {
  document.getElementById("timing").innerHTML = new Date().toLocaleTimeString();
}, 1000);

const timeDate = document.getElementById("date-time");
switch (new Date().getDay()) {
  case 0:
    timeDate.textContent = "Sunday";
    break;
  case 1:
    timeDate.textContent = `Monday`;

    break;
  case 2:
    timeDate.textContent = "Tuesday";

    break;
  case 3:
    timeDate.textContent = "Wednesday";

    break;
  case 4:
    timeDate.textContent = "Thursday";

    break;
  case 5:
    timeDate.textContent = "Friday";

    break;
  case 6:
    timeDate.textContent = `Saturday`;
}

form.onsubmit = submitHandler;

async function submitHandler(e) {
  e.preventDefault();

  if (!input.value.trim()) {
    alert("Enter city name");
    return;
  }
  const cityInfo = await getGeo(input.value.trim());
  if (!cityInfo.length) {
    alert("Enter correct city name");
    input.value = "";
    return;
  }
  input.value = "";
  focus(false);
  //   console.log(cityInfo[0]["lat"]);
  //   console.log(cityInfo[0]["lon"]);
  const weatherInfo = await getWeather(cityInfo[0]["lat"], cityInfo[0]["lon"]);
  console.log(weatherInfo);
  // console.log(weatherInfo.name);
  // console.log(weatherInfo.main.temp);
  // console.log(weatherInfo.main.humidity);
  // console.log(weatherInfo.wind.speed);
  console.log(weatherInfo.weather[0]["main"]);

  const weatherData = {
    name: weatherInfo.name,
    temp: weatherInfo.main.temp,
    humidity: weatherInfo.main.humidity,
    speed: weatherInfo.wind.speed,
    main: weatherInfo.weather[0]["main"],
  };

  renderWeatherData(weatherData);
}

async function getGeo(name) {
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${API_KEY}`;
  const response = await fetch(geoUrl);
  const data = await response.json();
  return data;
}

async function getWeather(lat, lon) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const response = await fetch(weatherUrl);
  const data = await response.json();
  return data;
}

function renderWeatherData(data) {
  document.querySelector(".weather-container").classList.remove("none");

  const temp = document.querySelector(".weather__temp");
  const city = document.querySelector(".weather__city");
  const mainType = document.querySelector(".main-type");
  const humidity = document.querySelector("#humidity");
  const speed = document.querySelector("#speed");
  const img = document.querySelector(".weather__img");
  temp.innerText = Math.round(data.temp) + `°c`;
  city.innerText = data.name;
  mainType.innerText = data.main;
  humidity.innerText = data.humidity + `%`;
  speed.innerText = data.speed + ` km/h`;
  img.src = `img/weather/${data.main.toLowerCase()}.png`;
}
