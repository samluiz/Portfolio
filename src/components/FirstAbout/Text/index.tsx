import React from 'react'
import { Container } from './styles'
import { useTranslation } from 'react-i18next'

const Text: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <span>{t('textone')}</span>
            </Container>
        </>
    )
}

export default Text
