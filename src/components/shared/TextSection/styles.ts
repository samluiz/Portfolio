import styled from 'styled-components';

export const Container = styled.div`
  .text {
    font-size: 1.5rem;
    padding: 1rem;
    border-left: 1px solid #cc00ff;
    border-right: 1px solid #cc00ff;
  }

  text {
    font-size: 20px;
  }

  @media (max-width: 970px) {
    .text {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    .text {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 400px) {
    .text {
      font-size: 1.2rem;
    }
  }
`;
