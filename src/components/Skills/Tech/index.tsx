import 'animate.css/animate.compat.css';
import React from 'react';
import TechSkill from '../../TechSkill';
import { Container } from './styles';
import Angular from '/src/img/Container4/Angular.svg';
import CSharp from '/src/img/Container4/CSharp.svg';
import Java from '/src/img/Container4/Java.svg';
import NestJs from '/src/img/Container4/NestJs.svg';
import ReactIcon from '/src/img/Container4/React.svg';

const Tech: React.FC = () => {
  return (
    <>
      <Container>
        <TechSkill src={Java} alt="Java" name="Java" />
        <TechSkill src={ReactIcon} alt="React" name="React" />
        <TechSkill src={Angular} alt="Angular" name="Angular" />
        <TechSkill src={NestJs} alt="NestJs" name="NestJS" />
        {/* <TechSkill src={CSharp} alt="CSharp" name='C#' /> */}
      </Container>
    </>
  );
};

export default Tech;
