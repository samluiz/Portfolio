import React from 'react'
import Sidebar from '../Sidebar'
import { Container } from './styles'

const Navbar: React.FC = () => {
    return (
        <>
            <Container>
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#" className="border">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#" className="border">
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            </Container>
        </>
    )
}

export default Navbar
