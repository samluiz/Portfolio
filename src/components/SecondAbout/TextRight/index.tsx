import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './styles'

const TextRight: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <Container>
                <span>{t('textthree')}</span>
            </Container>
        </>
    )
}

export default TextRight
