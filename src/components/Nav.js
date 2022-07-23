import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1 id="Logo">Capture</h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

//styling
const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  background: #2e2e2e;
  padding: 1rem 3rem;
  align-items: center;
  color: #e0dfdf;
  /* display: flex;
  justify-content: center;

  */

  #Logo {
    font-family: "lobster", bold;
    font-weight: lighter;
    font-size: 2.2rem;
  }

  ul {
    display: flex;
    align-items: center;
    text-decoration: none;
    list-style: none;
    padding: 0.2rem 3rem;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: #ffffff;
    }
    li {
      padding: 0rem 2rem;
    }
  }
`;

export default Nav;
