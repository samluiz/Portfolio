import styled from 'styled-components'

export const Container = styled.main`
    min-height: 100vh;
    min-width: 100vw;
    background-color: black;
    display: flex;
    align-items: center;

    .react {
        position: absolute;
        pointer-events: none;
        right: 15rem;
        -webkit-animation: rotate-center 60s ease-in-out infinite both;
        animation: rotate-center 60s ease-in-out infinite both;
    }

    @-webkit-keyframes rotate-center {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotate-center {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @media (max-width: 970px) {
        .react {
            right: 5rem;
        }
    }

    @media (max-width: 770px) {
        .react {
            width: 15.625rem;
            height: 15.625rem;
        }
    }

    @media (max-width: 670px) {
        .react {
            display: none;
        }
    }
`
