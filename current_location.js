const city_location = document.getElementById('city-location');

const city_temp = document.getElementById('city-temperature');

const city_time = document.getElementById('city-time');
const backButton = document.getElementById('back-button');

backButton.addEventListener('click', () =>
{
    window.location.href = "index.html";
});

const getData_coordinates = async (lat, long) =>
{
    const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5780cf0fcc95417f80a85338260605&q=${lat},${long}&aqi=no`
    );

    return data.json();
}


const successfully_fetch = async (x) =>
{
    console.log(x);

    const city_data = await getData_coordinates(
        x.coords.latitude,
        x.coords.longitude
    );

    console.log(city_data);

    city_location.innerText =
    `${city_data.location.name},
     ${city_data.location.country}`;

    city_temp.innerText =
    `${city_data.current.temp_c} °C`;

    city_time.innerText =
    `${city_data.location.localtime}`;
}


const failed_fetch = () =>
{
    console.log("Kindly give the permission for location");

    city_location.innerText =
    "Location permission denied";
}


navigator.geolocation.getCurrentPosition(
    successfully_fetch,
    failed_fetch
);