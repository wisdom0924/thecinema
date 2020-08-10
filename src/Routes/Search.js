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

const Form = styled.form`
  all: unset;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 36px;
  color: white;
  width: calc(100% - 80px);
  margin-top: 80px;
  border-bottom: 2px solid #fff;
  padding: 10px 20px;
  margin: 80px 20px 0 20px;
`;

class Home extends React.Component {
  state = {
    isLoading: true,
    searchlist: [],
    searchingText: '',
    tvsearchlist: [],
  };

  onChange = (event) => {
    const {
      target: { value },
    } = event;

    this.setState({
      searchingText: value,
    });
    console.log(event.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchingText } = this.state;
    if (searchingText !== '') {
      this.movieSearch(searchingText);
    }
  };

  movieSearch = async (searchingText) => {
    const API_KEY = '61d6a02f15e10648230ab7c68e113835';

    const {
      data: { results },
    } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchingText}`);
    console.log(results);
    //console.log(lists.data.results);
    this.setState({ searchlist: results, isLoading: false });
  };

  componentDidMount() {
    this.movieSearch();
  }

  render() {
    const { isLoading, searchlist, searchingText } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Input placeholder="Search for a Movie or TV Show" autoFocus={true} onChange={this.onChange} value={searchingText} />
        </Form>
        {
          <section className="wrapper">
            {isLoading ? (
              <div className="loader">
                <span className="loading__text">LOADING...</span>
              </div>
            ) : (
              <>
                <div className="listBlock">
                  <div className="container">
                    <MovieListTitle>search results</MovieListTitle>
                    <ul className="movie__list">
                      {searchlist.map((searchlist) => (
                        <Movie
                          key={searchlist.id}
                          id={searchlist.id}
                          title={searchlist.title}
                          lang={searchlist.original_language}
                          overview={searchlist.overview}
                          poster={searchlist.poster_path}
                          date={searchlist.release_date}
                          rating={searchlist.vote_average}
                          genres={searchlist.genre_ids}
                          backdrop={searchlist.backdrop_path}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </section>
        }
      </>
    );
  }
}

export default Home;
