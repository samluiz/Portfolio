import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    min-height: fit-content;
    min-width: fit-content;
    gap: 1rem;
    border-top: 1px solid #cc00ff;
    border-bottom: 1px solid #cc00ff;
    padding: 1rem;
    place-items: center;

    a {
        border-radius: 5px;
        border: 1px solid #cc00ff;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        overflow: hidden;
        transition-duration: 0.2s;

        &:hover {
            gap: 1rem;
            span {
                width: 14rem;
                opacity: 1;
                margin: 1rem;
            }

            @media (max-width: 770px) {
                flex-direction: column;
                gap: 1rem;
                span {
                    height: 16rem;
                    width: 0;
                    opacity: 1;
                    margin: 1rem;
                }
            }
        }
    }

    span {
        transition-duration: 0.5s, 0.5s, 3s;
        transition-property: width, height, opacity;
        display: block;
        font-size: 1.2rem;
        opacity: 0;
        height: 0;
        width: 0;
    }

    img {
        width: 12.5rem;
        height: 7.5rem;
        transition-duration: 0.2s;

        &:hover {
            filter: brightness(0.5);
        }
    }
`
