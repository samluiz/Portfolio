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
        opacity: 50%;
        position: absolute;
        top: 0.625rem;
        left: 0.625rem;
        z-index: 1;
    }

    @media (max-width: 290px) {
        img {
            width: 150px;
            height: 150px;
        }
    }
`
