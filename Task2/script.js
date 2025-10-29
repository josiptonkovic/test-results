const cityInput = document.getElementById('requestedCity');
const searchBtn = document.getElementById('searchBtn');
const infoText = document.getElementById('infoText');
const temperatureText = document.getElementById('temperatureText');
const errorText = document.getElementById('errorText');


const fetchData = async () => {
    const city = cityInput.value.trim();

    if (!city) {
        errorText.textContent = 'Please enter a city name';
        temperatureText.textContent = '';
        infoText.textContent = '';
        return;
    }

    errorText.textContent = '';
    cityInput.value = '';

    const wikiApi = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(city)}`;
    const tempApi = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&APPID=edd37c4166e8b8651bed58227ace9511`;

    try {
        const response = await fetch(wikiApi);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        const info = data.extract || 'Information is currently unavailable';

        infoText.textContent = info;

    } catch (error) {
        errorText.textContent = `Error: ${error.message}`;
        infoText.textContent = '';
        temperatureText.textContent = '';
    }

    try {
        const response = await fetch(tempApi);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        const temperature = Math.round(data.main.temp - 273.15) || 'Temperature currently unavailable';

        temperatureText.textContent = `Current temperature in ${city} is ${temperature} degrees Celsius`;
    } catch (error) {
        errorText.textContent = `Error: ${error.message}`;
        infoText.textContent = '';
        temperatureText.textContent = '';
    }
};

searchBtn.addEventListener('click', fetchData);
cityInput.addEventListener("keypress", (e) => {
    if(e.key == "Enter") searchBtn.click();
})