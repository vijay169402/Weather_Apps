import React, { Component } from 'react'

import './App.css';
//import WeatherComponent from './components/weatherComponent'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
const API_KEY= "db8a67a61dd05f8bfbb4bf3e2f4d84e5"
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,  
    error:   undefined  
  }
  getWeather = async(e) =>{
    e.preventDefault();
    console.log('dfghjnbmkjnbnjk',e.target)
    console.log('city',e.target.elements.city.value);
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data)
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }
  render() {
    return (
      <div>
       <Titles />
       <Form GetWeather={this.getWeather}/>
       <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}

       
       />
      </div>
    )
  }
}

export default App