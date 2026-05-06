const gps_button = document.getElementById('current_location');
const city_name_button = document.getElementById('city_name');

const getCurrentLocation = () => 
{
    window.location.href = "current_location.html"
}
const getCityName = () =>
{
    window.location.href = "city_name.html"
}
gps_button.addEventListener('click', getCurrentLocation);
city_name_button.addEventListener('click', getCityName);