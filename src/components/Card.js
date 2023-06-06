import React, { useEffect } from "react";
import { isEmpty } from "./Utils";

const Card = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data) {
    return null; // Render nothing if data is null or undefined
  }

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const formatTimestampToTime = (timestamp, timezoneOffset) => {
    const date = new Date(timestamp * 1000 + timezoneOffset * 1000);
    return date.toLocaleString("fr-FR", options);
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2>
          {!isEmpty(data) && data.name}
          <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt="weather icon"
          />
        </h2>
        <h3>
          {!isEmpty(data) &&
            data.weather[0].description[0].toUpperCase() +
              data.weather[0].description.slice(1)}
        </h3>
        <div className="grid-card">
          <div className="temperature">
            <h4>Temperature</h4>
            <p>{data.main.temp}°C</p>
            <p>Min : {data.main.temp_min}°C</p>
            <p>Max : {data.main.temp_max}°C</p>
          </div>
          <div className="temps">
            <h4>Temps</h4>
            <p>Pression Atmosphérique : {data.main.pressure} hPa</p>
            <p>Humidité : {data.main.humidity}%</p>
            <p>Visibilité : {data.visibility}m</p>
          </div>
          <div className="vent">
            <h4>Vent</h4>
            <p>Vitesse : {data.wind.speed} Km/h</p>
            <p>Degré : {data.wind.deg}°</p>
          </div>
          <div className="localisation">
            <h4>Localisation</h4>
            <p>{data.name}</p>
            <p>{data.sys.country}</p>
            <p>Latitude : {data.coord.lat}</p>
            <p>Longitude : {data.coord.lon}</p>
          </div>
          <div className="heure">
            <h4>Heure locale : </h4>
            <p>{formatTimestampToTime(data.dt, data.timezone)}</p>
            <p>
              Lever du soleil :{" "}
              {formatTimestampToTime(data.sys.sunrise, data.timezone)}
            </p>
            <p>
              Coucher du soleil :{" "}
              {formatTimestampToTime(data.sys.sunset, data.timezone)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
