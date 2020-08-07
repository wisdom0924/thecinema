import React from 'react';
import axios from 'axios';
import Movie from '../Components/Movie';
import styled from 'styled-components';
import './Home.scss';

const MovieListTitle = styled.div`
  /* border: 1px solid red; */
  color: #fff;
  font-size: 18px;
  padding: 20px 0 0 10px;
  text-transform: uppercase;
  font-weight: 500;
`;

class Home extends React.Component {
  state = {
    isLoading: true,
    nowplaying: [],
    upcoming: [],
    popular: [],
  };

  getNowplaying = async () => {
    const API_KEY = '61d6a02f15e10648230ab7c68e113835';
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR`
      // `https://api.themoviedb.org/3/keyword/180547/movies?api_key=${API_KEY}&language=ko-KR&include_adult=true`,
    );
    // console.log(results);
    //console.log(lists.data.results);
    this.setState({ nowplaying: results, isLoading: false });
  };

  getUpcomming = async () => {
    const API_KEY = '61d6a02f15e10648230ab7c68e113835';
    const {
      data: { results },
    } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KR`);
    // console.log(results);
    this.setState({ upcoming: results, isLoading: false });
  };

  getPopular = async () => {
    const API_KEY = '61d6a02f15e10648230ab7c68e113835';
    const {
      data: { results },
    } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`);
    // console.log(results);
    this.setState({ popular: results, isLoading: false });
  };

  componentDidMount() {
    this.getNowplaying();
    this.getUpcomming();
    this.getPopular();
  }

  render() {
    const { isLoading, nowplaying, upcoming, popular } = this.state;
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
  }
}

export default Home;
