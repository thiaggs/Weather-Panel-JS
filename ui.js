class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.minTemp = document.getElementById('w-min-temp');
        this.maxTemp = document.getElementById('w-max-temp');
        this.wind = document.getElementById('w-wind');

    }

    paint(weather){
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${(((weather.main.temp - 273.15) * (9/5)) + 32).toFixed(1)}ºF (${(weather.main.temp - 273.15).toFixed(1)}ºC)`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${(((weather.main.feels_like - 273.15) * (9/5)) + 32).toFixed(1)}ºF (${(weather.main.feels_like - 273.15).toFixed(1)}ºC)`;
        this.minTemp.textContent = `Minimum Temperature: ${(((weather.main.temp_min - 273.15) * (9/5)) + 32).toFixed(1)}ºF (${(weather.main.temp_min - 273.15).toFixed(1)}ºC)`;
        this.maxTemp.textContent = `Maximum Temperature: ${(((weather.main.temp_max - 273.15) * (9/5)) + 32).toFixed(1)}ºF (${(weather.main.temp_max - 273.15).toFixed(1)}ºC)`;
        this.wind.textContent = `Wind Speed: ${(weather.wind.speed * 3.6).toFixed(1)} Km/h`;

    }
}