import React, { useState } from 'react';
import { Item } from '../../atoms/List2/List';
import Input from '../../atoms/Input/Input';
import onClickOutside from 'react-onclickoutside';
import {
    IoIosSearch,
    IoIosClose
} from 'react-icons/all';

function SearchBoxMobile(props) {
    const [inputBoxOpen, setInputBoxOpen] = useState(false);
    const [inputText, setInputText] = useState('');

    SearchBoxMobile['handleClickOutside_' + props.id] = () => setInputBoxOpen(false);

    return (
        <div className="list-group search-box-for-mobile">
            <Item onClick={() => setInputBoxOpen(true)} effect variant="button"><IoIosSearch size={24} /></Item>
            <div className={`content result-box${inputBoxOpen ? ' open' : ''}`}>
                <div className="input-button-close-box">
                    <Item onClick={() => setInputBoxOpen(false)} effect variant="button"><IoIosClose size={24} /></Item>
                    <Input onChange={(e) => setInputText(e.target.value)} placeholder="Cari di Buku Kita" variant="full-border" />
                </div>
                {
                    inputText ? <h5 style={{ color: 'var(--info-main)', fontWeight: 'normal' }}>Cari '{inputText}'</h5> :
                        <div className="history">
                            <h5>Riwayat Pencarian</h5>
                            <Item onClick={() => setInputBoxOpen(false)} variant="div rectangle">C++ Fundamental</Item>
                            <Item onClick={() => setInputBoxOpen(false)} variant="div rectangle">Struktur Data dan Algorita</Item>
                            <Item onClick={() => setInputBoxOpen(false)} variant="div rectangle">PHP untuk anak-anak</Item>
                        </div>
                }
            </div>
        </div>
    )
}
const clickOutsideConfig = {
    handleClickOutside: ({ props }) => SearchBoxMobile['handleClickOutside_' + props.id],
};
export default onClickOutside(SearchBoxMobile, clickOutsideConfig);