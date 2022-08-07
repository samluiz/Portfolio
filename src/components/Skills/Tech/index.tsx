import React from 'react'
import { Container } from './styles'
import Javascript from '/public/img/Container4/Javascript.svg'
import Typescript from '/public/img/Container4/Typescript.svg'
import Node from '/public/img/Container4/Node.svg'
import ReactIcon from '/public/img/Container4/React.svg'
import SQL from '/public/img/Container4/SQL.svg'

const Tech: React.FC = () => {
    return (
        <>
            <Container>
                <div className="tech">
                    <img src={Javascript} alt="Javascript" />
                    <div className="center">
                        <span>Javascript</span>
                    </div>
                </div>
                <div className="tech">
                    <img src={Typescript} alt="Typescript" />
                    <div className="center">
                        <span>Typescript</span>
                    </div>
                </div>
                <div className="tech">
                    <img src={Node} alt="Node" />
                    <div className="center">
                        <span>Node</span>
                    </div>
                </div>
                <div className="tech">
                    <img src={ReactIcon} alt="ReactIcon" />
                    <div className="center">
                        <span>React</span>
                    </div>
                </div>
                <div className="tech">
                    <img src={SQL} alt="SQL" />
                    <div className="center">
                        <span>SQL</span>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Tech
