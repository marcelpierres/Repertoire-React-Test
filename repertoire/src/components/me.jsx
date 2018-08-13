import React, { Component } from "react";
import MetaTags from "react-meta-tags";
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
        <MetaTags>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </MetaTags>
        <div className="row">
          <div className="col-centered">
            <div className="card bg-light  mb-3">
              <div className="card-header">
                <img className="profpic" src={profpic} />
              </div>
              <div className="card-body">
                <h2 className="name">Marcel-Pierre Samuels</h2>
                <h4 className="status">Computer Science Graduate</h4>
                <p className="card-text" />
                <a className="images" href="mailto:marcelpierre.s@gmail.com">
                  <img
                    id="mail"
                    src={email}
                    alt="email"
                    height="50px"
                    width="50px"
                  />
                </a>

                <a className="images" href="https://github.com/marcelpierres">
                  <img
                    id="github"
                    src={github}
                    alt="github"
                    height="50px"
                    width="50px"
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
                    height="50px"
                    width="50px"
                  />
                </a>

                <a className="images" href={resumepdf}>
                  <img
                    id="resume"
                    src={resume}
                    alt="resume"
                    height="50px"
                    width="50px"
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
