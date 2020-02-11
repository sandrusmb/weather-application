import React from "react";
import "../stylesheets/App.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForm from "./WeatherForm";
import { WEATHER_KEY } from "./Keys";

class App extends React.Component {
  getWeather = async ev => {
    /* console.log(
      ev.target.elements.city.value,
      ev.target.elements.country.value
    ); */

    ev.preventDefault();
    const { city, country } = ev.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}`;

    const response = await fetch(API_URL);
    const data = response.json();
    console.log(data);
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto center-block">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
