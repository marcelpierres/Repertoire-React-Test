import React, { Component } from "react";
import MetaTags from "react-meta-tags";
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
        <MetaTags>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </MetaTags>
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
