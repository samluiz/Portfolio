import React from 'react'
import { Container } from './styles'
import { slide as Menu } from 'react-burger-menu'

const Sidebar: React.FC = () => {
    return (
        <>
            <Container>
                <Menu>
                    <a id="home" className="menu-item" href="/">
                        HOME
                    </a>
                    <a id="about" className="menu-item" href="/">
                        ABOUT
                    </a>
                    <a id="projects" className="menu-item" href="/">
                        PROJECTS
                    </a>
                    <a id="contact" className="menu-item" href="/">
                        CONTACT
                    </a>
                </Menu>
            </Container>
        </>
    )
}

export default Sidebar
