import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../Components/Movie';
import styled from 'styled-components';
import './Home.scss';

const MovieListTitle = styled.div`
  color: #fff;
  font-size: 18px;
  padding: 20px 0 0 10px;
  text-transform: uppercase;
  font-weight: 500;
`;

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [nowplaying, setNowplaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const API_KEY = '61d6a02f15e10648230ab7c68e113835';

    const getNowplaying = async () => {
      setLoading(false);
      try {
        const {
          data: { results },
        } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR`);
        console.log(results);
        setNowplaying(results);
      } catch (error) {
        setLoading(true);
      }
    };

    const getUpcomming = async () => {
      setLoading(false);
      try {
        const {
          data: { results },
        } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR`);
        console.log(results);
        setUpcoming(results);
      } catch (error) {
        setLoading(true);
      }
    };

    const getPopular = async () => {
      setLoading(false);
      try {
        const {
          data: { results },
        } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR`);
        console.log(results);
        setPopular(results);
      } catch (error) {
        setLoading(true);
      }
    };

    getNowplaying();
    getUpcomming();
    getPopular();
  }, []);

  return (
    <>
      <section className="wrapper">
        {isLoading ? (
          <div className="loader">
            <span className="loading__text">LOADING...</span>
          </div>
        ) : (
          <>
            <div className="listBlock">
              <div className="container">
                <MovieListTitle>Now playing</MovieListTitle>
                <ul className="movie__list">
                  {nowplaying.map((nowplaying) => (
                    <Movie
                      key={nowplaying.id}
                      id={nowplaying.id}
                      title={nowplaying.title}
                      lang={nowplaying.original_language}
                      overview={nowplaying.overview}
                      poster={nowplaying.poster_path}
                      date={nowplaying.release_date}
                      rating={nowplaying.vote_average}
                      genres={nowplaying.genre_ids}
                      backdrop={nowplaying.backdrop_path}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="listBlock">
              <div className="container">
                <MovieListTitle>Upcomming</MovieListTitle>
                <ul className="movie__list">
                  {upcoming.map((upcoming) => (
                    <Movie
                      key={upcoming.id}
                      id={upcoming.id}
                      title={upcoming.title}
                      lang={upcoming.original_language}
                      overview={upcoming.overview}
                      poster={upcoming.poster_path}
                      date={upcoming.release_date}
                      rating={upcoming.vote_average}
                      genres={upcoming.genre_ids}
                      backdrop={upcoming.backdrop_path}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="listBlock">
              <div className="container">
                <MovieListTitle>Popular</MovieListTitle>
                <ul className="movie__list">
                  {popular.map((popular) => (
                    <Movie
                      key={popular.id}
                      id={popular.id}
                      title={popular.title}
                      lang={popular.original_language}
                      overview={popular.overview}
                      poster={popular.poster_path}
                      date={popular.release_date}
                      rating={popular.vote_average}
                      genres={popular.genre_ids}
                      backdrop={popular.backdrop_path}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Home;
