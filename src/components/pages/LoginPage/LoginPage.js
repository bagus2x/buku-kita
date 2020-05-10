import React, { useState } from 'react';
import Input, { Label } from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/main_logo.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './LoginPage.css';

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const toggleInputType = () => setShowPassword(!showPassword);

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div id="login-page">
            <img src={ Logo } alt="Buku Kita" width="35"/>
            <h1>Login to Buku Kita</h1>
            <form className="form-group">
                <Label id="username" title="Email" >
                    <Input variant="line" />
                </Label>
                <Label id="password" title="Password" >
                    <Input type={ showPassword ? 'text' : 'password' } variant="line" />
                </Label>
                { showPassword ? <FaEye onClick={ toggleInputType } className="eye-button" /> :
                  <FaEyeSlash onClick={ toggleInputType } className="eye-button" /> }
                <Button onClick={ handleLogin } variant="primary">Masuk</Button>
                <span>
                    <Link to="/account/reset">Lupa password?</Link>
                    <Link to="/register">Belum punya akun?</Link>
                </span>
            </form>
        </div>
    )
}

export default LoginPage;