import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StyledContainer } from './styles';

import Navbar from '../../components/Navbar';
import MonthCards from '../../components/MonthCards';
import TransactionsCards from '../../components/Transactions';
import JobsCards from '../../components/JobsCards';
import JobsRunningCard from '../../components/JobsRunningCard';
import OverviewCard from '../../components/OverviewCard';
import TenantOverviewCard from '../../components/TenantOverviewCard';

export default function Main() {
  return (
    <>
      <Navbar />

      <StyledContainer fluid>
        <MonthCards />
        <Row>
          <Col xs={12} md={8}>
            <TransactionsCards />
            <JobsCards />
            <OverviewCard />
          </Col>
          <Col xs={12} md={4}>
            <JobsRunningCard />
            <TenantOverviewCard />
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
}
