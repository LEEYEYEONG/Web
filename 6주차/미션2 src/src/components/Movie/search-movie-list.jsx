/* const SearchMovieList = () => {
        const url = `/search/movie?query=${searchValue}&include_adult=false&language=ko-KR&page=1`;
        const { data: movies, isLoading, isError } = useCustomFetch(url);
        
        return (
            <S.MovieGridContainer>
                {movies.data?.results.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </S.MovieGridContainer>
        );
};

export default SearchMovieList; */