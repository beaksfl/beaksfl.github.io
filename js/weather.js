function onGeoOk(position) {
  API_KEY = api_key;
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  setApi();
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#wehater span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
    })
  );
}
function onGeoError() {
  alert("Can't find your location");
}

function setApi() {
  if (api_key === null) {
    var api_key = prompt("Enter your API key");
    localStorage.setItem("api_key", API_KEY);
  } else {
    localStorage.getItem("api_key");
  }
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
