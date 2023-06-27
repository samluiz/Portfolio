import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  min-height: fit-content;
  min-width: fit-content;
  gap: 1rem;
  border-top: 1px solid #cc00ff;
  border-bottom: 1px solid #cc00ff;
  padding: 1rem;
  place-items: center;
  z-index: 10;
  overflow: hidden;

  @media (max-width: 570px) {
    &:before {
      content: 'Press & hold 👆';
    }
  }
`;
