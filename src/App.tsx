import React, { Suspense, useState } from 'react';
import '@fontsource/sen';
import { GlobalStyles } from './styles/GlobalStyles';
import ReactLoading from 'react-loading';
import Header from './components/Header';
import Home from './components/Home';
import FirstAbout from './components/FirstAbout';
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import SecondAbout from './components/SecondAbout';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { BrowserRouter } from 'react-router-dom';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  const [locale, setLocale] = useState(i18n.language);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Suspense fallback={<ReactLoading type="bars" color="#cc00ff" />}>
            <Header />
            <Home />
            <FirstAbout />
            <SecondAbout />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
          </Suspense>
        </LocaleContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
