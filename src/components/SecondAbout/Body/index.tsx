import React from 'react'
import { Container } from './styles'
import Image from '/src/img/Container3/Jacket.svg'
import Tilt from 'react-parallax-tilt'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'

const Body: React.FC = () => {
    return (
        <>
            <Container>
                <Tilt>
                    <div className="body">
                        <ScrollAnimation
                            animateIn="bounceIn"
                            animateOut="zoomOut"
                        >
                            <img src={Image} alt="Body" />
                        </ScrollAnimation>
                    </div>
                </Tilt>
            </Container>
        </>
    )
}

export default Body
