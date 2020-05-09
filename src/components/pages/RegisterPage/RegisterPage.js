import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdArrowBack } from 'react-icons/md';
import Steps from './Steps';
import Button from '../../atoms/Button/Button';
import './RegisterPage.css';

const RegisterPage = () => {

    let initialFormStatus = {
        username: '',
        email: '',
        phonenumber: '',
        address: '',
        password: '',
        password2: ''
    }

    const [page, setPage] = useState(0);
    const [formValue, setFormValue] = useState({});
    const [formStatus, setformStatus] = useState(initialFormStatus);

    const handleNext = (e) => {
        e.preventDefault();
        if(page < 2) setPage(page + 1);
    }
    const handlePrevious = (e) => {
        e.preventDefault();
        if(page > 0)  setPage(page - 1);
    }

    const getFormValue = (data) => setFormValue(data);

    const _onSubmit = (e) => {
        e.preventDefault();
        // contoh penggunaan alert, nanti akan di-replace dengan respon dari server
        // bagus2x 23:51 pm
        if(formValue.username.length < 4) setformStatus({username: 'Use 8 characters or more for your username'})
    }
    
    return (
        <div id="register-page">
            <form className="form-group">
                <div className="header">
                    { page !== 0 ? (
                        <Button onClick={ handlePrevious } variant="primary">
                            <IconContext.Provider value={{size: '30px'}}><MdArrowBack style={{fill: 'var(--text-primary)'}}/></IconContext.Provider>
                        </Button>
                    ): null}
                    <div className="logo">Logo</div>
                    { page === 0 ? <h1>Create your account</h1> : ''}
                </div>
                <Steps formStatus={ formStatus } getFormValue={getFormValue} step={ page } />
                <Button onClick={ page !== 2 ? handleNext : _onSubmit } variant="primary">{ page !== 2 ? 'Selanjutnya' : 'Submit' }</Button>
            </form>
        </div>
    )
}

export default RegisterPage;