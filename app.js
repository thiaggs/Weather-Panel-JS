const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

//Get weather on DOM Load

document.addEventListener('DOMContentLoaded', getWeather);

document.querySelector('#w-change-btn').addEventListener('click', (e)=> {

        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        weather.changeLocation(city, country);
        storage.setLocationData(city, country);
        getWeather();

        //Close modal
        $('#localModal').modal('hide');
});


function getWeather(){
        weather.getCityId()
        .then(id => {weather.getWeather(id)
        .then(data => {
                console.log(data);
                ui.paint(data);
        })});
}