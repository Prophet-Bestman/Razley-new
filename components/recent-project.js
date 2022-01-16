import React from "react";
// import { ProjectOneData } from "@/data";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "./project-card";

import projectImage1 from "../assets/img/raz/coza.jpg";
import projectImage2 from "../assets/img/raz/mayorkun.jpg";
import projectImage3 from "../assets/img/raz/hair_flip.jpg";
import projectImage4 from "../assets/img/raz/coza.jpg";
import projectImage5 from "../assets/img/raz/mayorkun.jpg";
import projectImage6 from "../assets/img/raz/hair_flip.jpg";

const ProjectOneData = [
  {
    image: projectImage1,
    category: "printing",
    title: "COZA 12 Days Of Glory",
    url: "/project-details",
  },
  {
    image: projectImage2,
    category: "printing",
    title: "Mayorkun Back in Office Concert Abuja",
    url: "/project-details",
  },
  {
    image: projectImage3,
    category: "printing",
    title: "Hair Flip",
    url: "/project-details",
  },
  {
    image: projectImage4,
    category: "printing",
    title: "COZA 12 Days Of Glory",
    url: "/project-details",
  },
  {
    image: projectImage5,
    category: "printing",
    title: "Mayorkun Back in Office Concert Abuja",
    url: "/project-details",
  },
  {
    image: projectImage6,
    category: "printing",
    title: "Hair Flip",
    url: "/project-details",
  },
];

const RecentProject = () => {
  return (
    <section className="recent-projects sec-pad">
      <div className="thm-container">
        <div className="sec-title text-center">
          <span>Work showcase</span>
          <h3>Recent Projects</h3>
          <p>
            It is known that the class of customers a brand or business gets is
            a pointer to the quality it delivers. Below is a breif showcase of
            our recent projects
          </p>
        </div>
        <Row>
          {ProjectOneData.slice(0, 3).map((post, index) => (
            <Col key={index} md={6} lg={4}>
              <ProjectCard data={post} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default RecentProject;
