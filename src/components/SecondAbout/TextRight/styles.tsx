import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 50%;

  @media (max-width: 400px) {
    width: 100%;
    padding: 1.5rem;
  }
`;
