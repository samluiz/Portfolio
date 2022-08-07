import React from 'react'
import { Container } from './styles'
import { slide as Menu } from 'react-burger-menu'
import { useTranslation } from 'react-i18next'

const Sidebar: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <Menu>
                    <a id="home" className="menu-item" href="#">
                        {t('home')}
                    </a>
                    <a id="about" className="menu-item" href="#firstAbout">
                        {t('about')}
                    </a>
                    <a id="projects" className="menu-item" href="/">
                        {t('projects')}
                    </a>
                    <a id="contact" className="menu-item" href="/">
                        {t('contact')}
                    </a>
                </Menu>
            </Container>
        </>
    )
}

export default Sidebar
