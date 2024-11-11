import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './navbar.style';

const Navbar = ({ user, logout }) => {
  console.log('User:', user); // user 객체를 콘솔에 출력
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <S.NavbarContainer>
      <S.NavbarTitle onClick={handleLogoClick}>YONGCHA</S.NavbarTitle>
      {user ? (
        <S.UserContainer>
          <span>
            {user.email.split('@')[0]}님 반갑습니다
          </span>
          <S.Button1 onClick={logout}>로그아웃</S.Button1>
        </S.UserContainer>
      ) : (
          <S.ButtonContainer>
            <S.Button1 onClick={handleLoginClick}>로그인</S.Button1>
            <S.Button2 onClick={handleSignupClick}>회원가입</S.Button2>
          </S.ButtonContainer>
      )}
    </S.NavbarContainer>  
  );
};

export default Navbar;