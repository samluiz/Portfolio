import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: 6rem;
    grid-auto-flow: column;
    gap: 2rem;

    svg {
        transition-duration: 0.2s;
        filter: grayscale(1);
        &:hover {
            filter: grayscale(0);
        }
    }

    @media (max-width: 670px) {
        display: none;
    }
`
