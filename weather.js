class Weather {
    constructor(city, country){
        this.apiKey = '09b763db198c8c39ea41cd8f906eb8c9';
        this.city = city;
        this.country = country;
    }


    getCityId = async() => {

        const response = await fetch(`city.list.json`);
        let data = await response.json();
        const that = this;
        let cityId;
        data.forEach(function(current){
            if (current.name === that.city && current.country === that.country){
                cityId = current.id;
            }
        });

        return cityId;
    }


    getWeather = async(id) => {
        
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${this.apiKey}`);
        const data = await response.json();

        return data;
        
    }

    changeLocation = (city, country) => {
        this.city = city;
        this.country = country;
    }
}