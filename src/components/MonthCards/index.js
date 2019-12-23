/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col } from 'react-bootstrap';
import StyledCard from '../Card';

import {
  OverTitle,
  Title,
  Link,
  Smaller,
  MainContentDiv,
  Numbers,
  StyledProgressBar,
  StyledRow,
  DropdownRow,
  StyledDropdown,
} from './styles';

const MonthCards = () => (
  <>
    <OverTitle>Monthly overview</OverTitle>
    <StyledRow>
      <Col lg={4}>
        <StyledCard color="#b46edb">
          <Title color="#b46edb">Remaining transactions</Title>
          <Smaller>Renew on 2019-12-31</Smaller>
          <MainContentDiv>
            <h1>99,964</h1>
          </MainContentDiv>
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
        <h2 style={{ margin: '20px 0' }}>December</h2>
        <StyledCard>
          <Title>Active jobs</Title>
          <span>
            <Link href="#">View all jobs</Link>
          </span>
          <MainContentDiv>
            <h1>12</h1>
          </MainContentDiv>
        </StyledCard>
      </Col>

      <Col lg={2}>
        <StyledCard color="#37AAFF">
          <Title color="#37AAFF">Active tenants</Title>
          <span>
            <Link href="#">View all tenants</Link>
          </span>
          <MainContentDiv>
            <h1>1</h1>
          </MainContentDiv>
        </StyledCard>
      </Col>

      <Col lg={2}>
        <StyledCard color="#3DC997">
          <Title color="#3DC997">Success</Title>
          <Smaller>December</Smaller>
          <MainContentDiv>
            <h1>99.91%</h1>
          </MainContentDiv>
        </StyledCard>
      </Col>

      <Col lg={2}>
        <StyledCard color="#EC4C3B">
          <Title color="#EC4C3B">Error</Title>
          <Smaller>December</Smaller>
          <MainContentDiv>
            <h1>00.09%</h1>
          </MainContentDiv>
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
