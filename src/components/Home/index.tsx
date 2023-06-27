import React from 'react';
import Box from './Box';
import { Container } from './styles';
import ReactImg from '/src/img/Container1/react.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const Home: React.FC = () => {
  return (
    <>
      <Container id="home">
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
