import React from 'react';
import './HomePage.css';
import TopNav from '../../atoms/TopNav/TopNav';
import Input from '../../atoms/Input/Input';
import { IoMdNotificationsOutline, IoMdArrowDropdown, IoMdAdd, IoMdSearch } from 'react-icons/all';
import Logo from '../../../assets/img/main_logo.svg';
import Avatar from '../../../assets/img/avatar.svg';

const HomePage = () => {
    
    return (
        <div id="home-page">
            <TopNav>
                <div className="left-wrapper">
                    <img src={ Logo } alt="Buku Kita" width="35"/>
                        <span className="brand" style={{ marginLeft:"10px", fontWeight: "bolder", fontSize:"18px"}}> <span style={{ fontSize:"18px" }}>Buku</span> Kita</span>
                    </div>
                <div className="input-wrapper">
                    <Input placeholder="Cari di Buku Kita" variant="full-border" />
                    <IoMdSearch className="search-icon" size={20}/>
                </div>
                <div className="list-group">
                    <button className="item circle"><IoMdAdd size={24}/></button>
                    <button className="item circle"><IoMdArrowDropdown size={24}/></button>
                    <button className="item circle"><IoMdNotificationsOutline size={24}/></button>
                    <button className="item rectangle avatar-wrapper"><span className="avatar"><img src={ Avatar } width="24px" alt="Profile"/></span>Profile</button>
                </div>
            </TopNav>
        </div>
    )

}

export default HomePage;