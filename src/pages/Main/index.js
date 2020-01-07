import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { StyledContainer } from './styles';

import Navbar from '../../components/Navbar';
import MonthCards from '../../components/MonthCards';
import TransactionsCards from '../../components/Transactions';
import JobsCards from '../../components/JobsCards';
import JobsRunningCard from '../../components/JobsRunningCard';
import OverviewCard from '../../components/OverviewCard';
import TenantOverviewCard from '../../components/TenantOverviewCard';

import api from '../../services/api';

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [monthlyOverview, setMonthlyOverview] = useState({});
  const [actually, setActually] = useState({});
  const [transactions, setTransactions] = useState({});
  const [jobs, setJobs] = useState({});
  const [overviewTable, setOverviewTable] = useState([]);
  const [tenantError, setTenantError] = useState([]);

  useEffect(() => {
    (async function getData() {
      const { data } = await api.get('dashboard');
      setMonthlyOverview(data.monthlyOverview);
      setActually(data.actually);
      setTransactions(data.transactions);
      setJobs(data.jobs);
      setTenantError(data.tenantError);
      setOverviewTable(data.overviewTable);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Navbar />

      <StyledContainer fluid>
        <MonthCards
          data={monthlyOverview}
          actually={actually}
          loading={loading}
        />
        <Row>
          <Col xs={12} md={8}>
            <TransactionsCards data={transactions} loading={loading} />
            <JobsCards data={jobs} loading={loading} />
            <OverviewCard data={overviewTable} loading={loading} />
          </Col>
          <Col xs={12} md={4}>
            <JobsRunningCard loading={loading} />
            <TenantOverviewCard data={tenantError} loading={loading} />
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
}
