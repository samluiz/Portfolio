import React from 'react';
import Button from '../../shared/Button';
import Slogan from './Slogan';
import { Container } from './styles';
import Welcome from './Welcome';

const Box: React.FC = () => {
  return (
    <>
      <Container>
        <Slogan />
        <Welcome />
        <Button link="#firstAbout" label="button" />
      </Container>
    </>
  );
};

export default Box;
