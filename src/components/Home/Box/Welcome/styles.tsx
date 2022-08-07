import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    max-width: fit-content;
    font-size: 1.75rem;

    @media (max-width: 290px) {
        font-size: 1.2rem;
    }
`
