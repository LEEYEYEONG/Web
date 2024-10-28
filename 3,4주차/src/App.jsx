//저장 --> api 불러오기 전까지임

import React, { useState } from 'react';

import { MOVIES } from './mocks/movies';
import { nowPlaying } from './mocks/nowPlaying';
import { popular } from './mocks/popular';
import { topRated } from './mocks/topRated';
import { upcoming } from './mocks/upcoming';
import { CREDITS } from './mocks/credits';

import { FaSearch } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import './App.css';

import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import ozImage from './oz.png';

const App = () => {
  const [page, setPage] = useState('home');

  const handleLoginClick = () => setPage('login');
  const handleSignupClick = () => setPage('signup');
  const handleHomeClick = () => setPage('home');
  const handleSearchClick = () => setPage('search');
  const handleMovieClick = () => setPage('movies');
  /////////////////////////////////////////////////
  const handleImg1Click = () => setPage('nowPlaying');
  const handleImg2Click = () => setPage('popular');
  const handleImg3Click = () => setPage('topRated');
  const handleImg4Click = () => setPage('upcoming');
  /////////////////////////////////////////////////
  const InfoMovieClick = () => setPage('oz');

  return (
    <div className="container">
      <nav className="navbar">
        <h1 onClick={handleHomeClick} style={{ cursor: 'pointer' }}>YONGCHA</h1>
        <div className="navbar-buttons">
          <button onClick={handleLoginClick}>로그인</button>
          <button onClick={handleSignupClick}>회원가입</button>
        </div>
      </nav>
      <div className="movie-list">
        <aside className="sidebar">
          <ul>
          <li onClick={handleSearchClick} style={{ cursor: 'pointer' }}>
            <FaSearch /> 찾기
          </li>
          <li onClick={handleMovieClick} style={{ cursor: 'pointer' }}>
            <MdMovie /> 영화
          </li>
          </ul>
        </aside>
        <div className="outlet">
          {page === 'login' && <h2 style={{ color: 'white' }}>로그인 페이지</h2>}
          {page === 'signup' && <h2 style={{ color: 'white' }}>회원가입 페이지</h2>}
          {page === 'search' && <h2 style={{ color: 'white' }}>검색페이지 야호~!</h2>}

          {page === 'home' && MOVIES.results.map(movie => (
            <div key={movie.id} className="movie-item" onClick={InfoMovieClick}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="overlay">
              </div>
              <h2>{movie.original_title}</h2>
              <p>{movie.release_date}</p>
            </div>
          ))}

{page === 'oz' && (
        <div className="oz-container">
          <img src={ozImage} alt='oz_image' className="oz-image" />
          <h1 className="oz-text">The Wizard of Oz</h1>
          <h2 className="oz-subtext">
            <p>1939년 ‧ 뮤지컬/판타지 ‧ 1시간 42분</p>
            <p>평균 7.6</p>
          </h2>
          <p id="info">개요</p>
          <p id="overview">
            회오리 바람에 휩쓸려 오즈의 나라로 내던져진 도로시는 집으로 
            되돌아갈 수 있는 유일한 길이 위대한 오즈의 마법사를 만나는 
            것임을 알고 그를 찾아 긴 여정이 시작된다. 도로시는 애견 토토와 
            함께 노란 길을 따라 오즈의 마법사가 사는 에메랄드 시티로 향한다. 
            도중에 만난 세 명의 친구들, 지능을 얻고자 하는 허수아비와 심장을 
            원하는 양철 나뭇꾼, 용기를 가지고 싶어하는 겁장이 사자와 함께 
            오즈의 마법사에게 자신의 소원이 이루어지도록 부탁하기 위해 도로시와 
            함께 경쾌한 발걸음을 옮긴다. 그러나 도로시 일행을 방해하기 위해 
            뒤쫓아오는 서쪽 나라 마녀의 검은 그림자.
          </p>
          <p id="credit">감독/출연</p>
          <ul>
            {CREDITS.cast.map(member => (
              <li key={member.id} className="cast-item">
                <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} className="cast-image" />
                <p>{member.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

          {page === 'movies' && (
            <div className="category-container">
              <h2 className="category-title">카테고리</h2>
              <div className="photo-gallery">
                <div className="photo-item">
                  <img src={img1} alt="Now Playing" onClick={handleImg1Click} />
                  <span>현재 상영중인</span>
                </div>
                <div className="photo-item">
                  <img src={img2} alt="Popular" onClick={handleImg2Click} />
                  <span>인기있는</span>
                </div>
                <div className="photo-item">
                  <img src={img3} alt="Top Rated" onClick={handleImg3Click} />
                  <span>높은 평가를 받은</span>
                </div>
                <div className="photo-item">
                  <img src={img4} alt="Upcoming" onClick={handleImg4Click} />
                  <span>개봉 예정중인</span>
                </div>
              </div>
            </div>
          )}

          {page === 'nowPlaying' && nowPlaying.results.map(movie => (
            <div key={movie.id} className="movie-item">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="overlay">
                <h2>{movie.title}</h2>
              </div>
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </div>
          ))} 
          {page === 'popular' && popular.results.map(movie => (
            <div key={movie.id} className="movie-item">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="overlay">
                <h2>{movie.title}</h2>
              </div>
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </div>
          ))}
          {page === 'topRated' && topRated.results.map(movie => (
            <div key={movie.id} className="movie-item">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="overlay">
                <h2>{movie.title}</h2>
              </div>
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </div>
          ))}
          {page === 'upcoming' && upcoming.results.map(movie => (
            <div key={movie.id} className="movie-item">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="overlay">
                <h2>{movie.title}</h2>
              </div>
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default App;
