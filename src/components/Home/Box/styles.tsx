import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: start;
    gap: 4.5rem;
    margin-left: 20%;

    @media (max-width: 670px) {
        margin: 0 auto;
        gap: 2rem;
    }
`
