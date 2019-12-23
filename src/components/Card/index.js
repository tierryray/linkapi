import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Loading from '../LoadingComponent';

const BordererCard = styled(Card)`
  min-height: 148px;
  ${props => `border-${props.borderside}: 5px solid ${props.color}`};
  transform: scale(1);
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledCard = ({ color, border, loading, children }) => {
  return (
    <BordererCard
      color={color}
      borderside={border}
      loading={loading}
      className="shadow p-3 mt-3 bg-white rounded d-flex justify-content-center"
    >
      {loading && <Loading />}
      {children}
    </BordererCard>
  );
};

StyledCard.propTypes = {
  color: PropTypes.string,
  border: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

StyledCard.defaultProps = {
  color: '#bbb',
  border: 'top',
  loading: true,
};

export default StyledCard;
