import 'animate.css/animate.compat.css';
import React from 'react';
import TextSection from '../../shared/TextSection';
import { Container } from './styles';

const Text: React.FC = () => {
  return (
    <>
      <Container>
        <TextSection text="textone" animateIn="fadeInUp" animateOut="zoomOut" />
      </Container>
    </>
  );
};

export default Text;
