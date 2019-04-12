// Import all the stuff we need
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Import the components
import StartingPage from './components/StartingPage/StartingPage';
import SignInPage from './components/SignUpPage/SignUpPage';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import LogInPage from './components/LogInPage/LogInPage';
import GameSelect from './components/GameSelect/GameSelect';
import Game from './components/Game/Game'
import Error from './components/Error/Error';
import ClassicMode from './components/ClassicMode/ClassicMode';
import ClassicGame from './components/ClassicMode/ClassicGame';
import './main.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Preloader />
                <Header />
                <Switch>
                    <Route path="/" component={ClassicMode} exact />x
                    <Route path="/login" component={LogInPage} />
                    <Route path="/signup" component={SignInPage} />
                    <Route path="/gameselect" component={GameSelect} />
                    <Route path="/classicmode" component={ClassicMode} />
                    <Route path="/gameselect/game" component={Game} exact />
                    <Route path="/classicgame" component={ClassicGame} />
                    <Route path="/" component={StartingPage} exact />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App