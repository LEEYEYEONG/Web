import { useNavigate, useSearchParams } from 'react-router-dom';
import * as S from './search.style.js';
import { useState, useEffect } from 'react';

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const [searchParams, setSearchparams] = useSearchParams({
        mq: ''
    });

    const mq = searchParams.get('mq');

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`);
    };

    const handleSearchMovieWithKeyboard = (e) => {
        if (e.key === 'Enter') {
            handleSearchMovie();
        }
    };

    useEffect(() => {
        if (mq) {
            const fetchMovies = async () => {
                setIsLoading(true);
                setIsError(false);
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`, {
                        headers: {
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mjg4NTdkYmFkNzFmNzkxYzkwMWExNTQzYTMyMDA2YiIsIm5iZiI6MTczMTI0NjA0MC43OTk4NjM4LCJzdWIiOiI2NzFlNTEzMGZlZmQxZTA1MTAwMDczNDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UF3x-uzKQeNIGIxzuFemTjJkiTa_zm3OEwgLlGgUJVU',
                            'accept': 'application/json'
                        }
                    });
                    const data = await response.json();
                    setMovies(data.results);
                    console.log(data); // API 응답 데이터 콘솔에 출력
                    if (data.results.length > 0) {
                        console.log(data.results[0]); // 첫 번째 영화 객체의 구조를 콘솔에 출력
                    }
                } catch (error) {
                    setIsError(true);
                    console.error('Error fetching movies:', error); // 오류 콘솔에 출력
                }
                setIsLoading(false);
            };

            fetchMovies();
        }
    }, [mq]);

    return (
        <>
            <S.SearchContainer>
                <input
                    placeholder="영화 제목을 입력해주세요..."
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    onKeyDown={handleSearchMovieWithKeyboard}
                />
                <button onClick={handleSearchMovie}>검색</button>
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error loading movies.</p>}
            </S.SearchContainer>

            <S.SearchResultsContainer>
                {movies.length === 0 && !isLoading && !isError && (
                    <p style={{ color: 'white' }}>해당 데이터 없음</p>
                )}
                {movies.map((movie) => (
                    <div key={movie.id} style={{ display: 'flex', marginBottom: '20px' }}>
                        {movie.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                style={{ width: '200px', marginRight: '20px' }}
                            />
                        )}
                        <div>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </S.SearchResultsContainer>
        </>
    );
};

export default SearchPage;