import React from "react";
import Badge from "react-bootstrap/Badge";
let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
      count: 0,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  handleCountChange(textLength) {
    this.setState({ count: textLength });
  }

  render() {
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {" "}
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge variant="secondary">Markdown Input</Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                  onKeyUp={(e) => this.handleCountChange(e.target.value.length)}
                >
                  {" "}
                  {console.log(this.state.markdown)}
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
                文字数:{this.state.count}
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
