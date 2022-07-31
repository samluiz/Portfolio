import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: fit-content;
    position: relative;

    img {
        pointer-events: none;
    }

    .index {
        z-index: 2;
    }

    .opacity {
        opacity: 30%;
        position: absolute;
        top: 0.625rem;
        left: 0.625rem;
        z-index: 1;
    }
`