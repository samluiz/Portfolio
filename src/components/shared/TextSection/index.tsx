import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from './styles';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
  text: string;
  animateIn: string;
  animateOut: string;
}

const TextSection: FC<IProps> = ({ text, animateIn, animateOut }) => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <div className="text">
          <ScrollAnimation animateIn={animateIn} animateOut={animateOut}>
            <span>{t(text)}</span>
          </ScrollAnimation>
        </div>
      </Container>
    </>
  );
};

export default TextSection;
