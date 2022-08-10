import React from 'react'
import { useTranslation } from 'react-i18next'
import { HashLink as Link } from 'react-router-hash-link'
import { Container } from './styles'

const Button: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <Container>
                <button>
                    <Link to="#firstAbout">{t('button')}</Link>
                </button>
            </Container>
        </>
    )
}

export default Button
