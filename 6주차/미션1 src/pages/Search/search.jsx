import { useSearchParams } from 'react-router-dom';
import * as S from './search.style.js';
import { useState } from 'react';
import useCustomFetch from '../../hooks/use-custom-fetch.js';
import SearchMovieList from '../../components/Movie/search-movie-list.jsx';

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }
    const [searchParams, setSearchparams] = useSearchParams({
        mq: ''
    })

    const mq = searchParams.get('mq')

    console.log(mq === searchValue);

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate('/search?mq=${searchValue}')
    }

    const handleSearchMovieWithKeyboard = (e) => {
        if (e.key === 'Enter') {
            handleSearchMovie();
        }
    }

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
            </S.SearchContainer>
            <SearchMovieList searchValue={searchValue} />

        </>
    );
};

export default SearchPage;

