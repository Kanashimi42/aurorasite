import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #161b22;
  padding: 1rem 2rem;
  text-align: center;
`;

const FooterText = styled.p`
  color: #8b949e;
  margin: 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; 2024 Aurora. All rights reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
