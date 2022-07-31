import React from 'react'
import { Container } from './styles'

const Welcome: React.FC = () => {
    return (
        <>
            <Container>
                <span>
                    <em>
                        Welcome to
                        <br />
                        my mysterious
                        <br />
                        world
                    </em>
                </span>
            </Container>
        </>
    )
}

export default Welcome
