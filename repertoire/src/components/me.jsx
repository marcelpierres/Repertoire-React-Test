import React, { Component } from "react";
import profpic from "./images/profpic1.png";
import email from "./images/email.png";
import github from "./images/github.png";
import linkedin from "./images/linked1.png";
import resume from "./images/resume.png";
import resumepdf from "./images/marcelpierreresume.pdf";
import "./styling/me.css";

class Me extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-centered">
            <div className="card bg-light mb-3">
              <div className="card-header">
                <img className="profpic" src={profpic} />
              </div>
              <div className="card-body">
                <h2 className="name">Marcel-Pierre Samuels</h2>
                <h4 className="status">Computer Science Graduate</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="images" href="mailto:marcelpierre.s@gmail.com">
                  <img
                    id="mail"
                    src={email}
                    alt="email"
                    height="50"
                    width="50"
                  />
                </a>

                <a className="images" href="https://github.com/marcelpierres">
                  <img
                    id="github"
                    src={github}
                    alt="github"
                    height="50"
                    width="50"
                  />
                </a>

                <a
                  className="images"
                  href="https://linkedin.com/in/marcel-pierre-samuels-332525163"
                >
                  <img
                    id="linkedin"
                    src={linkedin}
                    alt="linkedin"
                    height="50"
                    width="50"
                  />
                </a>

                <a className="images" href={resumepdf}>
                  <img
                    id="resume"
                    src={resume}
                    alt="resume"
                    height="50"
                    width="50"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Me;
