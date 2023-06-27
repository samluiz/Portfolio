import 'animate.css/animate.compat.css';
import React from 'react';
import TextSection from '../../TextSection';
import { Container } from './styles';

const TextRight: React.FC = () => {
  return (
    <>
      <Container>
        <TextSection
          text="textthree"
          animateIn="fadeInRightBig"
          animateOut="zoomOut"
        />
      </Container>
    </>
  );
};

export default TextRight;
