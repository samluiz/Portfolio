import React from 'react'
import Body from './Body'
import Jacket from './Legs'
import { Container } from './styles'
import TextLeft from './TextLeft'
import TextRight from './TextRight'

const SecondAbout: React.FC = () => {
    return (
        <>
            <Container>
                <TextLeft />
                <Body />
                <Jacket />
                <TextRight />
            </Container>
        </>
    )
}

export default SecondAbout
