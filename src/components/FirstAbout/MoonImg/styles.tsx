import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100%;
    width: 50%;
    pointer-events: none;

    @media (max-width: 970px) {
        .moon img {
            width: 300px;
            height: 300px;
        }
    }

    @media (max-width: 600px) {
        .moon img {
            width: 200px;
            height: 200px;
        }
    }

    @media (max-width: 400px) {
        .moon img {
            display: none;
        }
    }
`
