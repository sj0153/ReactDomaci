import React, { Component } from 'react'
import Polje from "./Polje"
import "./style/Polje.css"

export default class Dugme extends Component {

    constructor(props){
        super(props);
        this.state = {
            color: this.props.color,
            clickFunction: props.clickFunction
        }
        this.kliknuto = this.kliknuto.bind(this);
   
    }

    kliknuto(){
        this.state.clickFunction(this.state.color);
    }

    render() {
        return (
            <button className="dugme" onClick={this.kliknuto}>
                <Polje color={this.state.color}/>
            </button>
        )
    }
}
