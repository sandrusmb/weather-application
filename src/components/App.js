import React from "react";
import "../stylesheets/App.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForm from "./WeatherForm";
import { WEATHER_KEY } from "./Keys";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      temperature: "",
      description: "",
      humidity: "",
      wind_speed: "",
      city: "",
      country: "",
      error: null
    };
  }

  getWeather = async ev => {
    /* console.log(
      ev.target.elements.city.value,
      ev.target.elements.country.value
    ); */

    ev.preventDefault();
    const { city, country } = ev.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (cityValue) {
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;

      const response = await fetch(API_URL);
      const data = await response.json();

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null
      });
    } else {
      this.setState({ error: "Please enter a city and a country" });
    }
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto center-block">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
