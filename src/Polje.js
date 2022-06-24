import React, { Component } from 'react'
import './style/Polje.css';

export default class Polje extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        }
    }

    changeColor(newColor) {
        this.setState({ color: newColor });
    }

    render() {
        return (
            <div>
                <div className="polje">
                    <div className="krug" style={{ backgroundColor: this.state.color }} >

                    </div>
                </div>
            </div>
        )
    }
}
