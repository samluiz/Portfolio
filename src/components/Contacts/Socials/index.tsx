import React from 'react';
import { Container } from './styles';
import TextRow from '../../shared/TextRow';
import Github from '/src/img/Container6/Github.svg';
import Linkedin from '/src/img/Container6/Linkedin.svg';
import Instagram from '/src/img/Container6/Instagram.svg';
import Email from '/src/img/Container6/Email.svg';
import Whatsapp from '/src/img/Container6/Whatsapp.svg';
import Saurs from '/src/img/Container6/Saurs.svg';

const Socials: React.FC = () => {
  return (
    <>
      <Container>
        <TextRow
          src={Github}
          alt="GitHub"
          name="GitHub"
          href="https://github.com/samluiz"
        />
        <TextRow
          src={Linkedin}
          alt="Linkedin"
          name="Linkedin"
          href="https://www.linkedin.com/in/samuelluizrl/"
        />
        <TextRow
          src={Instagram}
          alt="Instagram"
          name="Instagram"
          href="https://www.instagram.com/7samuca7/"
        />
        <TextRow
          src={Email}
          alt="Email"
          name="Email"
          href="mailto:samuelluizrl@outlook.com"
        />
        <TextRow
          src={Whatsapp}
          alt="Whatsapp"
          name="Whatsapp"
          href="https://api.whatsapp.com/send?phone=5586994916566"
        />
        <TextRow
          src={Saurs}
          alt="Saurs"
          name="Saurs"
          href="https://github.com/saurs"
        />
      </Container>
    </>
  );
};

export default Socials;
