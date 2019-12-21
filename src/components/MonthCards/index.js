/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col } from 'react-bootstrap';
import StyledCard from '../Card';

import {
  Title,
  Link,
  Smaller,
  MainContent,
  Numbers,
  StyledProgressBar,
  StyledRow,
  DropdownRow,
  StyledDropdown,
} from './styles';

const MonthCards = () => (
  <>
    <StyledRow>
      <Col lg={4}>
        <StyledCard color="#b46edb">
          <Title color="#b46edb">Remaining transactions</Title>
          <Smaller>Renew on 2019-12-31</Smaller>
          <MainContent>99,964</MainContent>
          <Numbers>
            <span>100,036</span>
            <span>200,000</span>
          </Numbers>
          <StyledProgressBar now={100.036} max={200.0} />
          <Numbers>
            <span>executions consumed</span>
            <span>executions limit</span>
          </Numbers>
        </StyledCard>
      </Col>

      <Col lg={2}>
        <h2>December</h2>
        <StyledCard>
          <Title>Active jobs</Title>
          <Link href="#">View all jobs</Link>
          <MainContent>12</MainContent>
        </StyledCard>
      </Col>

      <Col lg={2}>
        <StyledCard color="#37AAFF">
          <Title color="#37AAFF">Active tenants</Title>
          <Link href="#">View all tenants</Link>
          <MainContent>1</MainContent>
        </StyledCard>
      </Col>

      <Col lg={2}>
        <StyledCard color="#3DC997">
          <Title color="#3DC997">Success</Title>
          <Smaller>December</Smaller>
          <MainContent>99.91%</MainContent>
        </StyledCard>
      </Col>

      <Col lg={2}>
        <StyledCard color="#EC4C3B">
          <Title color="#EC4C3B">Error</Title>
          <Smaller>December</Smaller>
          <MainContent>00.09%</MainContent>
        </StyledCard>
      </Col>
    </StyledRow>

    <DropdownRow style={{ marginTop: '10px' }}>
      <Col lg={2}>
        <StyledDropdown>
          <StyledDropdown.Toggle variant="" id="dropdown-basic">
            Last 7 days
          </StyledDropdown.Toggle>

          <StyledDropdown.Menu>
            <StyledDropdown.Item href="#/action-1">Action</StyledDropdown.Item>
          </StyledDropdown.Menu>
        </StyledDropdown>
      </Col>
      <Col lg={2}>
        <StyledDropdown>
          <StyledDropdown.Toggle variant="" id="dropdown-basic">
            All tenants
          </StyledDropdown.Toggle>

          <StyledDropdown.Menu>
            <StyledDropdown.Item href="#/action-1">Action</StyledDropdown.Item>
          </StyledDropdown.Menu>
        </StyledDropdown>
      </Col>
      <Col lg={2}>
        <StyledDropdown>
          <StyledDropdown.Toggle variant="" id="dropdown-basic">
            All projects
          </StyledDropdown.Toggle>

          <StyledDropdown.Menu>
            <StyledDropdown.Item href="#/action-1">Action</StyledDropdown.Item>
          </StyledDropdown.Menu>
        </StyledDropdown>
      </Col>
    </DropdownRow>
  </>
);

export default MonthCards;
