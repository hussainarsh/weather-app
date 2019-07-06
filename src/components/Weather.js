import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Location:
        <span className="weather__value">
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.tempr && (
      <p className="weather__key">
        Temperature: <span className="weather__value">{props.tempr}</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity: <span className="weather__value">{props.humidity}</span>
      </p>
    )}
    {props.desc && (
      <p className="weather__key">
        Conditions:<span className="weather__value">{props.desc}</span>
      </p>
    )}
    {props.error && <p className="weather__key">{props.error}</p>}
  </div>
);

export default Weather;
