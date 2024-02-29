import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">MD. Mehedi Hasan</span> from Dhaka, Bangladesh. I'm a Software Engineer by profession and I've done my engineering in computer science.
            <br />
            <br />
            I always focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
          <br/>
          <br/>
          It's been around 6 years since I've been working in the field of Software Development, Software Engineering, Back-end Engineering and open-source technologies.
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Play with Code
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Singing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
