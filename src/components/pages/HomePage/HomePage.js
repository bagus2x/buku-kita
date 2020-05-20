import React from 'react';
import TopNavbar from '../../molecules/TopNavbar/TopNavbar';
import SideNavbar from '../../molecules/SideNavbar/SideNavbar';
import './HomePage.css';
import Button from '../../atoms/Button/Button';

const HomePage = () => {

    return (
        <div className="base">
            <TopNavbar />
            <SideNavbar />
            <div className="container-main">
                <div className="content-wrapper">
                    <div className="banner-main">
                        <h1>Grand Opening!!!</h1>
                        <p>Ikutii event dan dapatkan hadiah hingga 2000 Iphone 12 secara gratis</p>
                        <Button variant="default">Gabung Sekarang</Button>
                    </div>
                    <h4 style={{ margin: '20px 0 -15px 0' }}>Rekomendasi</h4>
                    <div className="container-product">
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                        <div className="card-product">
                            <div className="image-product"><span>Gambar</span></div>
                            <h4>Judul</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;