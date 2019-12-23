/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../Card';

import { OverTitle, Title, Subtitle, Link, MainContentDiv } from './styles';

const JobsCards = ({ data, loading }) => {
  // console.log(data.createProducts ? data.createProducts.percentage : 'eita');
  return (
    <>
      <OverTitle>Jobs</OverTitle>
      <Row>
        <Col lg={4}>
          <StyledCard loading={loading}>
            {!loading && data && (
              <>
                <Title color="#3DC997">create products</Title>
                <span>
                  <Link href="#">See logs</Link>
                </span>
                <MainContentDiv>
                  <div>
                    <Subtitle>Success</Subtitle>
                    <h1>{`${data.createProducts.percentage}%`}</h1>
                  </div>
                  <div>
                    <small>{data.createProducts.total} total</small>
                    <small>{data.createProducts.success} success</small>
                    <small>{data.createProducts.error} error</small>
                    <small>{data.createProducts.reject} reject</small>
                    <small>{data.createProducts.alert} alert</small>
                    <small>{data.createProducts.empty} empty</small>
                  </div>
                </MainContentDiv>
              </>
            )}
          </StyledCard>
        </Col>

        <Col lg={4}>
          <StyledCard loading={loading}>
            {!loading && data && (
              <>
                <Title color="#3DC997">peopleSync</Title>
                <span>
                  <Link href="#">See logs</Link>
                </span>
                <MainContentDiv>
                  <div>
                    <Subtitle>Success</Subtitle>
                    <h1>{`${data.peopleSync.percentage}%`}</h1>
                  </div>
                  <div>
                    <small>{data.peopleSync.total} total</small>
                    <small>{data.peopleSync.success} success</small>
                    <small>{data.peopleSync.error} error</small>
                    <small>{data.peopleSync.reject} reject</small>
                    <small>{data.peopleSync.alert} alert</small>
                    <small>{data.peopleSync.empty} empty</small>
                  </div>
                </MainContentDiv>
              </>
            )}
          </StyledCard>
        </Col>

        <Col lg={4}>
          <StyledCard loading={loading}>
            {!loading && data && (
              <>
                <Title color="#3DC997">engageSync</Title>
                <span>
                  <Link href="#">See logs</Link>
                </span>
                <MainContentDiv>
                  <div>
                    <Subtitle>Success</Subtitle>
                    <h1>{`${data.engageSync.percentage}%`}</h1>
                  </div>
                  <div>
                    <small>{data.engageSync.total} total</small>
                    <small>{data.engageSync.success} success</small>
                    <small>{data.engageSync.error} error</small>
                    <small>{data.engageSync.reject} reject</small>
                    <small>{data.engageSync.alert} alert</small>
                    <small>{data.engageSync.empty} empty</small>
                  </div>
                </MainContentDiv>
              </>
            )}
          </StyledCard>
        </Col>

        <Col lg={4}>
          <StyledCard loading={loading}>
            {!loading && data && (
              <>
                <Title color="#3DC997">projects</Title>
                <span>
                  <Link href="#">See logs</Link>
                </span>
                <MainContentDiv>
                  <div>
                    <Subtitle>Success</Subtitle>
                    <h1>{`${data.projects.percentage}%`}</h1>
                  </div>
                  <div>
                    <small>{data.projects.total} total</small>
                    <small>{data.projects.success} success</small>
                    <small>{data.projects.error} error</small>
                    <small>{data.projects.reject} reject</small>
                    <small>{data.projects.alert} alert</small>
                    <small>{data.projects.empty} empty</small>
                  </div>
                </MainContentDiv>
              </>
            )}
          </StyledCard>
        </Col>

        <Col lg={4}>
          <StyledCard loading={loading}>
            {!loading && data && (
              <>
                <Title color="#3DC997">teamAppointments</Title>
                <span>
                  <Link href="#">See logs</Link>
                </span>
                <MainContentDiv>
                  <div>
                    <Subtitle>Success</Subtitle>
                    <h1>{`${data.teamAppointments.percentage}%`}</h1>
                  </div>
                  <div>
                    <small>{data.teamAppointments.total} total</small>
                    <small>{data.teamAppointments.success} success</small>
                    <small>{data.teamAppointments.error} error</small>
                    <small>{data.teamAppointments.reject} reject</small>
                    <small>{data.teamAppointments.alert} alert</small>
                    <small>{data.teamAppointments.empty} empty</small>
                  </div>
                </MainContentDiv>
              </>
            )}
          </StyledCard>
        </Col>

        <Col lg={4}>
          <StyledCard loading={loading}>
            {!loading && data && (
              <>
                <Title color="#3DC997">eventSync</Title>
                <span>
                  <Link href="#">See logs</Link>
                </span>
                <MainContentDiv>
                  <div>
                    <Subtitle>Success</Subtitle>
                    <h1>{`${data.eventSync.percentage}%`}</h1>
                  </div>
                  <div>
                    <small>{data.eventSync.total} total</small>
                    <small>{data.eventSync.success} success</small>
                    <small>{data.eventSync.error} error</small>
                    <small>{data.eventSync.reject} reject</small>
                    <small>{data.eventSync.alert} alert</small>
                    <small>{data.eventSync.empty} empty</small>
                  </div>
                </MainContentDiv>
              </>
            )}
          </StyledCard>
        </Col>
      </Row>
    </>
  );
};

JobsCards.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

JobsCards.defaultProps = {
  loading: false,
};

export default JobsCards;
