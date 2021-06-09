import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import apiKey from "../config";

//  App Components
import Search from "./Search";
import Nav from "./Nav";
import PhotoContainer from "./photos/PhotoContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
    };
  }

  render() {
    return (
      <div className="container">
        <Search />
        <Nav />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
