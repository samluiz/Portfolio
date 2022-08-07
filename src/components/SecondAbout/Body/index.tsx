import React from 'react'
import { Container } from './styles'
import Image from '/public/img/Container3/Jacket.svg'

const Body: React.FC = () => {
    return (
        <>
            <Container>
                <img src={Image} alt="Body" />
            </Container>
        </>
    )
}

export default Body
