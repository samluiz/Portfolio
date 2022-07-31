import { useState } from 'react'
import '@fontsource/sen'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import Home from './components/Home'

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Home />
        </>
    )
}

export default App
