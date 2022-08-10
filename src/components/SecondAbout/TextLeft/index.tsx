import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './styles'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'

const TextLeft: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <Container>
                <div className="text">
                    <ScrollAnimation
                        animateIn="fadeInLeftBig"
                        animateOut="zoomOut"
                    >
                        <span>{t('texttwo')}</span>
                    </ScrollAnimation>
                </div>
            </Container>
        </>
    )
}

export default TextLeft
