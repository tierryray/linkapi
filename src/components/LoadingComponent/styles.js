import styled from 'styled-components';

export const Loading = styled.div`
  align-self: center;
  svg {
    animation: loading 0.75s linear infinite;
  }
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
