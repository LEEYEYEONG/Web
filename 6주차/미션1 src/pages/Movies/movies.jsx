import * as S from './movies.style.js';
import nowplaying from '../Movies/nowplaying.png';
import popular from '../Movies/popular.png';
import rate from '../Movies/rate.png';
import upcoming from '../Movies/upcoming.png';

const MoviesPage = () => {
    return (
        <S.MoviesContainer>
            <S.InfoSpan>카테고리</S.InfoSpan>

            {/* 이미지 4장 묶는 컨테이너 */}
            <S.ImageContainer>
                <S.ImgContainer>
                    <S.ImageTitle>현재 상영중인</S.ImageTitle>
                    <img src={nowplaying} alt="nowplaying" />
                </S.ImgContainer>

                <S.ImgContainer2>
                    <S.ImageTitle>인기 영화</S.ImageTitle>
                    <img src={popular} alt="popular" />
                </S.ImgContainer2>

                <S.ImgContainer3>
                    <S.ImageTitle>평점 높은 영화</S.ImageTitle>
                    <img src={rate} alt="rate" />
                </S.ImgContainer3>

                <S.ImgContainer4>
                    <S.ImageTitle>개봉 예정중인</S.ImageTitle>
                    <img src={upcoming} alt="upcoming" />
                </S.ImgContainer4>

            </S.ImageContainer>
        </S.MoviesContainer>
    );
};

export default MoviesPage;