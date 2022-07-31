import React from 'react'
import Button from './Button'
import Slogan from './Slogan'
import { Container } from './styles'
import Welcome from './Welcome'

const Box: React.FC = () => {
    return (
        <>
            <Container>
                <Slogan />
                <Welcome />
                <Button />
            </Container>
        </>
    )
}

export default Box
