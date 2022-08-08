import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './styles'

const Footer: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <Container>
                <span>{t('footer')}</span>
            </Container>
        </>
    )
}

export default Footer
