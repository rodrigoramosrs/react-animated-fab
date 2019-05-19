import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import ReactFullScreenElement from "../../src";

class Demo extends Component {
  state = {
    fullscreen: false
  };

  fullscreenToggle = () => {
    this.setState({ fullscreen: !this.state.fullscreen });
  };
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "white", padding: "12px" }}>
          <h1>React animate d fab Element Demo</h1>
        </div>
        <ReactFullScreenElement
          fullScreen={this.state.fullscreen}
          allowScrollbar={true}
        >
          <div
            style={{ backgroundColor: "white", padding: "12px", border: "" }}
          >
            <div
              style={{
                width: "90vw",
                position: "relative",
                padding: "12px",
                borderStyle: "solid",
                borderRadius: "24px"
              }}
            >
             
              
            </div>
          </div>
        </ReactFullScreenElement>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
