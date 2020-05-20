import React from 'react';
import './Product.css';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Product({ id }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setOpen(!open)} className="card-product">
                <Link to="#"><div className="image-product"><span>Gambar</span></div></Link>
                <h4>Judul</h4>
            </div>
            {
                open ? (
                    <div className="background-outside">
                        <div className="modal-box">
                            <div className="header">
                                <h4>Title</h4>
                                <span onClick={() => setOpen(false)} className="close-btn"><IoMdClose size="20px" /></span>
                            </div>
                            <div className="content-modal">
                                {id}
                            </div>
                        </div>
                    </div>
                ) : ''
            }
        </div>
    )
}

export default Product;