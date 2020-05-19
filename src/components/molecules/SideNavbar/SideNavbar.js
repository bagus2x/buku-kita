import React from 'react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import List, { Item } from '../../atoms/List2/List';
import { useState } from 'react';
import { GoHome, GoChecklist, GoBookmark, GoHistory } from 'react-icons/go';
import './SideNavbar.css';

const SideNavbar = () => {
    const [navbarMax, setNavbarMax] = useState(false);

    let icon = {
        home: <span className="item-icon" ><GoHome size="25" /></span>,
        collections: <span className="item-icon" ><GoChecklist size="25" /></span>,
        bookmark: <span className="item-icon" ><GoBookmark size="22.5" /></span>,
        history: <span className="item-icon" ><GoHistory size="25" /></span>,
        arrow: navbarMax ? <IoMdArrowBack size="30" /> : <IoMdArrowForward size="30" />
    }

    const title = (message) => <h4 className={`item-title${navbarMax ? '' : ' invisble'}`}>{message}</h4>

    return (
        <div className={`side-navbar ${navbarMax ? 'maximize' : 'minimize'}`}>
            <List>
                <Item onClick={() => setNavbarMax(!navbarMax)} className="btn-arrow" effect variant="div circle">{icon.arrow}</Item>
                <Item className="active" variant="div rectangle">{icon.home}{title('Beranda')}</Item>
                <Item to="/user/collections" variant="div rectangle">{icon.collections}{title('Koleksi')}</Item>
                <Item to="/user/bookmark" variant="div rectangle">{icon.bookmark}{title('Ditandai')}</Item>
                <Item to="/user/history" variant="div rectangle">{icon.history}{title('Riwayat')}</Item>
            </List>
        </div>
    )
}

export default SideNavbar;