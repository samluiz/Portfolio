import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    grid-auto-flow: column;
    gap: 2rem;

    svg {
        transition-duration: 0.2s;
        &:hover {
            transform: scale(1.02);
        }
    }
`
