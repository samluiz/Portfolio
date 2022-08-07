import styled from 'styled-components'

export const Container = styled.section`
    min-height: 100vh;
    min-width: 100vw;
    background-color: black;
    display: grid;
    place-items: center;
    grid-auto-flow: row;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @media (max-width: 400px) {
        grid-auto-flow: row;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);
    }
`
