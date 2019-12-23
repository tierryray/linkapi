import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import MonthCards from './components/MonthCards';
import TransactionsCards from './components/Transactions';
import JobsRunning from './components/JobsRunning';

const StyledNavbar = styled(Navbar)`
  background-color: #39bd8e;
`;

const Logo = styled.span`
  padding: 5px 10px;
`;

const StyledDiv = styled.div`
  display: flex;

  div:first-child {
    flex: 4;
  }

  div:last-child {
    flex: 1;
  }
`;

function App() {
  return (
    <>
      <StyledNavbar variant="dark" expand="lg">
        <Navbar.Brand href="#" className="d-flex justify-content-between">
          <Logo>LinkAPI</Logo>
        </Navbar.Brand>
      </StyledNavbar>

      <Container fluid>
        <MonthCards />
        <StyledDiv>
          <div>
            <TransactionsCards />
            <TransactionsCards />
          </div>
          <div>
            <JobsRunning />
          </div>
        </StyledDiv>
      </Container>
    </>
  );
}

export default App;
