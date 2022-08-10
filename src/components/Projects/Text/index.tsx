import React from 'react'
import { Container } from './styles'
import Typewriter from 'typewriter-effect'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'

const Text: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <Container>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <Typewriter
                        options={{
                            strings: [t('titleprojects')],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </ScrollAnimation>
            </Container>
        </>
    )
}

export default Text
