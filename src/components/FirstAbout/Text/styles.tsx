import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100%;
    width: 50%;

    span {
        font-size: 1.5rem;
        padding: 1rem;
        border-left: 1px solid #cc00ff;
        border-right: 1px solid #cc00ff;
    }

    text {
        font-size: 20px;
    }
    svg {
        position: absolute;
    }

    @media (max-width: 970px) {
        span {
            font-size: 1rem;
        }
    }

    @media (max-width: 600px) {
        span {
            font-size: 0.75rem;
        }
    }

    @media (max-width: 400px) {
        width: 100%;
        padding: 1.5rem;
        span {
            font-size: 1.2rem;
        }
    }
`
