import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  state = {
    imageUrl: "./+91 96948 19545 20200118_210800.jpg",
  };

  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 col-sm-4 align-self-center">
            <img
              src={require("./+91 96948 19545 20200118_210800.jpg")}
              style={{ width: "50%" }}
              className="rounded-circle"
            />
          </div>
          <div className="col-12 col-sm-8" style={{ margin: "auto" }}>
            <p style={{ color: "white", fontSize: "1.5em" }}>
              <b>
                Hi,
                <br />
                I'm <span style={{ color: "orangered" }}> Shubham Jain</span>,
                <br />
                3rd year B.E. Information Technology
              </b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
