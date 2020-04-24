import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

const Link = "http://77.120.108.119:9999/tweets/";

const TweetsWrapper = styled.div``;

class Tweets extends React.Component {
  state = {
    tweets: [],
  };

  componentDidMount() {
    fetch(Link)
      .then((res) => res.json())
      .then((res) => this.setState({ tweets: res.data }));
  }

  render() {
    const { tweets } = this.state;
    return (
      <TweetsWrapper>
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <p>{tweet.content}</p>
          </div>
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
