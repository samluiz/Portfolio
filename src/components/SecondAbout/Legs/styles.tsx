import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100%;
    width: 50%;

    @media (max-width: 970px) {
        img {
            width: 200px;
            height: 200px;
        }
    }

    @media (max-width: 670px) {
        img {
            width: 150px;
            height: 150px;
        }
    }

    @media (max-width: 470px) {
        img {
            width: 100px;
            height: 100px;
        }
    }

    @media (max-width: 400px) {
        width: 0;
        img {
            display: none;
        }
    }
`
