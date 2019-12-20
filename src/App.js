import React from 'react';
import { Container, Navbar, Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background-color: #39bd8e;
`;

const Logo = styled.span`
  padding: 5px 10px;
`;

const StyledCard = styled(Card)`
  border-top: 5px solid #b46edb;

  span {
    font-size: 18px;
    font-weight: bold;
    color: #b46edb;
  }

  small {
    color: #c2c2c2;
  }

  h2 {
    font-weight: bold;
    margin-top: 10px;
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

      <Container>
        <Row>
          <Col lg={4}>
            <StyledCard className="shadow p-4 mt-3 bg-white rounded">
              <span>Remaining transactions</span>
              <small>Renew on 2019-12-31</small>
              <h2>99,964</h2>

              {/* <ContainerBar>
                <Bar />
              </ContainerBar> */}
            </StyledCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
