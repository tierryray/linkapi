/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../Card';

import { Title, StyledTable } from './styles';

const OverviewCard = ({ data, loading }) => (
  <Row>
    <Col lg={12}>
      <StyledCard loading={loading}>
        {!loading && data && (
          <>
            <Title>Overview by last executions</Title>
            <StyledTable responsive>
              <thead>
                <tr>
                  <th>Job</th>
                  <th>Tenant</th>
                  <th>Project</th>
                  <th>Total Executions</th>
                  <th
                    style={{
                      color: '#3DC997',
                      borderBottom: '2px solid #3DC997',
                    }}
                  >
                    Success
                  </th>
                  <th
                    style={{
                      color: '#ec4c3b',
                      borderBottom: '2px solid #ec4c3b',
                    }}
                  >
                    Error
                  </th>
                  <th
                    style={{
                      color: '#F5BC52',
                      borderBottom: '2px solid #F5BC52',
                    }}
                  >
                    Reject
                  </th>
                  <th
                    style={{
                      color: '#b46edb',
                      borderBottom: '2px solid #b46edb',
                    }}
                  >
                    Alert
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>Teste</td>
                    <td>#main</td>
                    <td>LinkAPI</td>
                    <td>{item.total}</td>
                    <td>{item.success}</td>
                    <td>{item.error}</td>
                    <td>{item.reject}</td>
                    <td>{item.alert}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </>
        )}
      </StyledCard>
    </Col>
  </Row>
);

OverviewCard.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

OverviewCard.defaultProps = {
  loading: false,
};

export default OverviewCard;
