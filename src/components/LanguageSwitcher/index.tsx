import React, { useContext } from 'react';
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi';
import { IoLanguageSharp } from 'react-icons/io5';
import LocaleContext from '../../LocaleContext';
import i18n from '../../i18n';
import { Container } from './styles';

const LanguageSwitcher: React.FC = () => {
  const { locale } = useContext(LocaleContext);

  function changeLocale(l: string) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }
  return (
    <>
      <Container>
        <IoLanguageSharp className="icon lang" />
        <GiBrazilFlag
          className="icon brazil"
          onClick={() => changeLocale('pt')}
        />
        <GiUsaFlag className="icon usa" onClick={() => changeLocale('en')} />
      </Container>
    </>
  );
};

export default LanguageSwitcher;
