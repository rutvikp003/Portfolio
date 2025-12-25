import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MedicalAssistant from "../../Assets/Projects/MedicalAssistant.png";
import ExpenceTracker from "../../Assets/Projects/ExpenceTracker.png";
import BusinessAnlalist from "../../Assets/Projects/BusinessAiAssistant.jpeg";
import DiaScan from "../../Assets/Projects/Diascan.jpg";
import AirBNB from "../../Assets/Projects/AirBNB.png";
import blogAPI from "../../Assets/Projects/BlogAPI.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DiaScan}
              isBlog={false}
              title="DiaScan"
              description="Diascan is a smart health platform designed to help individuals detect, monitor, and manage diabetes effortlessly. With features like diabetes prediction, interactive dashboards, personalized insights, and hospital locators, we empower users to take control of their health with confidence."
              ghLink="https://github.com/rutvikp003/Diascan_V2"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AirBNB}
              isBlog={false}
              title="AirBNB"
              description="Airbnb Clone is a full-stack web application built with Node.js, Express, EJS, and MongoDB (Mongoose). It provides a basic property management system where users can create, edit, delete, and view all listings. The project demonstrates CRUD operations, RESTful routes, and server-side rendering with EJS."
              ghLink="https://github.com/rutvikp003/Air-BNB"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BusinessAnlalist}
              isBlog={false}
              title="Business Analyst"
              description="In today's data-driven world, quickly extracting actionable insights from raw data is crucial. The Business Analyst AI project aims to simplify this process. It provides a user-friendly web interface where you can upload tabular data (CSV) and receive sophisticated business analysis and visualizations simply by asking natural language questions."
              ghLink="https://github.com/rutvikp003/Business-analyst-V1"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MedicalAssistant}
              isBlog={false}
              title="Medical AI Assistant"
              description="A Medical chatbot that allows user to ask questions also allows user to save the sessions as a history we can delete and rename the history also there is a multi chats option also givin in the model. model remember the chats after the server connects again so the chat is safe."
              ghLink="https://github.com/rutvikp003/Medical-AI-Assistant_V1"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogAPI}
              isBlog={false}
              title="BlogAPI"
              description="Developed a Blog Platform using a RESTful API architecture, enabling users to create, read, update, and delete blog posts. Implemented secure authentication, role-based access control, and efficient data handling for scalable content management."
              ghLink="https://github.com/rutvikp003/"
              // demoLink="https://rutvikp003.github.io/BeingFit_V1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExpenceTracker}
              isBlog={false}
              title="Expense Tracker"
              description="Built a full-stack Expense Tracker powered by RESTful APIs, allowing users to add, update, delete, and analyze expenses. Designed structured endpoints for smooth frontend integration, with authentication and validation to ensure secure and reliable data management."
              ghLink="https://github.com/rutvikp003/expense-tracker"
              // demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;