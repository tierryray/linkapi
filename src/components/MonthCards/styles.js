import styled from 'styled-components';

import { ProgressBar, Row, Dropdown } from 'react-bootstrap';

export const OverTitle = styled.h2`
  font-weight: bold;
  margin-top: 20px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.color};
`;

export const Link = styled.a`
  display: inline;
  text-decoration: underline;
  font-size: 14px;
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
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;

  span {
    color: #b46edb;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const StyledProgressBar = styled(ProgressBar)`
  border-radius: 1rem;
  .progress-bar {
    background-color: #b46edb;
  }
`;

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const DropdownRow = styled(Row)`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const StyledDropdown = styled(Dropdown)`
  margin-top: 10px;
  button {
    font-size: 12px;
    background: #fff;
    border: 1px solid #ccc;
  }

  .dropdown-menu {
    font-size: 12px;
  }

  .dropdown-toggle::after {
    margin-left: 65px;
  }
`;
