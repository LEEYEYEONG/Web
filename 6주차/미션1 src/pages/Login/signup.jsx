import * as S from './signup.style.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordCheck: ''
    });
    const navigate = useNavigate();

    // 입력값을 업데이트하는 함수
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 회원가입 요청을 서버로 보내는 함수
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // 서버로 POST 요청 전송
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)  // JSON 형식으로 본문 작성
            });

            // 응답 상태 확인
            if (response.ok) {
                const result = await response.json();
                alert('회원가입 성공');
                navigate('/login');  // 회원가입 성공 후 로그인 페이지로 이동// 성공 메시지
            } else {
                const error = await response.json();
                alert('회원가입 실패');  // 오류 메시지
            }
        } catch (error) {
            console.error('Error:', error);
            alert('서버 요청 실패'); // 네트워크 또는 서버 오류 처리
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8 && password.length <= 16;
    };

    const handleSubmit2 = (e) => {
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
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="passwordCheck"
                    placeholder="Confirm Password"
                    value={formData.passwordCheck}
                    onChange={handleChange}
                    required
                />
                <button type="submit">회원가입</button>
            </form>
            {/* <S.Input
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
            <S.Button onClick={handleSubmit2}>Sign Up</S.Button> */}
        </S.SignUpContainer>
    );
};

export default SignupPage;