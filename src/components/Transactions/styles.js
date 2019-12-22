import styled from 'styled-components';

export const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.color};
`;

export const Smaller = styled.small`
  color: #bbb;
`;

export const MainContentDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-weight: bold;
    margin: 10px 0 0 0;
  }

  small {
    color: #bbb;
    font-weight: bold;
  }
`;

export const MainContent = styled.h1`
  font-weight: bold;
  margin: 10px 0 0 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;
  }

  hr {
    margin: 5px 0;
  }
`;

export const ListItem = styled.li`
  span:first-child {
    font-weight: bold;

    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      height: 20px;
      width: 5px;
      border-radius: 5px;
      background: ${props => (props.color ? props.color : '#bbb')};
      margin-right: 4px;
    }
  }
`;
