import React, { Component } from "react";
import Header from "./header";
import GoogleMapsContainer from "./map";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GoogleMapsContainer />
      </div>
    );
  }
}

export default App;
