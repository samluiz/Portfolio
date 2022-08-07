import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './styles'

const Button: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <Container>
                <button>
                    <a href="#firstAbout">{t('button')}</a>
                </button>
            </Container>
        </>
    )
}

export default Button
