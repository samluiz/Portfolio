import 'animate.css/animate.compat.css';
import React from 'react';
import TextSection from '../../shared/TextSection';
import { Container } from './styles';

const TextLeft: React.FC = () => {
  return (
    <>
      <Container>
        <TextSection
          text="texttwo"
          animateIn="fadeInLeftBig"
          animateOut="zoomOut"
        />
      </Container>
    </>
  );
};

export default TextLeft;
