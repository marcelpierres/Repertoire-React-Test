import React, { Component } from "react";
import Me from "./components/me";
import "./App.css";

class App extends Component {
  //title
  componentDidMount() {
    document.title = "Marcel Samuels";
  }
  render() {
    return (
      <div className="content-container">
        <div className="blur">
          <main className="maincontent">
            <Me />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
