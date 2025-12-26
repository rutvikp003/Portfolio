import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rutvik Parmar </span>
            from <span className="purple"> Vadodara, Gujarat, India.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay.
            <br /> */}
            I have completed Bacholer in Technology in Computer Science & Engineering from ITM SLS Baroda University, Vadodara.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(126 152 172)" }}>
            "Strive to build technology that creates meaningful impact."{" "}
          </p>
          <footer className="blockquote-footer">Rutvik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
