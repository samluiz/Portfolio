import React from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';
import { Container } from './styles';

interface ButtonProps {
  link: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ link, label }) => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <button>
          <Link to={link}>{t(label)}</Link>
        </button>
      </Container>
    </>
  );
};

export default Button;
