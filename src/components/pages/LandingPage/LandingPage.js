import React, { useEffect, useState } from 'react';
import { ReactComponent as Wp } from '../../../assets/img/wp123.svg';
import TopNav from '../../atoms/TopNav/TopNav';
import Logo from '../../../assets/img/main_logo.svg';
import Button from '../../atoms/Button/Button';
import { MdApps } from 'react-icons/md'
import { IconContext } from 'react-icons';
import Menu, { Content, OnSelect } from '../../atoms/Menu/Menu';
import './LandingPage.css';
import List, { Item } from '../../atoms/List/List';

const LandingPage = () => {

    let initialWidth = document.documentElement.clientWidth;
    const [width, setWidth] = useState(initialWidth);

    const handleClickOpen = () => {
        // alert('oyi')
    }

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setWidth(document.documentElement.clientWidth);
        })

        return () => {
            window.removeEventListener('resize', (e) => {
                setWidth(document.documentElement.clientWidth);
            })
        }
    }, [])

    const productList = (
        <List className="list-header" expand >
            <Item >Produk</Item>
            <Item >Kontak</Item>
            <Item >Tentang Kami</Item>
        </List>
    );
    const buttonWrapper = (
        <List className="auth-link" expand >
            <Item ><span>Daftar</span></Item>
            <Item >Masuk</Item>
        </List>
    );

    return (
        <div id="landing-page">
            <TopNav variant="transparent">
                <div className="left-wrapper">
                    <img src={ Logo } alt="Buku Kita" width="35"/>
                    <span style={{ marginLeft:"10px", fontWeight: "bolder", fontSize:"18px"}}> <span style={{ fontSize:"18px"}}>Buku</span> Kita</span>
                </div>
                { width <= 576 ? null : productList }
                { width <= 768 ? null : buttonWrapper }
                <Menu id="1" className="lp-menu" >
                    <Button onClick={handleClickOpen} className="toggle">
                        <IconContext.Provider value={{size: '30px'}}><MdApps style={{fill: 'var(--text-primary)'}}/></IconContext.Provider>
                    </Button>
                    <Content className="lp-content" >
                        { width <= 576 ? productList : null }
                        { width <= 576 ? <hr style={{margin: '-10px 0', width: '100%'}} /> : null }
                        { width <= 768 ? buttonWrapper : null }
                    </Content>
                </Menu>
            </TopNav>
            <div className="greeting">
                <h1>Perbanyak pengetahuanmu dengan membaca buku setiap hari</h1>
                <p>BukuKita mendukung kamu untuk mencari buku dari pepustakaan atau pengguna lain</p>
                <Button variant="primary">Jelajah Sekarang</Button>
            </div>
            <div className="wallpaper">
               <Wp className="svg-wallpaper" />
            </div>
        </div>
    )
}

export default LandingPage;