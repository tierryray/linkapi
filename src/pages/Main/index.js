import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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

      <Container fluid style={{ paddingBottom: '20px' }}>
        <MonthCards />
        <Row>
          <Col lg={9}>
            <TransactionsCards />
            <JobsCards />
            <OverviewCard />
          </Col>
          <Col lg={3}>
            <JobsRunning />
          </Col>
        </Row>
      </Container>
    </>
  );
}
