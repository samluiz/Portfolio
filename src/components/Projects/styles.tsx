import styled from 'styled-components'

export const Container = styled.section`
    min-height: 100vh;
    max-width: 100vw;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 1rem;

    @media (max-width: 570px) {
        flex-direction: column;
    }
`
