import React from 'react'
import { Container } from './styles'
import Image from '/public/img/Container3/Jogging.svg'

const Jacket: React.FC = () => {
    return (
        <>
            <Container>
                <img src={Image} alt="Legs" />
            </Container>
        </>
    )
}

export default Jacket
