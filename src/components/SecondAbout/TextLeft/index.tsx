import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './styles'

const TextLeft: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <Container>
                <span>{t('texttwo')}</span>
            </Container>
        </>
    )
}

export default TextLeft
