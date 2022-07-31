import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: fit-content;

    button {
        border-left: 1px solid #cc00ff;
        border-right: 1px solid #cc00ff;
        border-radius: 10px;
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
`
