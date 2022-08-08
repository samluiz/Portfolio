import React from 'react'
import Socials from './Socials'
import { Container } from './styles'
import Title from './Title'

const Contacts: React.FC = () => {
    return (
        <>
            <Container id="contactSection">
                <Title />
                <Socials />
            </Container>
        </>
    )
}

export default Contacts
