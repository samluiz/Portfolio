import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Socials from './Socials'
import { Container } from './styles'

const Header: React.FC = () => {
    return (
        <>
            <Container>
                <Logo />
                <Navbar />
                <Socials />
            </Container>
        </>
    )
}

export default Header
