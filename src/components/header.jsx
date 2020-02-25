import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { HeaderStyle } from '../styled/styled';

const Header = () => {
  return (
    <HeaderStyle fluid>
      <Row>
        <Col xs={7} sm={9} md={10} lg={10}>
          <h3>MyReads</h3>
        </Col>
        <Col style={{ textAlign: 'center', marginTop: 5 }} xs={2} sm={2} md={2} lg={2}>
          <Link to="/search">
            <Badge variant="light">
              <MdSearch /> more books
            </Badge>
          </Link>
        </Col>
      </Row>
    </HeaderStyle>
  );
};

export default Header;
