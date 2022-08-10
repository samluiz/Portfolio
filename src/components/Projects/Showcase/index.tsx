import React from 'react'
import { Container } from './styles'
import Marvel from '/public/img/Container5/marvelwebsite.png'
import Todo from '/public/img/Container5/TodoListWebsite.png'
import Auth from '/public/img/Container5/AuthWebsite.png'
import { useTranslation } from 'react-i18next'
import Tilt from 'react-parallax-tilt'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'

const Showcase: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <ScrollAnimation animateIn="bounceIn" animateOut="zoomOut">
                    <Tilt>
                        <a
                            href="https://github.com/samluiz/Comic-Books-ReactJS"
                            target="_blank"
                        >
                            <img src={Marvel} alt="MarvelAPI" />

                            <span>{t('site1')}</span>
                        </a>
                    </Tilt>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounceIn" animateOut="zoomOut">
                    <Tilt>
                        <a
                            href="https://github.com/samluiz/TodoList-ReactJS-TailwindCSS"
                            target="_blank"
                        >
                            <img src={Todo} alt="TodoList" />

                            <span>{t('site3')}</span>
                        </a>
                    </Tilt>
                </ScrollAnimation>

                <ScrollAnimation animateIn="bounceIn" animateOut="zoomOut">
                    <Tilt>
                        <a
                            href="https://github.com/samluiz/Login-Form"
                            target="_blank"
                        >
                            <img src={Auth} alt="SaursAuth" />

                            <span>{t('site2')}</span>
                        </a>
                    </Tilt>
                </ScrollAnimation>
            </Container>
        </>
    )
}

export default Showcase
