import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import Components from '../pages/Components/Components';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import Base from '../pages/Base/Base';
import Payment from '../pages/PaymentPage/Payment';
import './App.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/payment">
                    <Payment />
                </Route>
                <Route path="/home">
                    <Base />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/register">
                    <RegisterPage />
                </Route>
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