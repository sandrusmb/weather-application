import React from "react";

function WeatherInfo(props) {
  console.log(props);
  return (
    <div>
      {props.error && (
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      )}
      {props.temperature ? (
        <div className="card card-body">
          <p>
            Location: {props.city}, {props.country}
          </p>
          <p>
            Temperature: {props.temperature} ºC, {props.description}
          </p>
          <p>Humidity: {props.humidity}%</p>
          <p>Wind speed: {props.wind_speed}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default WeatherInfo;

/* // lo mismo que

const WeatherInfo = props => {
  return <div>Weather Info</div>;
};

const WeatherInfo = function(props) {
  return <div>Weather Info</div>;
}; */
