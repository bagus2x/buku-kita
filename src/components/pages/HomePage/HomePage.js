import React, { useState } from 'react';
import './HomePage.css';
import TopNav from '../../atoms/TopNav/TopNav';
import {
    IoMdNotificationsOutline,
    IoMdArrowDropdown,
    IoMdExit,
    IoMdHelpCircle,
    IoMdSettings,
    BsBookmarkPlus,
} from 'react-icons/all';
import Logo from '../../../assets/img/main_logo.svg';
import Avatar from '../../../assets/img/avatar.svg';
import List, { Item } from '../../atoms/List2/List';
import Menu, { Content } from '../../atoms/Menu/Menu';
import { useMatchMedia } from '../../utils/utils';
import SearchBox from './SearchBox';


const HomePage = () => {
    let initialWidth = document.documentElement.clientWidth;
    const [width, setWidth] = useState(initialWidth);
    useMatchMedia((size) => setWidth(size));

    return (
        <div id="home-page">
            <TopNav>
                <div className="left-wrapper">
                    <img className="logo" src={Logo} alt="Buku Kita" width="35" />
                    <span className="brand" style={{ marginLeft: '10px', fontWeight: 'bolder', fontSize: '18px' }}>
                        <span style={{ fontSize: '18px' }}>Buku</span> Kita
                    </span>
                    {width <= 768 ? <SearchBox type="mobile" id="box-1" /> : ''}
                </div>
                {width > 768 ? <SearchBox type="desktop" /> : ''}
                <List className="user-menu">
                    <Item effect variant="button circle">
                        <BsBookmarkPlus size={24} />
                    </Item>
                    <Menu id="menu2" delay={-1} className="user-container-menu user-notif-menu">
                        <Item effect variant="button circle">
                            <IoMdNotificationsOutline size={24} />
                        </Item>
                        <Content>
                            <List>
                                <Item className="item-notif" variant="div rectangle">
                                    <span><img className="image-notif" src="https://cdn.waterstones.com/bookjackets/large/9780/2413/9780241361979.jpg" alt="judul" /></span>
                                    <span>
                                        <h4>Pengambilan</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ab. Lorovident.</p>
                                    </span>
                                </Item>
                                <Item className="item-notif" variant="div rectangle">
                                    <span><img className="image-notif" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTC1lLwp2Va154YxbDphvUZJZ48QY1oktbWBko5zpoR_T4cuD-E&usqp=CAU" alt="judul" /></span>
                                    <span>
                                        <h4>Pengembalian</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ab. Lorovident.</p>
                                    </span>
                                </Item>
                                <Item className="item-notif" variant="div rectangle">
                                    <span><img className="image-notif" src="https://cdn.waterstones.com/bookjackets/large/9780/2413/9780241361979.jpg" alt="judul" /></span>
                                    <span>
                                        <h4>Pengembalian</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ab. Lorovident.</p>
                                    </span>
                                </Item>
                            </List>
                        </Content>
                    </Menu>
                    <Menu id="menu1" delay={-1} className="user-container-menu">
                        <Item effect variant="button circle">
                            <IoMdArrowDropdown size={24} />
                        </Item>
                        <Content>
                            <List>
                                <Item variant="div rectangle">
                                    <span className="avatar">
                                        <img src={Avatar} width="30px" alt="Profile" />
                                    </span>
                                    <span>
                                        <h4 style={{ marginBottom: '4px' }}>Username</h4>
                                        <h5 style={{ color: 'var(--default-dark)', fontWeight: '400' }}>Lihat profil anda</h5>
                                    </span>
                                </Item>
                                <hr style={{ width: '100%', border: '1.5px solid var(--divider)', margin: '.5rem' }} />
                                <Item variant="div rectangle">
                                    <span className="item-icon"><IoMdHelpCircle size={24} /></span>
                                    Bantuan
                                </Item>
                                <Item variant="div rectangle">
                                    <span className="item-icon"><IoMdSettings size={24} /></span>
                                    Pengaturan
                                </Item>
                                <Item variant="div rectangle">
                                    <span className="item-icon"><IoMdExit size={24} /></span>
                                    Keluar
                                </Item>
                            </List>
                        </Content>
                    </Menu>
                    <Item variant="button rectangle" className="avatar-wrapper">
                        <span className="avatar">
                            <img src={Avatar} width="24px" alt="Profile" />
                        </span>
                        Profile
                    </Item>
                </List>
            </TopNav>
        </div>
    );
};

export default HomePage;
