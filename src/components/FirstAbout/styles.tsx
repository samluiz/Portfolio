import styled from 'styled-components'

export const Container = styled.section`
    min-height: 100vh;
    background-color: black;
    display: grid;
    grid-auto-flow: column;
    place-items: center;

    @media (max-width: 400px) {
        min-height: fit-content;
    }
`
