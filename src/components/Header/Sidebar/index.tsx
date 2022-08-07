import React from 'react'
import { Container } from './styles'
import { slide as Menu } from 'react-burger-menu'
import { navData } from '../../../text/texts'

const Sidebar: React.FC = () => {
    return (
        <>
            <Container>
                <Menu>
                    <a id="home" className="menu-item" href="#">
                        {navData.home}
                    </a>
                    <a id="about" className="menu-item" href="#firstAbout">
                        {navData.about}
                    </a>
                    <a id="projects" className="menu-item" href="/">
                        {navData.projects}
                    </a>
                    <a id="contact" className="menu-item" href="/">
                        {navData.contact}
                    </a>
                </Menu>
            </Container>
        </>
    )
}

export default Sidebar
