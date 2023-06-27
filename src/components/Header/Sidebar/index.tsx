import React from 'react';
import { Container } from './styles';
import { slide as Menu } from 'react-burger-menu';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../Home/LanguageSwitcher';
import { HashLink as Link } from 'react-router-hash-link';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Menu>
          <Link to="#home">{t('home')}</Link>
          <Link to="#about">{t('about')}</Link>
          <Link to="#projects">{t('projects')}</Link>
          <Link to="#contact">{t('contact')}</Link>
          <div className="menu-item">
            <LanguageSwitcher />
          </div>
        </Menu>
      </Container>
    </>
  );
};

export default Sidebar;
