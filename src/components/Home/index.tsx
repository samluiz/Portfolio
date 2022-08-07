import React, { useEffect, useState } from 'react'
import LanguageSwitcher from '../LanguageSwitcher'
import Box from './Box'
import { Container } from './styles'
import ReactImg from '/public/img/Container1/react.svg'

const Home: React.FC = () => {
    return (
        <>
            <Container id="home">
                <img src={ReactImg} alt="React" className="react" />
                <Box />
            </Container>
        </>
    )
}

export default Home
