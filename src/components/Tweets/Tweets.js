import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

const Link = "http://77.120.108.119:9999/tweets/";

const TweetsWrapper = styled.div``;

fetch(Link)
  .then((res) => res.json())
  .then((res) => console.log(res.data));

class Tweets extends React.Component {
  render() {
    return (
      <TweetsWrapper>
        <div>Tweets</div>
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
