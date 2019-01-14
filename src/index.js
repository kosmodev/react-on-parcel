import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hello {this.props.name}</h1>
        </div>
      </div>
    );
  }
}

let App = document.getElementById("root");

ReactDOM.render(<HelloMessage name="Luca Orla" />, App);
