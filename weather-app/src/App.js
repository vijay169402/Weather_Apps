import React, { Component } from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';
import ButtonM from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';
import {Helmet} from 'react-helmet';
import Titles from './components/Titles'
const API_KEY= "db8a67a61dd05f8bfbb4bf3e2f4d84e5"
const MyButton = styled(ButtonM)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'red',
  height: 48,
  padding: '0 30px',
});
export class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,  
    error:   undefined  
  }
  handleSubmit = async(event) =>{
    event.preventDefault();
    // alert('fghjk')
    console.log('dfghjnbmkjnbnjk',event.target)
    const city= this.state.city;
    const country= this.state.country;
    console.log('City',city)
    // alert(city)
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data)
    this.setState({
      temperature: data.main.temp,
      City: data.name,
      Country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }
  // handleSubmit=event=>{
  //   event.preventDefault(); 
  //   alert(this.state.city)
  // }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });

  }
  render() {
    return (
      <div>
        <div >
            
            <Helmet>
                <style>{'body { background-color: cyan; }'}</style>
            </Helmet>
                 
        </div>
       <Titles />
       <div>
               <TextField
                  //  name='city'
                   id="city"
                   label="City"
                   value={this.state.city}
                   onChange={this.handleChange}
                   margin="normal"
                    / >
                < TextField
                    // name='country'
                    id="country"
                    label="Country"
                    value={this.state.country}
                    onChange={this.handleChange}
                    margin="normal"
                    /><br></br>
                <div>
                    <MyButton className="btnn"
                     type="submit" onClick={this.handleSubmit} >     
                       get Weather
                     </MyButton>
                 </div>
          </div>
       {/* <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}

       
       /> */}
       <label style = {{color: "chocolate"}}>
         <h2>city:{this.state.City}</h2>
          <h2>country : {this.state.Country}</h2>
          <h2>Temperature:{this.state.temperature} </h2>
         <h2>humidity : {this.state.humidity}</h2>
          <h2>description: {this.state.description}</h2>
                          
                          
         </label>
      </div>
    )
  }
}
export default App
 