import React from 'react';
import { Route, NavLink, Switch, Link } from 'react-router-dom'; //1)
import Home from './Routes/Home';
import TV from './Routes/TV';
import Detail from './Routes/Detail';
import styled from 'styled-components';
import DetailTV from './Routes/DetailTV';

const Header = styled.ul`
  background: pink;
  display: flex;
  align-items: center;
  margin: 0;
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 56px;
  line-height: 56px;
  background: rgb(14, 14, 14);
  padding: 20px 30px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    font-weight: 600;
    padding: 0 15px;
    /* padding-bottom: 20px; */
    display: block;
    width: 100px;
    &::not(:last-child) {
      margin-bottom: 30px;
    }
  }
  li {
    list-style: none;
    padding: 0;
    flex: none;
    &.search {
      /* border: 1px solid red; */
      margin-left: auto;
      margin-right: 15px;
      input {
        height: 24px;
      }
    }
    &.title a {
      font-size: 26px;
      width: auto;
      padding-bottom: 0;
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    .title {
      display: none;
    }
    form {
      /* border: 1px solid red; */
      /* width: 100px; */
    }
  }
`;

function App() {
  const activestyle = {
    background: 'red',
    color: 'white',
  };
  return (
    <div>
      <Header>
        <li className="title">
          <Link to="/">THE MOVIES</Link>
        </li>
        <li>
          <NavLink to="/" exact activeStyle={activestyle} activeClassName="active">
            MOVIES
          </NavLink>
        </li>
        <li>
          <NavLink to="/tv" activeStyle={activestyle}>
            TV
          </NavLink>
        </li>
        <li className="search">
          <form>
            <input type="text" placeholder="Search..." />
            {/* value={this.props.filterText} onChange={this.handleFilterTextChange}  */}
          </form>
        </li>
      </Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/tv/:id" component={DetailTV} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
