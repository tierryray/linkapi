/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../Card';

import { OverTitle, StyledTable } from './styles';

const TenantOverviewCard = ({ data, loading }) => (
  <Row>
    <Col lg={12}>
      <OverTitle>Tenant error overview</OverTitle>
      <StyledCard color="#37AAFF" loading={loading}>
        {!loading && data && (
          <StyledTable>
            <thead>
              <tr>
                <th>Tenant</th>
                <th>Error</th>
              </tr>
            </thead>
            <tbody>
              {data.map(tenant => (
                <tr key={tenant.id}>
                  <td>{tenant.tenant}</td>
                  <td>{tenant.error}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        )}
      </StyledCard>
    </Col>
  </Row>
);

TenantOverviewCard.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

TenantOverviewCard.defaultProps = {
  loading: true,
};

export default TenantOverviewCard;
