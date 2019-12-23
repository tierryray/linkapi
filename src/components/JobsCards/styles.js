import styled from 'styled-components';

export const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

export const Subtitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #3dc997;
  margin-top: 30px;
`;

export const Link = styled.a`
  font-size: 14px;
  text-decoration: underline;
`;

export const MainContentDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;

    small {
      color: #bbb;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
    }
  }
`;
