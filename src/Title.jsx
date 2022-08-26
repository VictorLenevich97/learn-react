import { Component } from "react";

export class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div
        onClick={() => {
          this.setState({ counter: this.state.counter + 1 });
        }}
      >
        <h2>
          {this.props.content} {this.state.counter}
        </h2>
      </div>
    );
  }
}
