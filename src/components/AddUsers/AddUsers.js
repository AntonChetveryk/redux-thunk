import React from "react";
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addUser } from "../../redux/actions";
import { connect } from "react-redux";

const AddUsersWrapper = styled.div`
  background: black;
  color: white;
  width: 50%;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 50px;
  border-radius: 5px;
  & button {
    margin: auto;
    display: block;
    font-weight: bold;
    background: white;
    color: black;
  }
  & label {
    font-weight: bold;
  }
`;

class AddUsers extends React.Component {
  state = {
    user: {
      name: "",
      username: "",
      avatar: "",
    },
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  onClick = (e) => {
    const {
      user: { name, username, avatar },
    } = this.state;

    e.preventDefault();
    if (name && username && avatar && username[0] === "@") {
      addUser(this.state.user);
    } else {
      alert(
        "Fill in all the fields and the first character of username must be '@'"
      );
    }
  };

  render() {
    const {
      user: { name, username, avatar },
    } = this.state;

    return (
      <AddUsersWrapper>
        <Form>
          <FormGroup>
            <Label for="name">Имя пользователя</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              value={name}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="@username"
              value={username}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="avatar">Avatar</Label>
            <Input
              type="text"
              name="avatar"
              id="avatar"
              placeholder="avatar src"
              value={avatar}
              onChange={this.onChange}
            />
          </FormGroup>

          <Button onClick={this.onClick}>Add user</Button>
        </Form>
      </AddUsersWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = { addUser };

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);
