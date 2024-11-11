import React, { useState } from 'react';
import * as S from './login.style.js';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUser }) => { // setUser를 props로 받음
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


    // 토큰 재발급 함수 작성 //////////////////////////////////////////////
    const refreshAccessToken = async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            throw new Error('No refresh token available');
        }

        const response = await fetch('http://localhost:3000/auth/token/access', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refreshToken })
        });

        if (!response.ok) {
            throw new Error('Failed to refresh access token');
        }

        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken);
        return data.accessToken;
    };


    // API 요청 시 토큰 만료 처리 ////////////////////////////////////////////////
    const fetchWithAuth = async (url, options = {}) => {
        const accessToken = localStorage.getItem('accessToken');
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${accessToken}`
        };

        let response = await fetch(url, options);

        if (response.status === 401) {
            // 토큰 만료 시 재발급
            const newAccessToken = await refreshAccessToken();
            options.headers['Authorization'] = `Bearer ${newAccessToken}`;
            response = await fetch(url, options);
        }

        return response;
    };


    // 로그인 후 유저 정보 불러오기 ////////////////////////////////////////////////
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
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // JSON 응답을 받아 토큰 저장하기
                const data = await response.json();
                localStorage.setItem('accessToken', data.accessToken);  // 액세스 토큰 저장
                localStorage.setItem('refreshToken', data.refreshToken); // 리프레시 토큰 저장
                alert('로그인 성공');
                navigate('/'); // 로그인 성공 후 메인 페이지로 이동

                // 유저 정보 불러오기
                const userResponse = await fetchWithAuth('http://localhost:3000/user/me');

                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    setUser(userData); // 유저 정보 저장
                }
            } else {
                setError('로그인 실패');
            }
        } catch (error) {
            setError('로그인 중 오류 발생');
        }
    };

    return (
        <S.LoginContainer>
            <S.InfoSpan>LoginPage</S.InfoSpan>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <button type="submit">로그인</button>
                {error && <p>{error}</p>}
            </form>
        </S.LoginContainer>
    );
};

export default LoginPage;