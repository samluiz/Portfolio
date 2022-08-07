import React from 'react'
import { Container } from './styles'
import Typewriter from 'typewriter-effect'
import { homeData } from '../../../../text/texts'

const Welcome: React.FC = () => {
    return (
        <>
            <Container>
                <Typewriter
                    options={{
                        strings: [homeData.welcome],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Container>
        </>
    )
}

export default Welcome
