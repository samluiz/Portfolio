import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: 6rem;
    grid-auto-flow: column;
    gap: 2rem;

    svg {
        transition-duration: 0.2s;
        &:hover {
            transform: scale(1.02);
        }
    }

    @media (max-width: 670px) {
        display: none;
    }
`
