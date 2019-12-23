import React from 'react';
import StyledCard from '../Card';

import { StyledTable } from './styles';

const TenantOverviewCard = () => (
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
);

export default TenantOverviewCard;
