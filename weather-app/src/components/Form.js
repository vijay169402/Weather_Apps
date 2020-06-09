import React, { Component } from 'react'
//import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField';
import ButtonM from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';
const MyButton = styled(ButtonM)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'red',
    height: 48,
    padding: '0 30px',
  });
export class Form extends Component { 
       constructor(props){
         super(props);
         this.state = {
           city:this.props.city,
           country:this.props.country,
           GetWeather:this.props.GetWeather
         }
       console.log('CITY',this.state.city)
       } 
      handleSubmit = event => {
     event.preventDefault(); 
        alert(this.state.city)
      }
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    
      }
    render() {   
        return (
            <div>
               
                <TextField
                   name='city'
                   id="city"
                   label="City"
                   value={this.state.city}
                   onChange={this.handleChange}
                   margin="normal"
                    / >
                < TextField
                    name='country'
                    id="country"
                    label="Country"
                    value={this.state.country}
                    onChange={this.handleChange}
                    margin="normal"
                    /><br></br>
                <div>
                    <MyButton className="btnn"
                    type="submit" onClick={this.state.GetWeather} >     
                       get Weather
                   </MyButton>
                 </div>
            </div>
        )
    }
}

export default Form
