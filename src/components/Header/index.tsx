import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Socials from './Socials'
import { Container } from './styles'

const Header: React.FC = () => {
    return (
        <>
            <Container>
                <Logo />
                <Navbar />
                <Socials />
                <Sidebar />
            </Container>
        </>
    )
}

export default Header
