import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    gap: 1rem;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-top: none;
    border-bottom: none;
    width: 30rem;
    padding: 1rem;

    .tech {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    img {
        transition-duration: 0.2s;
        filter: grayscale(1);
        &:hover {
            cursor: pointer;
            filter: grayscale(0);
        }
    }

    span {
        letter-spacing: 1rem;
    }

    .center {
        width: 70%;
    }

    @media (max-width: 490px) {
        width: 16rem;

        span {
            letter-spacing: 0;
            font-size: 1.5rem;
        }
    }

    @media (max-width: 270px) {
        width: 7rem;

        span {
            display: none;
        }
    }
`
