import Tilt from 'react-parallax-tilt';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

interface CardProps {
  href: string;
  src: string;
  desc: string;
  alt: string;
}

const ProjectCard: FC<CardProps> = ({ href, src, desc, alt }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Tilt className="card">
        <a href={href} target="_blank" rel="noreferrer">
          <img src={src} alt={alt} />
          <span>{t(desc)}</span>
        </a>
      </Tilt>
    </Container>
  );
};

export default ProjectCard;
