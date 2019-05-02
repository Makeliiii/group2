import React, { Component } from "react";
import "./gameSelect.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.location.userId,
      token: this.props.location.token
    };

    console.log("GAMESELECT state", this.state.token);
  }

  render() {
    return (
      <div>
        <Header logout />
        <div className="select-wrapper">
          <div className="monkaS">
            <img
              className="logo"
              alt="madmind"
              src={require("../../img/madmindNoText.png")}
            />
            <div className="button-group">
              <Link
                to={{
                  pathname: "/classic",
                  userId: this.state.userId,
                  token: this.state.token
                }}
              >
                <button className="game-button">Classic</button>
              </Link>
              <Link
                to={{
                  pathname: "/spree",
                  userId: this.props.location.userId,
                  token: this.props.location.token
                }}
              >
                <button className="game-button">Spree</button>
              </Link>
              <Link
                to={{
                  pathname: "/infinite",
                  userId: this.props.location.userId,
                  token: this.props.location.token
                }}
              >
                <button className="game-button">Infinite</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameSelect;
