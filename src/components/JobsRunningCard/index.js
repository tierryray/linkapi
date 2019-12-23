import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../Card';

import NoJobs from '../../assets/images/404.png';

import { OverTitle, StyledContent } from './styles';

const JobsRunningCard = ({ loading }) => (
  <Row>
    <Col lg={12}>
      <OverTitle>Jobs Running</OverTitle>
      <StyledCard color="#3DC997" border="left" loading={loading}>
        {!loading && (
          <StyledContent>
            <img src={NoJobs} alt="No Jobs Running" />
            <span>No Jobs Running</span>
          </StyledContent>
        )}
      </StyledCard>
    </Col>
  </Row>
);

JobsRunningCard.propTypes = {
  loading: PropTypes.bool,
};

JobsRunningCard.defaultProps = {
  loading: true,
};

export default JobsRunningCard;
