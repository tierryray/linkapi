/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StyledCard from '../Card';

import { OverTitle, Title, Subtitle, Link, MainContentDiv } from './styles';

const JobsCards = () => (
  <>
    <OverTitle>Jobs</OverTitle>
    <Row>
      <Col lg={4}>
        <StyledCard>
          <Title color="#3DC997">create products</Title>
          <span>
            <Link href="#">See logs</Link>
          </span>
          <MainContentDiv>
            <div>
              <Subtitle>Success</Subtitle>
              <h1>00.09%</h1>
            </div>
            <div>
              <small>0 total</small>
              <small>0 success</small>
              <small>0 error</small>
              <small>0 reject</small>
              <small>0 alert</small>
              <small>0 empty</small>
            </div>
          </MainContentDiv>
        </StyledCard>
      </Col>

      <Col lg={4}>
        <StyledCard>
          <Title color="#3DC997">peopleSync</Title>
          <span>
            <Link href="#">See logs</Link>
          </span>
          <MainContentDiv>
            <div>
              <Subtitle>Success</Subtitle>
              <h1>100.0%</h1>
            </div>
            <div>
              <small>0 total</small>
              <small>0 success</small>
              <small>0 error</small>
              <small>0 reject</small>
              <small>0 alert</small>
              <small>0 empty</small>
            </div>
          </MainContentDiv>
        </StyledCard>
      </Col>

      <Col lg={4}>
        <StyledCard>
          <Title color="#3DC997">enganeSync</Title>
          <span>
            <Link href="#">See logs</Link>
          </span>
          <MainContentDiv>
            <div>
              <Subtitle>Success</Subtitle>
              <h1>100.0%</h1>
            </div>
            <div>
              <small>0 total</small>
              <small>0 success</small>
              <small>0 error</small>
              <small>0 reject</small>
              <small>0 alert</small>
              <small>0 empty</small>
            </div>
          </MainContentDiv>
        </StyledCard>
      </Col>

      <Col lg={4}>
        <StyledCard>
          <Title color="#3DC997">projects</Title>
          <span>
            <Link href="#">See logs</Link>
          </span>
          <MainContentDiv>
            <div>
              <Subtitle>Success</Subtitle>
              <h1>100.0%</h1>
            </div>
            <div>
              <small>0 total</small>
              <small>0 success</small>
              <small>0 error</small>
              <small>0 reject</small>
              <small>0 alert</small>
              <small>0 empty</small>
            </div>
          </MainContentDiv>
        </StyledCard>
      </Col>

      <Col lg={4}>
        <StyledCard>
          <Title color="#3DC997">teamAppointments</Title>
          <span>
            <Link href="#">See logs</Link>
          </span>
          <MainContentDiv>
            <div>
              <Subtitle>Success</Subtitle>
              <h1>100.0%</h1>
            </div>
            <div>
              <small>0 total</small>
              <small>0 success</small>
              <small>0 error</small>
              <small>0 reject</small>
              <small>0 alert</small>
              <small>0 empty</small>
            </div>
          </MainContentDiv>
        </StyledCard>
      </Col>

      <Col lg={4}>
        <StyledCard>
          <Title color="#3DC997">eventSync</Title>
          <span>
            <Link href="#">See logs</Link>
          </span>
          <MainContentDiv>
            <div>
              <Subtitle>Success</Subtitle>
              <h1>100.0%</h1>
            </div>
            <div>
              <small>0 total</small>
              <small>0 success</small>
              <small>0 error</small>
              <small>0 reject</small>
              <small>0 alert</small>
              <small>0 empty</small>
            </div>
          </MainContentDiv>
        </StyledCard>
      </Col>
    </Row>
  </>
);

export default JobsCards;
