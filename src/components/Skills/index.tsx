import React from 'react'
import { Container } from './styles'
import Tech from './Tech'
import Title from './Title'

const Skills: React.FC = () => {
    return (
        <>
            <Container>
                <Title />
                <Tech />
            </Container>
        </>
    )
}

export default Skills
