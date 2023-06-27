import React, { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Box from './Box';
import { Container } from './styles';
import ReactImg from '/src/img/Container1/react.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const Home: React.FC = () => {
  return (
    <>
      <Container id="homePage">
        <div className="react">
          <ScrollAnimation
            initiallyVisible={true}
            animateIn="fadeIn"
            animateOut="zoomOut"
          >
            <img src={ReactImg} alt="React" className="" />
          </ScrollAnimation>
        </div>
        <Box />
      </Container>
    </>
  );
};

export default Home;
