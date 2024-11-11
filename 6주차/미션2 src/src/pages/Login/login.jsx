import React, { useState } from 'react';
import * as S from './login.style.js';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
/*  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState(''); */

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // 초기화

        try {
            // 로그인 요청 보내기
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'iyeyeong0113@gmail.com',    // 실제 이메일
                    password: '12345'       // 실제 비밀번호
                })
            });

            if (response.ok) {
                // JSON 응답을 받아 토큰 저장하기
                const data = await response.json();
                localStorage.setItem('accessToken', data.accessToken);  // 액세스 토큰 저장
                localStorage.setItem('refreshToken', data.refreshToken); // 리프레시 토큰 저장
                alert('로그인 성공');
                navigate('/');  // 로그인 성공 후 메인 페이지로 이동
            } else {
                const errorData = await response.json();
                setError(`로그인 실패: ${errorData.message}`);
            }
        } catch (err) {
            console.error('Error:', err);
            setError('로그인 중 오류 발생');
        }
    };

    // 토큰 재발급 함수
    const refreshAccessToken = async () => {
        const refreshToken = localStorage.getItem('refreshToken');

        const response = await fetch('http://localhost:3000/auth/token/access', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${refreshToken}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            // 새로 발급된 accessToken과 refreshToken을 저장
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);

            console.log('토큰 재발급 성공');
        } else {
            console.log('토큰 재발급 실패');
        }
    };

    // 사용자 정보 요청 함수
    const fetchUserInfo = async () => {
        const accessToken = localStorage.getItem('accessToken');

        const response = await fetch('http://localhost:3000/user/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const userInfo = await response.json();
            console.log('유저 정보:', userInfo);
        } else {
            console.log('유저 정보 요청 실패');
        }
    };

    // 사용자 정보 요청을 위한 함수 (토큰 만료 시 자동 재발급)
    const getUserInfoWithTokenRefresh = async () => {
        const accessToken = localStorage.getItem('accessToken');

        const response = await fetch('http://localhost:3000/user/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const userInfo = await response.json();
            console.log('유저 정보:', userInfo);
        } else if (response.status === 401) { // 토큰 만료
            console.log('토큰 만료: 재발급 시도 중');
            await refreshAccessToken();
            await fetchUserInfo(); // 재발급 후 다시 시도
        } else {
            console.log('유저 정보 요청 실패');
        }
    };


    /* const validateEmail = (email) => {
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
    }; */

    return (
        <S.LoginContainer>
            <S.InfoSpan>LoginPage</S.InfoSpan>
                <div>
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
                        <button type="submit">로그인</button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>

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
            <S.Button onClick={handleSubmit}>Login</S.Button> */}
        </S.LoginContainer>
    );
};

export default LoginPage;