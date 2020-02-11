import React from "react";

function WeatherForm(props) {
  return (
    <div className="card card-body">
      <form onSubmit={props.getWeather}>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="Your city name"
            className="form-control"
            autoFocus
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Your country name"
            className="form-control"
            autoFocus
          />
        </div>
        <button className="btn btn-success btn-block">Search</button>
      </form>
    </div>
  );
}

export default WeatherForm;
