import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    width: fit-content;
    place-items: center;

    span {
        text-align: center;
        &::before {
            content: '< ';
            color: #cc00ff;
        }
        &::after {
            content: ' />';
            color: #cc00ff;
        }
    }

    @media (max-width: 300px) {
        font-size: 1.5rem;
    }
`
