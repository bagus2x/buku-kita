import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import Components from '../pages/Components/Components';

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/components">
                    <Components />
                </Route>
                <Route path="/" exact>
                    <LandingPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;