import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import ButtonM from '@material-ui/core/Button'
export class FormCopy extends Component {
    render() {
        return (
            <div>
                <form onSubmit = {this.props.GetWeather}>
                    <input  type = 'text' name = 'city' /><br></br>
                    <input  type = 'text' name = 'city' /><br></br>
                    <button type = 'submit' >Get Weather</button>
                </form>
            </div>
        )
    }
}

export default FormCopy
