import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "./RESUME_SHUBHAM1.pdf";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row row-content" id="about">
          <div className="col-12 align-self-center ">
            <h1
              style={{
                fontFamily: "Brush Script MT",
                color: "orangered",
              }}
            >
              About me:
            </h1>
            <p className="text-center" style={{ color: "white" }}>
              I am currently in 3rd year B.E., Information Technology at MBM
              Engineering College, Jodhpur looking for a internship in
              progressive organisation that provides an opportunity to
              capitalize on my technical abilities in the field of WEB
              DEVELOPMENT.I love to build things from scratch. As of now, I
              worked as a intern. Aside of coding, I love to play cricket and go
              outside with my family and friends.
            </p>
            <a
              role="button"
              href={pdf}
              className="btn btn-block btn-warning btn-rounded"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
