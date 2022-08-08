import React from 'react'
import { Container } from './styles'
import Marvel from '/public/img/Container5/marvelwebsite.png'
import Todo from '/public/img/Container5/TodoListWebsite.png'
import Auth from '/public/img/Container5/AuthWebsite.png'
import { useTranslation } from 'react-i18next'
import Tilt from 'react-parallax-tilt'

const Showcase: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <Tilt>
                    <a
                        href="https://github.com/samluiz/Comic-Books-ReactJS"
                        target="_blank"
                    >
                        <img src={Marvel} alt="MarvelAPI" />

                        <span>{t('site1')}</span>
                    </a>
                </Tilt>

                <Tilt>
                    <a
                        href="https://github.com/samluiz/TodoList-ReactJS-TailwindCSS"
                        target="_blank"
                    >
                        <img src={Todo} alt="TodoList" />

                        <span>{t('site3')}</span>
                    </a>
                </Tilt>

                <Tilt>
                    <a
                        href="https://github.com/samluiz/Login-Form"
                        target="_blank"
                    >
                        <img src={Auth} alt="SaursAuth" />

                        <span>{t('site2')}</span>
                    </a>
                </Tilt>
            </Container>
        </>
    )
}

export default Showcase
