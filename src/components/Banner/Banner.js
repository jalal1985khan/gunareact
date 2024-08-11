// components/Banner.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = ({ title, subtitle, backgroundImage }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '300px', // Adjust height as needed
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={bannerStyle}>
      <Container>
        <Row>
          <Col>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
