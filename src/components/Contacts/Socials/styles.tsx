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
    font-size: 1.5rem;

    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    svg {
        width: 70px;
        height: 70px;
    }

    svg {
        transition-duration: 0.2s;
        filter: grayscale(1);
        &:hover {
            cursor: pointer;
            filter: grayscale(0);
        }
    }

    .center {
        width: 70%;
    }

    span {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        cursor: pointer;
        letter-spacing: 1rem;
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

    @media (max-width: 490px) {
        width: 12rem;

        svg {
            width: 50px;
            height: 50px;
        }

        a {
            justify-content: center;
        }

        span {
            letter-spacing: 0;
            font-size: 1rem;
        }
    }

    @media (max-width: 270px) {
        width: 7rem;

        a {
            justify-content: center;
            flex-direction: column;
        }

        span {
            letter-spacing: 0;
            display: none;
        }
    }
`
