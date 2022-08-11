import React from 'react'
import { Container } from './styles'
import Image from '/public/img/Container3/Jogging.svg'
import Tilt from 'react-parallax-tilt'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'

const Jacket: React.FC = () => {
    return (
        <>
            <Container>
                <Tilt>
                    <div className="leg">
                        <ScrollAnimation
                            animateIn="bounceInDown"
                            animateOut="zoomOut"
                        >
                            <img src={Image} alt="Legs" />
                        </ScrollAnimation>
                    </div>
                </Tilt>
            </Container>
        </>
    )
}

export default Jacket
