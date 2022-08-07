import { useState } from 'react'
import '@fontsource/sen'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import Home from './components/Home'
import FirstAbout from './components/FirstAbout'

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Home />
            <FirstAbout />
        </>
    )
}

export default App
