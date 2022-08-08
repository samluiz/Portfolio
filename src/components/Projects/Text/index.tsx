import React from 'react'
import { Container } from './styles'
import Typewriter from 'typewriter-effect'
import { useTranslation } from 'react-i18next'

const Text: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <Container>
                <Typewriter
                    options={{
                        strings: [t('titleprojects')],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Container>
        </>
    )
}

export default Text
