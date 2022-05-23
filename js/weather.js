API_KEY = document.querySelector("#api_key");
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#wehater span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
      setAndHide();
    })
  );
}
function onGeoError() {
  const newKey = document.createElement("input");
  alert("Can't find your location");
}

function setAndHide() {
  localStorage.setItem("api_key", API_KEY);
  api_key.classList.add("hidden");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
