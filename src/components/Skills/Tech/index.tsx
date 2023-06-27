import 'animate.css/animate.compat.css';
import React from 'react';
import { Container } from './styles';
import Angular from '/src/img/Container4/Angular.svg';
import CSharp from '/src/img/Container4/CSharp.svg';
import Java from '/src/img/Container4/Java.svg';
import NestJs from '/src/img/Container4/NestJs.svg';
import ReactIcon from '/src/img/Container4/React.svg';
import TextRow from '../../shared/TextRow';

const Tech: React.FC = () => {
  return (
    <>
      <Container>
        <TextRow src={Java} alt="Java" name="Java" />
        <TextRow src={ReactIcon} alt="React" name="React" />
        <TextRow src={Angular} alt="Angular" name="Angular" />
        <TextRow src={NestJs} alt="NestJs" name="NestJS" />
        {/* <TextRow src={CSharp} alt="CSharp" name='C#' /> */}
      </Container>
    </>
  );
};

export default Tech;
