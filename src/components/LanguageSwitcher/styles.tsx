import styled from 'styled-components'

export const Container = styled.button`
    display: grid;
    place-items: start;
    background-color: transparent;
    border: none;
    color: #cc00ff;
    position: absolute;
    opacity: 0.3;
    top: 0.8rem;
    right: 0.5rem;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover,
    &:focus {
        opacity: 1;
        transition-duration: 0.4s;

        .lang {
            display: none;
            opacity: 0.2;
        }

        .brazil,
        .usa {
            display: inline-block;
        }
    }

    .brazil,
    .usa {
        transition-duration: 0.6s;
        opacity: 0.1;
        display: none;

        &:hover {
            opacity: 1;
        }

        &:active {
            transform: scale(1.1);
        }
    }

    .icon {
        width: 1.875rem;
        height: 1.875rem;
    }

    @media (max-width: 670px) {
        position: static;

        .icon {
            width: 50px;
            height: 50px;
        }

        .brazil,
        .usa {
            opacity: 0.1;

            &:active {
                opacity: 1;
                transform: scale(1.1);
            }
        }
    }

    @media (max-width: 890px) {
        top: 3rem;
    }
`
