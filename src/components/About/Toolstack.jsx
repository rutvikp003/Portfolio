import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { ImWindows } from "react-icons/im";
import {
  SiPostman,
  SiVercel,
  SiNotion
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

function Toolstack() {

  const renderTooltip = (name) => (
    <Tooltip>{name}</Tooltip>
  );

  const tools = [
    { icon: <ImWindows />, name: "Windows" },
    { icon: <BiLogoVisualStudio />, name: "Visual Studio" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiNotion />, name: "Notion" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger placement="top" overlay={renderTooltip(tool.name)}>
            <span>{tool.icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;