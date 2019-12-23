import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../Card';
import TenantOverviewCard from '../TenantOverviewCard';

import NoJobs from '../../assets/images/404.png';

import { OverTitle, StyledContent } from './styles';

const JobsRunning = () => (
  <Row>
    <Col lg={12}>
      <OverTitle>Jobs Running</OverTitle>
      <StyledCard color="#3DC997" border="left">
        <StyledContent>
          <img src={NoJobs} alt="No Jobs Running" />
          <span>No Jobs Running</span>
        </StyledContent>
      </StyledCard>
      <OverTitle>Tenant error overview</OverTitle>
      <TenantOverviewCard />
    </Col>
  </Row>
);

export default JobsRunning;
