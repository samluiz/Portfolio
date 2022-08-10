import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100%;
    width: 50%;

    .leg {
        transition-duration: 0.2s;

        &:hover {
            transform: scale(1.2);
        }
    }

    @media (max-width: 970px) {
        .leg {
            width: 200px;
            height: 200px;
        }
    }

    @media (max-width: 670px) {
        .leg {
            width: 150px;
            height: 150px;
        }
    }

    @media (max-width: 470px) {
        .leg {
            width: 100px;
            height: 100px;
        }
    }

    @media (max-width: 400px) {
        width: 0;
        .leg {
            display: none;
        }
    }
`
