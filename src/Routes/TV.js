import React from 'react';
import axios from 'axios';
import Program from '../Components/Program';
import styled from 'styled-components';
// import './Home.scss';

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
    error: null,
    popular: [],
    topRated: [],
    airingToday: [],
  };

  getTVpopular = async () => {
    const API_KEY = '61d6a02f15e10648230ab7c68e113835';

    const {
      data: { results },
    } = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ko-KR`).catch(function (error) {
      console.log(error);
    });
    console.log(results);
    //console.log(lists.data.results);
    this.setState({ popular: results, isLoading: false });
  };

  getTopRated = async () => {
    const API_KEY = '61d6a02f15e10648230ab7c68e113835';
    const {
      data: { results },
    } = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=ko-KR`);
    // console.log(results);
    this.setState({ topRated: results, isLoading: false });
  };

  getAiringToday = async () => {
    const API_KEY = '61d6a02f15e10648230ab7c68e113835';
    const {
      data: { results },
    } = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=ko-KR`);
    console.log(results);
    this.setState({ airingToday: results, isLoading: false });
  };

  componentDidMount() {
    this.getTVpopular();
    this.getTopRated();
    this.getAiringToday();
  }

  render() {
    const { isLoading, error, popular, topRated, airingToday } = this.state;
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
                  <MovieListTitle>TV POPULAR program</MovieListTitle>
                  <ul className="movie__list">
                    {popular.map((popular) => (
                      <Program
                        key={popular.id}
                        id={popular.id}
                        name={popular.name}
                        title={popular.original_name}
                        overview={popular.overview}
                        poster={popular.poster_path}
                        lang={popular.original_language}
                        date={popular.first_air_date}
                        rating={popular.vote_average}
                        genres={popular.genre_ids}
                        backdrop={popular.backdrop_path}
                        error={error}
                      />
                    ))}
                  </ul>
                </div>
              </div>

              <div className="listBlock">
                <div className="container">
                  <MovieListTitle>top Rated</MovieListTitle>
                  <ul className="movie__list">
                    {topRated.map((topRated) => (
                      <Program
                        key={topRated.id}
                        id={topRated.id}
                        name={topRated.name}
                        title={topRated.original_name}
                        overview={topRated.overview}
                        poster={topRated.poster_path}
                        lang={topRated.original_language}
                        date={topRated.first_air_date}
                        rating={topRated.vote_average}
                        genres={topRated.genre_ids}
                        backdrop={topRated.backdrop_path}
                      />
                    ))}
                  </ul>
                </div>
              </div>

              <div className="listBlock">
                <div className="container">
                  <MovieListTitle>airingToday</MovieListTitle>
                  <ul className="movie__list">
                    {airingToday.map((airingToday) => (
                      <Program
                        key={airingToday.id}
                        id={airingToday.id}
                        name={airingToday.name}
                        title={airingToday.original_name}
                        overview={airingToday.overview}
                        poster={airingToday.poster_path}
                        lang={airingToday.original_language}
                        date={airingToday.first_air_date}
                        rating={airingToday.vote_average}
                        genres={airingToday.genre_ids}
                        backdrop={airingToday.backdrop_path}
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
