import React from 'react';
import { Route } from 'react-router-dom';
import TopNavbar from '../../molecules/TopNavbar/TopNavbar';
import SideNavbar from '../../molecules/SideNavbar/SideNavbar';
import HomePage from '../HomePage/HomePage';
import './Base.css';
import ProfilePage from '../ProfilePage/ProfilePage';

const Base = () => {

    return (
        <div className="base">
            <TopNavbar />
            <SideNavbar />
            <div className="container-main">
                <Route exact path="/home" >
                    <HomePage />
                </Route>
                <Route path="/home/profile" >
                    <ProfilePage />
                </Route>
            </div>
        </div>
    )
}

export default Base;