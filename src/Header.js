import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import logo from '../src/logo.png';

const HeaderContainer = styled.header`
  background-color: #161b22;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 64px; // увеличиваем высоту логотипа
    margin-right: 0.5rem;
  }

  h1 {
    color: #fff;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  li a {
    color: #c9d1d9;
    text-decoration: none;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>
        <img src={logo} alt="Aurora Logo" />
      <h1>Aurora</h1>
    </Logo>
    <Nav>
      <ul>
        <li><a href="#">Why Aurora?</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Explore</a></li>
      </ul>
    </Nav>
  </HeaderContainer>
);

export default Header;
