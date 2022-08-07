import React from 'react'
import Sidebar from '../Sidebar'
import { Container } from './styles'
import { navData } from '../../../text/texts'

const Navbar: React.FC = () => {
    return (
        <>
            <Container>
                <ul>
                    <li>
                        <a href="#">{navData.home}</a>
                    </li>
                    <li>
                        <a href="#firstAbout">{navData.about}</a>
                    </li>
                    <li>
                        <a href="#">{navData.projects}</a>
                    </li>
                    <li>
                        <a href="#">{navData.contact}</a>
                    </li>
                </ul>
            </Container>
        </>
    )
}

export default Navbar
