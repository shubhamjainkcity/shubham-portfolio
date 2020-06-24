import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Work extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row row-content align-items-center" id="work">
          <div className="col-12 col-sm-4 text-center ">
            <img
              src={require("./searchpng.com-drdo-logo-png-image-free-download.png")}
              style={{ width: "70%" }}
              className="rounded-circle"
            />
          </div>
          <div className="col-12 col-sm-8 align-self-center">
            <p className="text-center" style={{ color: "white" }}>
              <b>
                <span style={{ color: "orangered", fontSize: "1.5em" }}>
                  DRDO
                </span>
                <br />
                <span>SUMMER INTERN</span> <br />
                ( JUNE-JULY'2019)
                <br />
              </b>
              Developed an individual implementation of Decimation in Frequency
              Split- Radix FFT Algorithm using C++ under the guidance of Mr.
              D.K. Tripathi , senior scientist of Ministry of Defence, Govt. of
              India. <br />
              The computation of Fourier Transform of signals through Decimation
              in Frequency Split Radix FFT algorithm are part of optimization
              algorithm used in image processing and signal processing in
              Defence Research.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Work;
