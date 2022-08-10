import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: baseline;
    max-width: fit-content;
    min-height: 6.5rem;
    font-size: 1.75rem;

    @media (max-width: 290px) {
        font-size: 1.2rem;
    }
`
