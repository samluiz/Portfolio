import styled from 'styled-components'

export const Container = styled.div`
    height: 4rem;
    width: 100vw;
    display: grid;
    place-items: center;
    background-color: #70008b;
    padding: 1rem;

    @media (max-width: 300px) {
        span {
            width: 14rem;
        }
    }
`
