import React from 'react'
import Sidebar from '../Sidebar'
import { Container } from './styles'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <ul>
                    <li>
                        <a href="#">{t('home')}</a>
                    </li>
                    <li>
                        <a href="#firstAbout">{t('about')}</a>
                    </li>
                    <li>
                        <a href="#">{t('projects')}</a>
                    </li>
                    <li>
                        <a href="#">{t('contact')}</a>
                    </li>
                </ul>
            </Container>
        </>
    )
}

export default Navbar
