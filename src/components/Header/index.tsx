import React, { useEffect, useState } from 'react';
import LanguageSwitcher from '../Home/LanguageSwitcher';
import Logo from './Logo';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Socials from './Socials';
import { Container } from './styles';
import { useScrollDirection } from '../../utils/ScrollDirection';

const Header: React.FC = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);
  const scrollDirection = useScrollDirection();

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
  return (
    <>
      <Container id={`${scrollDirection === 'down' ? 'hide' : 'show'}`}>
        <Logo />
        <Navbar />
        <Socials />
        <Sidebar />
        {isDesktop ? <LanguageSwitcher /> : null}
      </Container>
    </>
  );
};

export default Header;
