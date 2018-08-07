import React, { Component } from "react";
import "./styling/me.css";

class Me extends Component {
  state = {};

  centercontainer = {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-centered">
            <div className="card bg-light mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Me;
