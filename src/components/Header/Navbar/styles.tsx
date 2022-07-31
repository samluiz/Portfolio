import styled from 'styled-components'

export const Container = styled.nav`
    display: grid;
    place-items: center;
    width: fit-content;
    -webkit-text-stroke: 0.3px black;
    ul {
        display: grid;
        grid-auto-flow: column;
        width: fit-content;
        gap: 1px;
        background-color: #cc00ff;
    }

    li {
        background-color: black;
        padding: 0 1rem 0 1rem;
    }

    a {
        transition-duration: 0.2s;
        &:hover {
            color: gray;
        }
    }
`
