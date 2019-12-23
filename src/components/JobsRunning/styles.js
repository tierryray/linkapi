import styled from 'styled-components';
import { Table } from 'react-bootstrap';

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;

  img {
    width: 60%;
  }
`;

export const StyledTable = styled(Table)`
  margin: 0;
  tr {
    text-align: center;

    th {
      text-align: left;
      color: #bbb;
      border-top: none;

      &:last-child {
        text-align: center;
        color: #ec4c3b;
        border-bottom: 2px solid #ec4c3b;
      }
    }

    td {
      text-align: left;
      color: #bbb;
      padding: 0.35rem;

      &:last-child {
        text-align: center;
        color: #ec4c3b;
      }
    }
  }
`;
