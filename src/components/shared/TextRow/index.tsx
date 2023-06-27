import ScrollAnimation from 'react-animate-on-scroll';
import Tilt from 'react-parallax-tilt';
import { Container } from './styles';
import { FC } from 'react';

interface IProps {
  src: string;
  alt: string;
  name: string;
  href?: string;
}

const TextRow: FC<IProps> = ({ src, alt, name, href }) => {
  return (
    <>
      <Container>
        <a className="box" target="_blank" href={href} rel="noreferrer">
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
        </a>
      </Container>
    </>
  );
};

export default TextRow;
