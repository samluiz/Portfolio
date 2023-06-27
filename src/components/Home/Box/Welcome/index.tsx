import React from 'react'
import { Container } from './styles'
import { useTranslation } from 'react-i18next'

const Welcome: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <span>{t('welcome')}</span>
            </Container>
        </>
    )
}

export default Welcome
