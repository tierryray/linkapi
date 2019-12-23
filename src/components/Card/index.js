import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const BordererCard = styled(Card)`
  min-height: 148px;
  ${props => `border-${props.borderside}: 5px solid ${props.color}`};
  transform: scale(1);
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledCard = props => {
  const { color, border, children } = props;

  return (
    <BordererCard
      color={color}
      borderside={border}
      className="shadow p-3 mt-3 bg-white rounded d-flex justify-content-center"
    >
      {children}
    </BordererCard>
  );
};

StyledCard.propTypes = {
  color: PropTypes.string,
  border: PropTypes.string,
  children: PropTypes.node.isRequired,
};

StyledCard.defaultProps = {
  color: '#bbb',
  border: 'top',
};

export default StyledCard;
