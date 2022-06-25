import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style/Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link className="meni_link" to="/" ><h1 >Mastermind</h1></Link>
                <Link className="meni_link" to="/igra">Nova igra</Link>
                <Link className="meni_link"  to="/pravila">Pravila</Link>
            </div>
        )
    }
}
