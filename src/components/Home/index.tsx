import React from 'react'
import Box from './Box'
import { Container } from './styles'

const Home: React.FC = () => {
    return (
        <>
            <Container>
                <img
                    src="/public/img/Container1/react.svg"
                    alt="React"
                    className="react"
                />
                <Box />
            </Container>
        </>
    )
}

export default Home
