import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: fit-content;
    grid-auto-flow: column;
    gap: 1rem;

    svg {
        transition-duration: 0.2s;
        &:hover {
            a {
            }
            transform: rotate(-90deg);
        }
    }

    a {
        &:hover {
            text-decoration: overline #cc00ff 1px;
        }
    }
`
