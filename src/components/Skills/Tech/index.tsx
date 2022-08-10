import React from 'react'
import { Container } from './styles'
import Javascript from '/public/img/Container4/Javascript.svg'
import Typescript from '/public/img/Container4/Typescript.svg'
import Node from '/public/img/Container4/Node.svg'
import ReactIcon from '/public/img/Container4/React.svg'
import SQL from '/public/img/Container4/SQL.svg'
import Tilt from 'react-parallax-tilt'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'

const Tech: React.FC = () => {
    return (
        <>
            <Container>
                <div className="tech">
                    <ScrollAnimation animateIn="fadeIn" animateOut="zoomOut">
                        <Tilt>
                            <img src={Javascript} alt="Javascript" />
                        </Tilt>
                    </ScrollAnimation>
                    <div className="center">
                        <div className="text">
                            <ScrollAnimation
                                animateIn="fadeInRightBig"
                                animateOut="zoomOut"
                            >
                                <span>Javascript</span>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <ScrollAnimation animateIn="fadeIn" animateOut="zoomOut">
                        <Tilt>
                            <img src={Typescript} alt="Typescript" />
                        </Tilt>
                    </ScrollAnimation>
                    <div className="center">
                        <div className="text">
                            <ScrollAnimation
                                animateIn="fadeInRightBig"
                                animateOut="zoomOut"
                            >
                                <span>Typescript</span>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <ScrollAnimation animateIn="fadeIn" animateOut="zoomOut">
                        <Tilt>
                            <img src={ReactIcon} alt="ReactIcon" />
                        </Tilt>
                    </ScrollAnimation>
                    <div className="center">
                        <div className="text">
                            <ScrollAnimation
                                animateIn="fadeInRightBig"
                                animateOut="zoomOut"
                            >
                                <span>ReactJS</span>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <ScrollAnimation animateIn="fadeIn" animateOut="zoomOut">
                        <Tilt>
                            <img src={Node} alt="Node" />
                        </Tilt>
                    </ScrollAnimation>
                    <div className="center">
                        <div className="text">
                            <ScrollAnimation
                                animateIn="fadeInRightBig"
                                animateOut="zoomOut"
                            >
                                <span>NodeJS</span>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="tech">
                    <ScrollAnimation animateIn="fadeIn" animateOut="zoomOut">
                        <Tilt>
                            <img src={SQL} alt="SQL" />
                        </Tilt>
                    </ScrollAnimation>
                    <div className="center">
                        <div className="text">
                            <ScrollAnimation
                                animateIn="fadeInRightBig"
                                animateOut="zoomOut"
                            >
                                <span>SQL</span>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Tech
