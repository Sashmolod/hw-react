import React, { Component } from "react";
//import shortid from "shortid";

import Phonebook from "./phonebook/Phonebook";
import App from "./feedback/Myapp/FeedbackApp";

class Hw2 extends Component {
  render() {
    return (
      <>
        <App />
        <Phonebook />
      </>
    );
  }
}

export default Hw2;
