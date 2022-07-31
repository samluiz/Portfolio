import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: fit-content;
    grid-auto-flow: column;
    gap: 1rem;

    svg {
        transition-duration: 0.5s;
        &:hover {
            transform: rotate(-90deg);
        }
    }

    span {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
    }

    span {
        &:before {
            content: '';
            position: absolute;
            z-index: 3;
            left: 51%;
            right: 51%;
            top: 0;
            background: #cc00ff;
            height: 1px;
            -webkit-transition-property: left, right;
            transition-property: left, right;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
    }
    span {
        &:hover {
            &:before {
                left: 0;
                right: 0;
            }
        }
    }
`
