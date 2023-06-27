import ScrollAnimation from 'react-animate-on-scroll';
import Tilt from 'react-parallax-tilt';
import { Container } from './styles';
import { FC } from 'react';

interface TechProps {
  src: string;
  alt: string;
  name: string;
}

const TechSkill: FC<TechProps> = ({ src, alt, name }) => {
  return (
    <>
      <Container>
        <div className="tech">
          <Tilt>
            <img src={src} alt={alt} />
          </Tilt>
          <div className="center">
            <div className="text">
              <ScrollAnimation
                animateIn="fadeInRightBig"
                animateOut="zoomOut"
                animatePreScroll
              >
                <span>{name}</span>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TechSkill;
