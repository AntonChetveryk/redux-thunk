import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationWrapper = styled.div`
  background: black;
  padding: 20px 10px;
  font-size: 1.2em;
  & a {
    color: white;
    margin-right: 50px;
  }
`;

export const Navigation = (props) => {
  return (
    <NavigationWrapper>
      <Nav>
        <NavItem>
          <Link to="/">User</Link>
        </NavItem>
        <NavItem>
          <Link to="/add-users">Add users</Link>
        </NavItem>
        <NavItem>
          <Link to="/tweets">Tweets</Link>
        </NavItem>
      </Nav>
    </NavigationWrapper>
  );
};
