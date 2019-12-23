import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../Card';

import { Title, StyledTable } from './styles';

const OverviewCard = () => (
  <Row>
    <Col lg={12}>
      <StyledCard style={{ marginRight: '10px' }}>
        <Title>Overview by last executions</Title>
        <StyledTable responsive>
          <thead>
            <tr>
              <th>Job</th>
              <th>Tenant</th>
              <th>Project</th>
              <th>Total Executions</th>
              <th
                style={{ color: '#3DC997', borderBottom: '2px solid #3DC997' }}
              >
                Success
              </th>
              <th
                style={{ color: '#ec4c3b', borderBottom: '2px solid #ec4c3b' }}
              >
                Error
              </th>
              <th
                style={{ color: '#F5BC52', borderBottom: '2px solid #F5BC52' }}
              >
                Reject
              </th>
              <th
                style={{ color: '#b46edb', borderBottom: '2px solid #b46edb' }}
              >
                Alert
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>create products</td>
              <td>#main</td>
              <td>test</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>create products</td>
              <td>#main</td>
              <td>test</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>create products</td>
              <td>#main</td>
              <td>test</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </StyledTable>
      </StyledCard>
    </Col>
  </Row>
);

export default OverviewCard;
