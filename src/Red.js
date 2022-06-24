import React, { Component } from 'react'
import Polje from './Polje'
import './style/Red.css';

export default class Red extends Component {

    constructor(props) {
        super(props);
        this.odigrajPotez = this.odigrajPotez.bind(this);

    }

    odigrajPotez(novaBoja, polje) {
        switch (polje) {
            case 0:
                this.refs.prvo_polje.changeColor(novaBoja);
                break;
            case 1:
                this.refs.drugo_polje.changeColor(novaBoja);
                break;
            case 2:
                this.refs.trece_polje.changeColor(novaBoja);
                break;
            case 3:
                this.refs.cetvrto_polje.changeColor(novaBoja);
                break;
            default:
                this.refs.cetvrto_polje.changeColor("white");
                break;
        }
    }

    render() {
        return (
            <div className="red">
                <Polje ref="prvo_polje" color="white" />
                <Polje ref="drugo_polje" color="white" />
                <Polje ref="trece_polje" color="white" />
                <Polje ref="cetvrto_polje" color="white" />
            </div>
        )
    }
}
