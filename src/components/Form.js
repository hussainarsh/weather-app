import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <p className="weather__key">
          <span className="weather__value">Note:</span> Please use city/country
          value as per OpenWeather API
        </p>
        <form onSubmit={this.props.weatherInfoProps}>
          <input type="text" name="city" placeholder="City eg: Delhi" />
          <input type="text" name="country" placeholder="Country eg: India" />
          <button>Find</button>
        </form>
      </div>
    );
  }
}

export default Form;
