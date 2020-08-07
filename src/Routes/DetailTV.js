import React from 'react';
import styled from 'styled-components';

const DetailContent = styled.div`
  margin-top: 56px;
  width: 100%;
  height: 100%;
  height: calc(100vh - 45px);
  position: relative;
  padding: 100px;
  display: flex;
`;

const Poster = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${(props) => props.bgImage});
  background-size: 100%;
  background-position: center center;
  position: absolute;
  filter: blur(5px);
  top: 0;
  left: 0;
  z-index: 0;
`;

const DetailBlock = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: auto;
`;
const Image = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
`;
const DetailText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  padding: 50px;
  font-size: 12px;
  width: 70%;

  h5 {
    font-size: 24px;
    padding-bottom: 20px;
  }

  div {
    line-height: 1.8rem;
    font-size: 1rem;
  }

  span {
    text-transform: uppercase;
  }
`;
const Bullet = styled.div`
  margin: 10px;
  display: inline-block;
`;

class DetailTV extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <DetailContent>
          <Poster bgImage={`https://image.tmdb.org/t/p/original${location.state.backdrop}`} />
          <DetailBlock>
            <Image bgImage={`https://image.tmdb.org/t/p/w500${location.state.poster}`} />
            <DetailText>
              <h5>{location.state.title}</h5>

              <span>{location.state.date.substring(0, 4)}</span>
              <Bullet>•</Bullet>
              <span>{location.state.lang}</span>

              <div>{location.state.overview}</div>
            </DetailText>
          </DetailBlock>
        </DetailContent>
      );
    } else {
      return null;
    }
  }
}

export default DetailTV;
