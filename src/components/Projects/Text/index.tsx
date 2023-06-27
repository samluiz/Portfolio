import React from 'react';
import { Container } from './styles';
import { useTranslation } from 'react-i18next';
import 'animate.css/animate.compat.css';

const Text: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <span>{t('titleprojects')}</span>
      </Container>
    </>
  );
};

export default Text;
