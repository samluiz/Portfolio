import React from 'react';
import { Container } from './styles';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <ul>
          <li>
            <Link to="#home">{t('home')}</Link>
          </li>
          <li>
            <Link to="#about">{t('about')}</Link>
          </li>
          <li>
            <Link to="#projects">{t('projects')}</Link>
          </li>
          <li>
            <Link to="#contact">{t('contact')}</Link>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Navbar;
