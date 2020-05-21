import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from '../../molecules/TopNavbar/TopNavbar';
import SideNavbar from '../../molecules/SideNavbar/SideNavbar';
import HomePage from '../HomePage/HomePage';
import './Base.css';

const Base = () => {

    return (
        <div className="base">
            <TopNavbar />
            <SideNavbar />
            <div className="container-main">
                <Router>
                    <Switch>
                        <Route exact path="/home" >
                            <HomePage />
                        </Route>
                        <Route path="/home/profile" >
                            <h1>hello</h1>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default Base;