import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Container>
        <span>
          {t('footer')} &copy; {currentYear}{' '}
        </span>
      </Container>
    </>
  );
};

export default Footer;
