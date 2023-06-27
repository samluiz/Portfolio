import React from 'react'
import { Container } from './styles'
import SloganWhite from '/src/img/Container1/Design Develop Deliver (2).svg'
import SloganSub from '/src/img/Container1/design develop deliver (1).svg'

const Slogan: React.FC = () => {
    return (
        <>
            <Container>
                <img src={SloganWhite} alt="Slogan" className='index'/>
                <img src={SloganSub} alt="Slogan" className="opacity" />
            </Container>
        </>
    )
}

export default Slogan
