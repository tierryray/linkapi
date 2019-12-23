import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../Card';

import NoJobs from '../../assets/images/404.png';

import { OverTitle, StyledContent } from './styles';

const JobsRunningCard = () => (
  <Row>
    <Col lg={12}>
      <OverTitle>Jobs Running</OverTitle>
      <StyledCard color="#3DC997" border="left">
        <StyledContent>
          <img src={NoJobs} alt="No Jobs Running" />
          <span>No Jobs Running</span>
        </StyledContent>
      </StyledCard>
    </Col>
  </Row>
);

export default JobsRunningCard;
