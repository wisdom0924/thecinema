import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Movie from '../Components/Movie';
import './Home.scss';

const Form = styled.form`
  all: unset;
  width: 100%;
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 36px;
  color: white;
  width: 100%;
  padding-bottom: 10px;
`;

const MovieListTitle = styled.div`
  /* border: 1px solid red; */
  color: #fff;
  font-size: 18px;
  padding: 20px 0 0 10px;
  text-transform: uppercase;
  font-weight: 500;
`;

class Search extends Component {
  state = {
    isLoading: false,
    movieResults: [],
    // showResults: null,
    // searchingBy: '',
    // error: null,
  };

  // updateSearchingBy = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   this.setState({
  //     searchingBy: value,
  //   });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { searchingBy } = this.state;
  //   if (searchingBy !== '') {
  //     this.search(searchingBy);
  //   }
  // };

  search = async () => {
    const API_KEY = '61d6a02f15e10648230ab7c68e113835';
    const {
      data: { results },
    } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR&query=avengers`);

    console.log(movieResults);
    this.setState({ movieResults: results, isLoading: true });
  };
  // getSearch = async (searchingBy) => {
  //   const API_KEY = '61d6a02f15e10648230ab7c68e113835';

  //   // const {
  //   //   data: { results },
  //   // } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR`).then((term) => {
  //   //   params: {
  //   //     query: encodeURIComponent(term);
  //   //   }
  //   // });

  //   const {
  //     data: { results },
  //   } = await axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR` +
  //       {
  //         params: {
  //           foo: 'avengers',
  //         },
  //       }
  //   );
  //   console.log(results);
  //   // console.log(lists.data.results);
  //   this.setState({ movieResults: results, isLoading: false });
  // };

  componentDidMount() {
    this.search();
  }
  render() {
    const { movieResults, searchingBy } = this.state;
    return (
      <>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Input placeholder="Search for a Movie or TV Show" autoFocus={true} />
        </Form>
        {
          <div className="listBlock">
            <div className="container">
              <MovieListTitle>Now playing</MovieListTitle>
              <ul className="movie__list">
                {movieResults &&
                  movieResults.map((movieResults) => (
                    <Movie key={movieResults.id} id={movieResults.id} title={movieResults.title} lang={movieResults.original_language} overview={movieResults.overview} />
                  ))}
              </ul>
            </div>
          </div>
        }
      </>
    );
  }
}

export default Search;
