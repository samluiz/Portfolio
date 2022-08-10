import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100%;
    width: 50%;

    .body {
        transition-duration: 0.2s;

        &:hover {
            transform: scale(1.2);
        }
    }

    @media (max-width: 970px) {
        .body {
            width: 200px;
            height: 200px;
        }
    }

    @media (max-width: 670px) {
        .body {
            width: 150px;
            height: 150px;
        }
    }

    @media (max-width: 470px) {
        .body {
            width: 100px;
            height: 100px;
        }
    }

    @media (max-width: 400px) {
        width: 0;
        .body {
            display: none;
        }
    }
`
