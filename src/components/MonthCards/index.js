/* eslint-disable react/forbid-prop-types */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
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

const MonthCards = ({ data, actually, loading }) => (
  <>
    <OverTitle>Monthly overview</OverTitle>
    <StyledRow>
      <Col lg={4}>
        <StyledCard color="#b46edb" loading={loading}>
          {!loading && data && (
            <>
              <Title color="#b46edb">Remaining transactions</Title>
              <Smaller>Renew on 2019-12-31</Smaller>
              <MainContentDiv>
                <h1>{data.remainingTransactions}</h1>
              </MainContentDiv>
              <Numbers>
                <span>{data.executionsConsumed}</span>
                <span>{data.executionsLimit}</span>
              </Numbers>
              <StyledProgressBar
                now={parseInt(data.executionsConsumed)}
                max={parseInt(data.executionsLimit)}
              />
              <Numbers>
                <span>executions consumed</span>
                <span>executions limit</span>
              </Numbers>
            </>
          )}
        </StyledCard>
      </Col>

      <Col lg={2}>
        <OverTitle>December</OverTitle>
        <StyledCard loading={loading}>
          {!loading && actually && (
            <>
              <Title>Active jobs</Title>
              <span>
                <Link href="#">View all jobs</Link>
              </span>
              <MainContentDiv>
                <h1>{actually.activeJobs}</h1>
              </MainContentDiv>
            </>
          )}
        </StyledCard>
      </Col>

      <Col lg={2}>
        <StyledCard color="#37AAFF" loading={loading}>
          {!loading && actually && (
            <>
              <Title color="#37AAFF">Active tenants</Title>
              <span>
                <Link href="#">View all tenants</Link>
              </span>
              <MainContentDiv>
                <h1>{actually.activeTenants}</h1>
              </MainContentDiv>
            </>
          )}
        </StyledCard>
      </Col>

      <Col lg={2}>
        <StyledCard color="#3DC997" loading={loading}>
          {!loading && actually && (
            <>
              <Title color="#3DC997">Success</Title>
              <Smaller>December</Smaller>
              <MainContentDiv>
                <h1>{`${actually.success}%`}</h1>
              </MainContentDiv>
            </>
          )}
        </StyledCard>
      </Col>

      <Col lg={2}>
        <StyledCard color="#EC4C3B" loading={loading}>
          {!loading && actually && (
            <>
              <Title color="#EC4C3B">Error</Title>
              <Smaller>December</Smaller>
              <MainContentDiv>
                <h1>{`${actually.error}%`}</h1>
              </MainContentDiv>
            </>
          )}
        </StyledCard>
      </Col>
    </StyledRow>

    <DropdownRow>
      <Col lg={2}>
        <StyledDropdown>
          <StyledDropdown.Toggle variant="" id="dropdown-basic">
            Last 7 days
          </StyledDropdown.Toggle>

          <StyledDropdown.Menu>
            <StyledDropdown.Item href="#/action-1">
              Some Action
            </StyledDropdown.Item>
          </StyledDropdown.Menu>
        </StyledDropdown>
      </Col>
      <Col lg={2}>
        <StyledDropdown>
          <StyledDropdown.Toggle variant="" id="dropdown-basic">
            All tenants
          </StyledDropdown.Toggle>

          <StyledDropdown.Menu>
            <StyledDropdown.Item href="#/action-1">
              Some Action
            </StyledDropdown.Item>
          </StyledDropdown.Menu>
        </StyledDropdown>
      </Col>
      <Col lg={2}>
        <StyledDropdown>
          <StyledDropdown.Toggle variant="" id="dropdown-basic">
            All projects
          </StyledDropdown.Toggle>

          <StyledDropdown.Menu>
            <StyledDropdown.Item href="#/action-1">
              Some Action
            </StyledDropdown.Item>
          </StyledDropdown.Menu>
        </StyledDropdown>
      </Col>
    </DropdownRow>
  </>
);

MonthCards.propTypes = {
  data: PropTypes.object.isRequired,
  actually: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

MonthCards.defaultProps = {
  loading: false,
};

export default MonthCards;
