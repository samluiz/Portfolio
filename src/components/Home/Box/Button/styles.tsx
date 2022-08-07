import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: fit-content;

    button {
        border-left: 1px solid #cc00ff;
        border-right: 1px solid #cc00ff;
        border-bottom: none;
        border-top: none;
        border-radius: 10px;
        outline: none;
        height: 3.75rem;
        width: 12.5rem;
        color: #cc00ff;
        font-size: 1.75rem;
        background-color: transparent;
        transition-duration: 0.2s;
        cursor: pointer;
        &:hover {
            border-left: 5px double #8f00ac;
            border-right: 5px double #8f00ac;
            color: #8f00ac;
        }
    }

    a {
        color: #cc00ff;
        font-size: 1.75rem;
    }

    @media (max-width: 290px) {
        button {
            width: 6.25rem;
            height: 3.125rem;
            font-size: 0.9rem;
        }

        a {
            font-size: 0.9rem;
        }
    }
`
