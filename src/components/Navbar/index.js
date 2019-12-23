import React from 'react';

import { StyledNavbar, Logo } from './styles';

const Navbar = () => (
  <StyledNavbar variant="dark" expand="lg">
    <StyledNavbar.Brand href="#" className="d-flex justify-content-between">
      <Logo>LinkAPI</Logo>
    </StyledNavbar.Brand>
  </StyledNavbar>
);

export default Navbar;
