import styled from 'styled-components';

export const Container = styled.div`
  a {
    border-radius: 5px;
    border: 1px solid #cc00ff;
    display: flex;
    height: fit-content;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;

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
    transition-duration: 0.5s, 0.5s, 3s, 2s;
    transition-delay: 0s, 0s, 0.2s, 0s;
    transition-timing-function: ease, ease, ease, ease;
    transition-property: width, height, opacity, margin;
    display: block;
    font-size: 1rem;
    text-overflow: clip;
    opacity: 0;
    height: 0;
    width: 0;
  }

  img {
    width: 14rem;
    height: 9rem;
    object-fit: cover;
    transition-duration: 0.2s;

    &:hover {
      filter: brightness(0.5);
    }
  }
`;
