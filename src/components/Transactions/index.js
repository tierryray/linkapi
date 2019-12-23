import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import StyledCard from '../Card';

import {
  OverTitle,
  Title,
  Smaller,
  MainContentDiv,
  StyledList,
  ListItem,
} from './styles';

const Transactions = ({ data, loading }) => (
  <>
    <OverTitle>Transactions</OverTitle>
    <Row>
      <Col xs={12} md={12} lg={4}>
        <StyledCard color="#3DC997" loading={loading}>
          {!loading && data && (
            <>
              <Title color="#3DC997">Success</Title>
              <Smaller>December</Smaller>
              <MainContentDiv>
                <h1>{`${data.percentageSuccess}%`}</h1>
                <small>{data.successResults} results</small>
              </MainContentDiv>
            </>
          )}
        </StyledCard>
      </Col>

      <Col xs={12} md={12} lg={4}>
        <StyledCard color="#EC4C3B" loading={loading}>
          {!loading && data && (
            <>
              <Title color="#EC4C3B">Error</Title>
              <Smaller>December</Smaller>
              <MainContentDiv>
                <h1>{`${data.percentageError}%`}</h1>
                <small>{data.errorResults} results</small>
              </MainContentDiv>
            </>
          )}
        </StyledCard>
      </Col>

      <Col xs={12} md={12} lg={4}>
        <StyledCard loading={loading}>
          {!loading && data && (
            <>
              <StyledList>
                <ListItem color="#F4AB23">
                  <span>Reject</span>
                  <span>{`${data.reject}%`}</span>
                </ListItem>
                <hr />
                <ListItem color="#B46EDB">
                  <span>Alert</span>
                  <span>{`${data.alert}%`}</span>
                </ListItem>
                <hr />
                <ListItem>
                  <span color="blue">Empty</span>
                  <span>{`${data.empty}%`}</span>
                </ListItem>
              </StyledList>
            </>
          )}
        </StyledCard>
      </Col>
    </Row>
  </>
);

Transactions.defaultProps = {
  loading: false,
};

Transactions.propTypes = {
  data: PropTypes.shape({
    percentageSuccess: PropTypes.string,
    percentageError: PropTypes.string,
    successResults: PropTypes.number,
    errorResults: PropTypes.string,
    reject: PropTypes.number,
    alert: PropTypes.number,
    empty: PropTypes.number,
  }).isRequired,
  loading: PropTypes.bool,
};

export default Transactions;
