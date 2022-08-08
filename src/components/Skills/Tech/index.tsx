import React from 'react'
import { Container } from './styles'
import Javascript from '/public/img/Container4/Javascript.svg'
import Typescript from '/public/img/Container4/Typescript.svg'
import Node from '/public/img/Container4/Node.svg'
import ReactIcon from '/public/img/Container4/React.svg'
import SQL from '/public/img/Container4/SQL.svg'
import Tilt from 'react-parallax-tilt'

const Tech: React.FC = () => {
    return (
        <>
            <Container>
                <div className="tech">
                    <Tilt>
                        <img src={Javascript} alt="Javascript" />
                    </Tilt>
                    <div className="center">
                        <span>Javascript</span>
                    </div>
                </div>
                <div className="tech">
                    <Tilt>
                        <img src={Typescript} alt="Typescript" />
                    </Tilt>
                    <div className="center">
                        <span>Typescript</span>
                    </div>
                </div>
                <div className="tech">
                    <Tilt>
                        <img src={ReactIcon} alt="ReactIcon" />
                    </Tilt>
                    <div className="center">
                        <span>React</span>
                    </div>
                </div>
                <div className="tech">
                    <Tilt>
                        <img src={Node} alt="Node" />
                    </Tilt>
                    <div className="center">
                        <span>Node</span>
                    </div>
                </div>

                <div className="tech">
                    <Tilt>
                        <img src={SQL} alt="SQL" />
                    </Tilt>
                    <div className="center">
                        <span>SQL</span>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Tech
