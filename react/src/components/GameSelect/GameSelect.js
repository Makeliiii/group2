import React, { Component } from 'react';
import './gameSelect.css';
import { Link } from 'react-router-dom';

class GameSelect extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="select-wrapper">
                <div className="button-group">
                    <h1>Game Select</h1>
                    <Link to="/classic">
                    <button className="select-button">Classic</button>
                    </Link>
                    <button className="select-button">Spree</button>
                    <button className="select-button">Clash</button>
                </div>
            </div>
        )
    }
}

export default GameSelect;