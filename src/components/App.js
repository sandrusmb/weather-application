import React from "react";
import "../stylesheets/App.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForm from "./WeatherForm";

class App extends React.Component {
  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <WeatherForm />
            <WeatherInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
