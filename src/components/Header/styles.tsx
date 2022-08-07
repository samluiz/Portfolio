import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: space-around;
    height: 3.75rem;
    background-color: black;
    z-index: 100;
    width: 100%;
    position: fixed;

    @media (max-width: 670px) {
        justify-content: space-between;
        padding: 0 1rem;
    }
`
