import React from 'react'
import { Container } from './styles'
import Typewriter from 'typewriter-effect'
import { useTranslation } from 'react-i18next'

const Welcome: React.FC = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <Typewriter
                    options={{
                        strings: [t('welcome')],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Container>
        </>
    )
}

export default Welcome
