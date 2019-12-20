import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background-color: #39bd8e;
`;

const Logo = styled.span`
  padding: 5px 10px;
`;

function App() {
  return (
    <StyledNavbar variant="dark" expand="lg">
      <Navbar.Brand href="#">
        <Logo>LinkAPI</Logo>
      </Navbar.Brand>
    </StyledNavbar>
  );
}

export default App;
