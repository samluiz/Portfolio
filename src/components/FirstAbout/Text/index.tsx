import React from 'react'
import { Container } from './styles'
import { aboutData } from '../../../text/texts'

const Text: React.FC = () => {
    return (
        <>
            <Container>
                <span>{aboutData.textOne}</span>
            </Container>
        </>
    )
}

export default Text
