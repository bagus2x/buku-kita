import React, { useState } from 'react';
import './RegisterPage.css';
import Steps from './Steps';
import Button from '../../atoms/Button/Button';

const RegisterPage = () => {

    const [page, setPage] = useState(0);

    const handleNext = (e) => {
        e.preventDefault();
        if(page < 2) setPage(page + 1);
    }
    const handlePrevious = (e) => {
        e.preventDefault();
        if(page > 0)  setPage(page - 1)
    }
    
    return (
        <div id="register-page">
            <form className="form-group">
                <Steps step={ page } />
                <Button onClick={ handlePrevious } variant="primary">Kembali</Button>
                <Button onClick={ handleNext } variant="primary">Selanjutnya</Button>
            </form>
        </div>
    )
}

export default RegisterPage;