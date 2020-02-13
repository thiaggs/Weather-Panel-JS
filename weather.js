class Weather {
    constructor(city, state){
        this.apiKey = '09b763db198c8c39ea41cd8f906eb8c9';
        this.city = city;
        this.state = state;
    }


    getCityId = async() => {

        const response = await fetch(`city.list.json`);
        let data = await response.json();
        const that = this;
        let cityId;
        data.forEach(function(current){
            if (current.name === that.city){
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
}