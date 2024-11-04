import * as S from './signup.style.js';
import React, { useState } from 'react';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

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

        if (password !== confirmPassword) {
            setConfirmPasswordError('비밀번호가 일치하지 않습니다');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (valid) {
            // Handle successful validation
            console.log('Form submitted');
        }
    };

    return (
        <S.SignUpContainer>
            <S.InfoSpan>SignupPage</S.InfoSpan>
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
            <S.Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <S.ErrorMessage>{confirmPasswordError}</S.ErrorMessage>}
            <S.Button onClick={handleSubmit}>Sign Up</S.Button>
        </S.SignUpContainer>
    );
};

export default SignupPage;