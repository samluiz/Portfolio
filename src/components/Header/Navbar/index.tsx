import React from 'react'
import Sidebar from '../Sidebar'
import { Container } from './styles'
import { useTranslation } from 'react-i18next'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <ul>
                    <li>
                        <Link to="#homePage">{t('home')}</Link>
                    </li>
                    <li>
                        <Link to="#firstAbout">{t('about')}</Link>
                    </li>
                    <li>
                        <Link to="#projectId">{t('projects')}</Link>
                    </li>
                    <li>
                        <Link to="#contactSection">{t('contact')}</Link>
                    </li>
                </ul>
            </Container>
        </>
    )
}

export default Navbar
