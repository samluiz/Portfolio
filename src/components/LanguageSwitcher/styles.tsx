import styled from 'styled-components'

export const Container = styled.button`
    display: grid;
    place-items: baseline;
    background-color: transparent;
    border: 1px solid #cc00ff;
    color: #cc00ff;
    position: fixed;
    right: -2rem;
    top: 50%;
    cursor: pointer;
    height: 3rem;
    border-radius: 10px;
    transition-duration: 0.2s;

    &:hover {
        right: 0;
        height: 7rem;
        transition-duration: 0.4s;

        .lang {
            display: none;
        }

        .brazil,
        .usa {
            display: block;
        }
    }

    .usa {
        border-radius: 10px;
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
        width: 50px;
        height: 50px;
    }

    @media (max-width: 670px) {
        .brazil,
        .usa {
            opacity: 0.1;

            &:active {
                opacity: 1;
                transform: scale(1.1);
            }
        }
    }
`
