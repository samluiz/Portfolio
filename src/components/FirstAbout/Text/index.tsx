import React from 'react'
import { Container } from './styles'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'

const Text: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <div className="text">
                    <ScrollAnimation animateIn="fadeInUp" animateOut="zoomOut">
                        <span>{t('textone')}</span>
                    </ScrollAnimation>
                </div>
            </Container>
        </>
    )
}

export default Text
