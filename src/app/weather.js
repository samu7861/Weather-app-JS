//El encargado de comunicarse conn la api para pedir los datos del clima.
export class Weather{
    constructor(city, countryCode){
        this.apikey = "bf2280ebef7e1a12136929a87bbd4d2b"
        this.city = city;
        this.countryCode = countryCode
    }
};

getWeather(){
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
};