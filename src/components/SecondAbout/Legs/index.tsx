import React from 'react'
import { Container } from './styles'
import Image from '/public/img/Container3/Jogging.svg'
import Tilt from 'react-parallax-tilt'

const Jacket: React.FC = () => {
    return (
        <>
            <Container>
                <Tilt>
                    <img src={Image} alt="Legs" />
                </Tilt>
            </Container>
        </>
    )
}

export default Jacket
