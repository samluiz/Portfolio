import styled from 'styled-components'

export const Container = styled.div`
    height: 4rem;
    width: 100vw;
    display: grid;
    place-items: center;
    background-color: #70008b;
    opacity: 20%;
    padding: 1rem;
    transition-duration: 0.5s;

    &:hover {
        opacity: 100%;
    }

    @media (max-width: 300px) {
        span {
            width: 14rem;
        }
    }
`
