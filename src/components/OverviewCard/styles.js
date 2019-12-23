import styled from 'styled-components';
import { Table } from 'react-bootstrap';

export const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.color};
`;

export const StyledTable = styled(Table)`
  margin: 0;

  th {
    border-top: none;
    color: #bbb;

    &:nth-last-child(-n + 5) {
      text-align: center;
    }
  }

  td {
    padding: 0.5rem;
    border-top: none;

    &:nth-last-child(-n + 5) {
      text-align: center;
    }
  }
`;
