import React from 'react';
import TopNavbar from '../../molecules/TopNavbar/TopNavbar';
import './HomePage.css';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import List, { Item } from '../../atoms/List2/List';
import { useState } from 'react';
import { GoHome, GoChecklist, GoBookmark, GoHistory } from 'react-icons/go';

const HomePage = () => {

    const [navbarMax, setNavbarMax] = useState(true);

    let icon = {
        home: <span className="item-icon" ><GoHome size="25" /></span>,
        collections: <span className="item-icon" ><GoChecklist size="25" /></span>,
        bookmark: <span className="item-icon" ><GoBookmark size="20" /></span>,
        history: <span className="item-icon" ><GoHistory size="25" /></span>
    }

    return (
        <div className="base">
            <TopNavbar />
            <div className="container">
                {
                    navbarMax ? (
                        <div className="side-navbar maximize">
                            <List>
                                <Item onClick={() => setNavbarMax(false)} className="btn-arrow" effect variant="div circle"><IoMdArrowBack size="30" /></Item>
                                <Item className="active" variant="div rectangle">{icon.home}Beranda</Item>
                                <Item to="/user/collections" variant="div rectangle">{icon.collections}Koleksi</Item>
                                <Item to="/user/bookmark" variant="div rectangle">{icon.bookmark}Ditandai</Item>
                                <Item to="/user/history" variant="div rectangle">{icon.history}Riwayat</Item>
                            </List>
                        </div>
                    ) : (
                            <div className="side-navbar minimize">
                                <List>
                                    <Item onClick={() => setNavbarMax(true)} className="btn-arrow" effect variant="div circle"><IoMdArrowForward size="30" /></Item>
                                    <Item className="active" variant="div rectangle">{icon.home}</Item>
                                    <Item to="/user/collections" variant="div rectangle">{icon.collections}</Item>
                                    <Item to="/user/bookmark" variant="div rectangle">{icon.bookmark}</Item>
                                    <Item to="/user/history" variant="div rectangle">{icon.history}</Item>
                                </List>
                            </div>
                        )
                }
                <div className="content-wrapper">
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda reprehenderit quo veritatis temporibus in, voluptates et quidem, facere atque asperiores excepturi totam ducimus impedit enim nam unde. Doloribus, maxime. sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iure incidunt ex fugit libero assumenda officia qui doloremque. Esse corporis excepturi ea mollitia quibusdam? Nemo ut corrupti commodi pariatur expedita.</div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;