import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StyledCard from '../Card';

import { Title, Smaller, MainContentDiv, StyledList, ListItem } from './styles';

const Transactions = () => (
  <>
    <h2 style={{ fontWeight: 'bold', marginTop: '30px' }}>Transactions</h2>
    <Row>
      <Col lg={4}>
        <StyledCard color="#3DC997">
          <Title color="#3DC997">Success</Title>
          <Smaller>December</Smaller>
          <MainContentDiv>
            <h1>00.09%</h1>
            <small>64 results</small>
          </MainContentDiv>
        </StyledCard>
      </Col>

      <Col lg={4}>
        <StyledCard color="#EC4C3B">
          <Title color="#EC4C3B">Error</Title>
          <Smaller>December</Smaller>
          <MainContentDiv>
            <h1>00.09%</h1>
            <small>83,229 results</small>
          </MainContentDiv>
        </StyledCard>
      </Col>

      <Col lg={4}>
        <StyledCard>
          <StyledList>
            <ListItem color="#F4AB23">
              <span>Reject</span>
              <span>0%</span>
            </ListItem>
            <hr />
            <ListItem color="#B46EDB">
              <span>Alert</span>
              <span>0%</span>
            </ListItem>
            <hr />
            <ListItem>
              <span color="blue">Empty</span>
              <span>0%</span>
            </ListItem>
          </StyledList>
        </StyledCard>
      </Col>
    </Row>
  </>
);

export default Transactions;
