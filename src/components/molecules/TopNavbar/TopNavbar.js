import React, { useState } from 'react';
import './TopNavbar.css';
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
import { data } from './dummydata';


const TopNavbar = () => {
    let initialWidth = document.documentElement.clientWidth;
    const [width, setWidth] = useState(initialWidth);
    useMatchMedia((size) => setWidth(size));

    let notification = data.notification.map((d, i) =>
        <Item key={i} className="item-notif" variant="div rectangle">
            <span><img className="image-notif" src={d.image} alt="judul" /></span>
            <span>
                <h4>{d.title}</h4>
                <p>{d.message}</p>
                <span className="time">{d.time}</span>
            </span>
        </Item>
    );

    return (
        <div id="top-navbar">
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
                    <Menu id="menu3" delay={-1} className="user-container-menu">
                        <Item effect variant="button circle">
                            <BsBookmarkPlus size={24} />
                        </Item>
                        <Content>
                            <List>
                                <h4 className="title-menu">Ditambahkan</h4>
                                <Item sp="1" variant="div rectangle" className="book-cart">
                                    <img src="https://cdn.waterstones.com/bookjackets/large/9780/2413/9780241361979.jpg" alt="" />
                                    <h4 className="product-name">Product Name</h4>
                                    <div className="library">Diambil sebelum pukul 4:05 pm di Perpustakaan Kota Malang</div>
                                    <div className="price">Rp.0</div>
                                    <div className="delete">Hapus</div>
                                </Item>
                            </List>
                        </Content>
                    </Menu>
                    <Menu id="menu2" delay={-1} className="user-container-menu user-notif-menu">
                        <Item effect variant="button circle">
                            <IoMdNotificationsOutline size={24} />
                        </Item>
                        <Content>
                            <List>
                                <h4 className="title-menu">Notifikasi</h4>
                                {notification}
                                <div className="show-more">Tampilkan lebih banyak</div>
                            </List>
                        </Content>
                    </Menu>
                    <Menu id="menu1" delay={-1} className="user-container-menu">
                        <Item effect variant="button circle">
                            <IoMdArrowDropdown size={24} />
                        </Item>
                        <Content className="profile-menu">
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

export default TopNavbar;
