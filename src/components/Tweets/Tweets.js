import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

const Link = "http://77.120.108.119:9999/tweets/";

const TweetsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const TweetCard = styled.div`
  background: black;
  color: white;
  box-sizing: border-box;
  padding: 20px;
  width: 30%;
  margin: 5px;
  & img {
    display: block;
    width: 80%;
    margin: auto;
  }
`;

class Tweets extends React.Component {
  state = {
    tweets: [],
  };

  componentDidMount() {
    fetch(Link)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        return this.setState({ tweets: res.data });
      });
  }

  render() {
    const { tweets } = this.state;
    return (
      <TweetsWrapper>
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id}>
            <p>{tweet.content}</p>
            <img src={tweet.image} alt="img"></img>
          </TweetCard>
        ))}
      </TweetsWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

//const mapDispatchToProps = { updateUsers };

export default connect(mapStateToProps)(Tweets);
