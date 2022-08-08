import React from 'react'
import { Container } from './styles'
import Marvel from '/public/img/Container5/marvelwebsite.png'
import Todo from '/public/img/Container5/TodoListWebsite.png'
import Auth from '/public/img/Container5/AuthWebsite.png'
import { useTranslation } from 'react-i18next'

const Showcase: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <a href="">
                    <img src={Marvel} alt="MarvelAPI" />

                    <span>{t('site1')}</span>
                </a>

                <a href="">
                    <img src={Todo} alt="TodoList" />

                    <span>{t('site3')}</span>
                </a>

                <a href="">
                    <img src={Auth} alt="SaursAuth" />

                    <span>{t('site2')}</span>
                </a>
            </Container>
        </>
    )
}

export default Showcase
