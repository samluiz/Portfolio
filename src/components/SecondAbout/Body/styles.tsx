import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100%;
    width: 50%;

    .bodyimg {
        transition-duration: 0.2s;

        &:hover {
            transform: scale(1.2);
        }
    }

    @media (max-width: 970px) {
        .body img {
            width: 200px;
            height: 200px;
        }
    }

    @media (max-width: 670px) {
        .body img {
            width: 150px;
            height: 150px;
        }
    }

    @media (max-width: 470px) {
        .body img {
            width: 100px;
            height: 100px;
        }
    }

    @media (max-width: 400px) {
        width: 0;
        .body img {
            display: none;
        }
    }
`
