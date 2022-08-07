import React from 'react'
import { Container } from './styles'
import Image from '/public/img/Container2/purple.svg'

const MoonImg: React.FC = () => {
    return (
        <>
            <Container>
                <img src={Image} alt="Desk" />
            </Container>
        </>
    )
}

export default MoonImg
