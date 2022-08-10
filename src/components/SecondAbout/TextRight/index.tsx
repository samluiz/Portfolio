import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './styles'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'

const TextRight: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <Container>
                <div className="text">
                    <ScrollAnimation
                        animateIn="fadeInRightBig"
                        animateOut="zoomOut"
                    >
                        <span>{t('textthree')}</span>
                    </ScrollAnimation>
                </div>
            </Container>
        </>
    )
}

export default TextRight
