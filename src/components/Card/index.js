import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const BordererCard = styled(Card)`
  min-height: 148px;
  border-top: 5px solid ${props => props.color};
`;

const StyledCard = props => {
  const { color, children } = props;

  return (
    <BordererCard
      color={color}
      className="shadow p-3 mt-3 bg-white rounded d-flex justify-content-center"
    >
      {children}
    </BordererCard>
  );
};

StyledCard.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

StyledCard.defaultProps = {
  color: '#bbb',
};

export default StyledCard;
