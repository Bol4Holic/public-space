const API_KEY = "dfc4c9e1d7a90ed1d35e3467526fd6c5";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} \n ${data.main.temp}℃`;
        });
}
function onGeoError(){
    alert("can't find your location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);