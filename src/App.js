import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import MonthCards from './components/MonthCards';

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

      <Container fluid>
        <h2 style={{ fontWeight: 'bold', marginTop: '20px' }}>
          Monthly overview
        </h2>
        <MonthCards />
      </Container>
    </>
  );
}

export default App;
