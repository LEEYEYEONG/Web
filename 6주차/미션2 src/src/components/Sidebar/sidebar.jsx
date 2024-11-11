import React from 'react';
import * as S from './sidebar.style';
import { IoSearch } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/search');
        console.log('찾기 버튼이 클릭되었습니다.');
    };

    const handleMovieClick = () => {
        navigate('/movies');
    };
    return (
        <S.SidebarContainer>
            <S.List>
                <S.ListItem onClick={handleSearchClick}><IoSearch /> 찾기</S.ListItem>
                <S.ListItem onClick={handleMovieClick}><MdMovie /> 영화</S.ListItem>
            </S.List>
        </S.SidebarContainer>
    );
};

export default Sidebar;