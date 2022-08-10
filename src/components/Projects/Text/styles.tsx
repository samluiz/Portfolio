import styled from 'styled-components'

export const Container = styled.div`
    font-size: 5em;
    height: 30rem;
    width: 50%;
    display: flex;
    align-items: baseline;
    gap: 2rem;

    span {
        letter-spacing: 1.5rem;
    }

    @media (max-width: 1155px) {
        font-size: 3em;

        span {
            letter-spacing: 0.7rem;
        }
    }

    @media (max-width: 500px) {
        font-size: 1.5em;
        width: 10rem;
        justify-content: center;
        align-items: center;

        span {
            text-align: center;

            letter-spacing: 1rem;
        }
    }
`
