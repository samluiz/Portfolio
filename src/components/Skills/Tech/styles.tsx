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

    @media (max-width: 490px) {
        width: 12rem;
    }

    @media (max-width: 270px) {
        width: 7rem;
    }
`
