import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './navbar.style';

const Navbar = () => {
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
      
      <S.ButtonContainer>
          <S.Button1 onClick={handleLoginClick}>로그인</S.Button1>
          <S.Button2 onClick={handleSignupClick}>회원가입</S.Button2>
      </S.ButtonContainer>
    </S.NavbarContainer>  
  );
};

export default Navbar;