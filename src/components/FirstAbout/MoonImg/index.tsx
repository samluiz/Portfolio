import React from 'react'
import { Container } from './styles'
import Image from '/public/img/Container2/purple.svg'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'

const MoonImg: React.FC = () => {
    return (
        <>
            <Container>
                <div className="moon">
                    <ScrollAnimation
                        animateIn="backInLeft"
                        animateOut="zoomOut"
                    >
                        <img src={Image} alt="Desk" />
                    </ScrollAnimation>
                </div>
            </Container>
        </>
    )
}

export default MoonImg
