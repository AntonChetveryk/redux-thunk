import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/actions";
import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  flex-wrap: wrap;
`;
const UserWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  background: black;
  border-radius: 3px;
  padding: 10px;
  margin-top: 50px;
  & img {
    display: block;
    width: 30%;
  }
`;

class User extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <UserContainer>
        {users.map((user) => (
          <UserWrapper key={user.username}>
            <div>
              <p>{user.name}</p>
              <p>{user.username}</p>
            </div>
            <img src={user.avatar}></img>
          </UserWrapper>
        ))}
      </UserContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = { fetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(User);