import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const BordererCard = styled(Card)`
  border-top: 5px solid ${props => props.color};
`;

const StyledCard = props => {
  const { color, children } = props;

  return (
    <BordererCard color={color} className="shadow p-3 mt-3 bg-white rounded">
      {children}
    </BordererCard>
  );
};

StyledCard.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

StyledCard.defaultProps = {
  color: '#c7c7c7',
};

export default StyledCard;
