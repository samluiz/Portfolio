import React from 'react'
import Showcase from './Showcase'
import { Container } from './styles'
import Text from './Text'

const Projects: React.FC = () => {
    return (
        <>
            <Container id="projectId">
                <Text />
                <Showcase />
            </Container>
        </>
    )
}

export default Projects
