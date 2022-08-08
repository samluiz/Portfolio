import styled from 'styled-components'

export const Container = styled.header`
    #hide {
        margin-top: -3.75rem;
        background-color: white;
    }
    display: flex;
    justify-content: space-around;
    height: 3.75rem;
    background-color: black;
    z-index: 100;
    width: 100vw;
    top: 0;
    position: fixed;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;

    @media (max-width: 670px) {
        justify-content: space-between;
        padding: 0 1rem;
    }
`
