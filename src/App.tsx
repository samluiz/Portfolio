import React, { Suspense, useState } from 'react'
import '@fontsource/sen'
import { GlobalStyles } from './styles/GlobalStyles'
import ReactLoading from 'react-loading'
import Header from './components/Header'
import Home from './components/Home'
import FirstAbout from './components/FirstAbout'
import i18n from './i18n'
import LocaleContext from './LocaleContext'

function App() {
    const [locale, setLocale] = useState(i18n.language)

    i18n.on('languageChanged', (lng) => setLocale(i18n.language))

    return (
        <>
            <GlobalStyles />
            <LocaleContext.Provider value={{ locale, setLocale }}>
                <Suspense
                    fallback={<ReactLoading type="bars" color="#cc00ff" />}
                >
                    <Header />
                    <Home />
                    <FirstAbout />
                </Suspense>
            </LocaleContext.Provider>
        </>
    )
}

export default App
