import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "e09a5187b00b5e578ed5185161df294f";
class App extends React.Component {
  state = {
    tempr: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    desc: undefined,
    error: undefined
  };
  weatherInfo = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
    if (data.cod && data.message === "city not found") {
      this.setState({
        tempr: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        desc: undefined,
        error: "Please enter valid city & country"
      });
    } else {
      this.setState({
        tempr: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        error: ""
      });
    }
  };
  render() {
    return (
      <div>
        <wrappper className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form weatherInfoProps={this.weatherInfo} />
                  <Weather
                    tempr={this.state.tempr}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    desc={this.state.desc}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </wrappper>
      </div>
    );
  }
}

export default App;
