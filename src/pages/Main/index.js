import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StyledContainer } from './styles';

import Navbar from '../../components/Navbar';
import MonthCards from '../../components/MonthCards';
import TransactionsCards from '../../components/Transactions';
import JobsRunning from '../../components/JobsRunning';
import JobsCards from '../../components/JobsCards';
import OverviewCard from '../../components/OverviewCard';

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
            <JobsRunning />
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
}
