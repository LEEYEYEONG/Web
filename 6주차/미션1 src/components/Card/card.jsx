import React from 'react';
import * as S from './card.style';

const Card = ({ movie }) => {

  const { title, poster_path, overview } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <S.CardContainer>
      <S.MovieImage src={imageUrl} alt={title} />
      <S.Overlay /> {/* 오버레이 추가 */}
      <S.MovieTitle>{title}</S.MovieTitle>
    </S.CardContainer>
  );
};

export default Card;
