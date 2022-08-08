import React from 'react'
import { Container } from './styles'
import Image from '/public/img/Container3/Jacket.svg'
import Tilt from 'react-parallax-tilt'

const Body: React.FC = () => {
    return (
        <>
            <Container>
                <Tilt>
                    <img src={Image} alt="Body" />
                </Tilt>
            </Container>
        </>
    )
}

export default Body
