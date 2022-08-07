import React from 'react'
import { Container } from './styles'
import { homeData } from '../../../../text/texts'

const Button: React.FC = () => {
    return (
        <>
            <Container>
                <button>
                    <a href="#firstAbout">{homeData.button}</a>
                </button>
            </Container>
        </>
    )
}

export default Button
