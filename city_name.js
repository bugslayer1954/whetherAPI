const button = document.getElementById('search-button');
const input = document.getElementById('city-input');
const city_location = document.getElementById('city-location')
const city_temp = document.getElementById('city-temperature')
const city_time = document.getElementById('city-time')
const backButton = document.getElementById('back-button');

backButton.addEventListener('click', () =>
{
    window.location.href = "index.html";
});
 const getdata = async (city) => 
{
     const city_data = await fetch(`https://api.weatherapi.com/v1/current.json?key=5780cf0fcc95417f80a85338260605&q=${city}&aqi=no`);
     return city_data.json();
}

button.addEventListener('click', async() => 
{
    const city = input.value;
   const city_data = await getdata(city);
    console.log(city_data);
    city_location.innerText = `Country:${city_data.location.country} latitude:${city_data.location.lat} longitude: ${city_data.location.lon}`
    city_temp.innerText = `temperature(in degree centigrade): ${city_data.current.temp_c} temperature(in fahrenheit): ${city_data.current.temp_f} `
    city_time.innerText = `Localtime: ${city_data.location.localtime}`

})