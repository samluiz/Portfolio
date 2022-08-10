import React from 'react'
import MoonImg from './MoonImg'
import { Container } from './styles'
import Text from './Text'

const FirstAbout: React.FC = () => {
    return (
        <>
            <Container id="firstAbout">
                <MoonImg />
                <Text />
            </Container>
        </>
    )
}

export default FirstAbout
