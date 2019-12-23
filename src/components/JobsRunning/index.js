import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../Card';

import NoJobs from '../../assets/images/404.png';

import { StyledContent, StyledTable } from './styles';

const JobsRunning = () => (
  <Row style={{ marginTop: '40px' }}>
    <Col lg={12}>
      <h3 style={{ fontWeight: 'bold' }}>Jobs Running</h3>
      <StyledCard color="#3DC997" border="left">
        <StyledContent>
          <img src={NoJobs} alt="No Jobs Running" />
          <span>No Jobs Running</span>
        </StyledContent>
      </StyledCard>
      <h3 style={{ fontWeight: 'bold', marginTop: '30px' }}>
        Tenant error overview
      </h3>
      <StyledCard color="#37AAFF">
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
  </Row>
);

export default JobsRunning;
