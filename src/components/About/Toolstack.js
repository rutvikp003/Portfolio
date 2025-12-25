import React from "react";
import { Col, Row } from "react-bootstrap";
import { ImWindows } from "react-icons/im";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNotion
} from "react-icons/si";

function Toolstack() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <ImWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;