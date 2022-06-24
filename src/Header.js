import React, { Component } from 'react'

import './style/Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <a className="meni_link" href="/" ><h1>Mastermind</h1></a>
                <a className="meni_link" href="/igra">Nova igra</a>
                <a className="meni_link"  href="/pravila">Pravila</a>
            </div>
        )
    }
}
