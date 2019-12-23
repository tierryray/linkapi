import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../Card';

import { OverTitle, StyledTable } from './styles';

const TenantOverviewCard = () => (
  <Row>
    <Col lg={12}>
      <OverTitle>Tenant error overview</OverTitle>
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

export default TenantOverviewCard;
