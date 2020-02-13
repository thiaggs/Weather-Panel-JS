const weather = new Weather('Rio de Janeiro', 'RJ');

console.log(weather);

// weather.getCityId()
//     .then(data => {console.log(data)});

weather.getCityId()
        .then(id => {weather.getWeather(id)
        .then(data => {
                console.log(data);
        })});
