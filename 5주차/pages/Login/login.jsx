import React, { useState } from 'react';
import * as S from './login.style.js';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8 && password.length <= 16;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('올바른 이메일 형식이 아닙니다');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('올바른 비밀번호 형식이 아닙니다');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            // Handle successful validation
            console.log('Form submitted');
        }
    };

    return (
        <S.LoginContainer>
            <S.InfoSpan>LoginPage</S.InfoSpan>
            <S.Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
            <S.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
            <S.Button onClick={handleSubmit}>Login</S.Button>
        </S.LoginContainer>
    );
};

export default LoginPage;