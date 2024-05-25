import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid" style={{ background: "grey" }}>
      <Row>
        <Col sm={5}>
          <Image
            src="https://images.unsplash.com/photo-1617251137884-f135eccf6942?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fluid
          />
        </Col>
        <Col sm={5} className="about_content">
          <div>
            <FaArrowRight size={20} color="white" />
            <span>Founded on 25-05-2024</span>
          </div>
          <div>
            
            <FaArrowRight size={20} color="white" />
            <span>Trusted Platform</span>
          </div>
          <div>
            
            <FaArrowRight size={20} color="white" />
            <span>Mutliple Delivery Partners</span>
          </div>
          <div>
            
            <FaArrowRight size={20} color="white" />
            <span>Guruntee of Authentic Products</span>
          </div>
          <div>
            
            <FaArrowRight size={20} color="white" />
            <span>Close to be next <span>UniCorn</span></span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
