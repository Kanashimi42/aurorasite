import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MainContainer = styled(motion.main)`
  padding: 2rem;
  text-align: center;
  background-color: #0d1117;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    color: #58a6ff;
  }

  p {
    color: #8b949e;
  }
`;

const Section = styled.div`
  margin-top: 3rem;
  text-align: left;

  h3 {
    color: #58a6ff;
  }

  p {
    color: #8b949e;
  }

  img {
    width: 100%;
    border-radius: 5px;
    margin-top: 1rem;
  }
`;

const Screenshots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  img {
    width: calc(50% - 1rem);
    border-radius: 5px;
  }
`;

const Main = () => (
  <MainContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Container>
      <h2>Welcome to Aurora</h2>
      <p>Your gateway to the best audio communication app.</p>

      <Section>
        <h3>Features</h3>
        <p>Discover the amazing features that Aurora offers to you.</p>
        <img src="https://placekitten.com/800/400" alt="Feature preview" />
      </Section>

      <Section>
        <h3>Screenshots</h3>
        <Screenshots>
          <img src="https://placekitten.com/400/300" alt="Screenshot 1" />
          <img src="https://placekitten.com/400/300" alt="Screenshot 2" />
          <img src="https://placekitten.com/400/300" alt="Screenshot 3" />
          <img src="https://placekitten.com/400/300" alt="Screenshot 4" />
        </Screenshots>
      </Section>
    </Container>
  </MainContainer>
);

export default Main;
