import React from 'react';
import { Col, Table } from 'react-bootstrap';
import StyledCard from '../Card';

import NoJobs from '../../assets/images/404.png';

import { StyledContent, StyledTable } from './styles';

const JobsRunning = () => (
  <Col lg={3}>
    <h2 style={{ fontWeight: 'bold', marginTop: '-38px' }}>Jobs Running</h2>
    <StyledCard color="#3DC997" border="left">
      <StyledContent>
        <img src={NoJobs} alt="No Jobs Running" />
        <span>No Jobs Running</span>
      </StyledContent>
    </StyledCard>
    <h2 style={{ fontWeight: 'bold', marginTop: '20px' }}>
      Tenant error overview
    </h2>
    <StyledCard color="#3DC997">
      <StyledTable>
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Error</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#main</td>
            <td>74</td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledCard>
  </Col>
);

export default JobsRunning;
