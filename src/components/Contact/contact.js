import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap-social.css";
import "font-awesome/css/font-awesome.min.css";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row row-content align-items-center" id="contact">
          <div className="col-12 col-sm-4 text-center">
            <h1 style={{ fontFamily: "Brush Script MT", color: "orangered" }}>
              Address
            </h1>
            <address className="text-white">
              GHATI KUWA, GANESH MARG
              <br />
              KUCHAMAN CITY, NAGAUR
              <br />
              RAJASTHAN
              <br />
              <i className="fa fa-phone fa-lg"></i>: 9694819545
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a
                href="mailto:shubhamjaikcity@gmail.com"
                style={{ color: "white" }}
              >
                shubhamjaikcity@gmail.com
              </a>
            </address>
          </div>
          <div className="col-12 col-sm-8 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id=100026484499047"
                style={{ color: "white" }}
              >
                <i className="fa fa-facebook fa-lg"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/shubhamjainkcity"
                style={{ color: "white" }}
              >
                <i className="fa fa-linkedin fa-lg"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/Imsubmjn?s=09"
                style={{ color: "white" }}
              >
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a
                className="btn btn-social-icon"
                href="https://instagram.com/shubh_jn?igshid=108d8ox762rdv"
                style={{ color: "white" }}
              >
                <i className="fa fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
