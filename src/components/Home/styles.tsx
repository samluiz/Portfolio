import styled from 'styled-components'

export const Container = styled.main`
    min-height: calc(100vh - 3.75rem);
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
`
