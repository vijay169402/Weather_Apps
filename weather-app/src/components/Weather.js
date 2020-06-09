import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField';
// import AppBar from '@material-ui/core/AppBar'
export class Weather extends Component {
    render() {
        return (
            <div style={{color: "indianred"}}>
              {/* <AppBar position="static"> */}
              <p> <h3 >Location: {this.props.city},{this.props.country}</h3></p>
                <p><h3>Temp: {this.props.temperature}</h3></p>
                <p><h3>Humidity:{this.props.humidity}</h3></p>
                <p><h3>Conditions: {this.props.description}</h3></p>
                {/* {this.props.error} */}
                {/* < /AppBar> */}
                {/* <h1  style={{color: "red"}}>Weather Finder</h1> */}
                
            </div>
        )
    }
}

export default Weather
