import React from "react";

function WeatherForm(props) {
  return (
    <div className="card card-body">
      <form onSubmit={props.getWeather}>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="Escribe el nombre de tu ciudad"
            className="form-control"
            autoFocus
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Escribe el nombre de tu país"
            className="form-control"
            autoFocus
          />
        </div>
        <button className="btn btn-success btn-block">Enviar</button>
      </form>
    </div>
  );
}

export default WeatherForm;
