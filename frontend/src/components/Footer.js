import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="footer py-3">
            <h1>45 Sparkles Road</h1>
            <h4>Celtic Valley</h4>
            <h4>Ireland</h4>
            <h5>23092</h5>
            <p> Copyright &copy; 2020 JewelLikeMe</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
