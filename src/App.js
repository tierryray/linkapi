import React from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import MonthCards from './components/MonthCards';
import TransactionsCards from './components/Transactions';
import JobsRunning from './components/JobsRunning';
import JobsCards from './components/JobsCards';
import OverviewCard from './components/OverviewCard';

const StyledNavbar = styled(Navbar)`
  background-color: #39bd8e;
`;

const Logo = styled.span`
  padding: 5px 10px;
`;

function App() {
  return (
    <>
      <StyledNavbar variant="dark" expand="lg">
        <Navbar.Brand href="#" className="d-flex justify-content-between">
          <Logo>LinkAPI</Logo>
        </Navbar.Brand>
      </StyledNavbar>

      <Container fluid style={{ paddingBottom: '20px' }}>
        <MonthCards />
        <Row>
          <Col lg={9}>
            <TransactionsCards />
            <JobsCards />
            <OverviewCard />
          </Col>
          <Col lg={3}>
            <JobsRunning />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
