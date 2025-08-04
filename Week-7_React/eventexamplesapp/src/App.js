import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "",
      rupees: "",
      euro: "",
    };
  }

  
  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.sayHello(); // Second method
  };

  sayHello = () => {
    this.setState({ message: "Hello! You've incremented the value." });
  };

  
  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  
  sayWelcome = (msg) => {
    this.setState({ message: msg });
  };

  
  onPress = (e) => {
    this.setState({ message: "I was clicked" });
  };

  
  handleCurrencyInput = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const euroRate = 0.011; // Example: ₹1 = €0.011
    const euroValue = (parseFloat(this.state.rupees) * euroRate).toFixed(2);
    this.setState({ euro: euroValue });
  };

  render() {
    return (
      <div style={{ padding: "20px", textAlign: "left" }}>
        <h1>Event Example App</h1>

        <h3>Counter Example</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>

        <h3>Say Hello / Welcome</h3>
        <button onClick={() => this.sayWelcome("Welcome to the App!")}>
          Say Welcome
        </button>

        <h3>Synthetic Event</h3>
        <button onClick={this.onPress}>Synthetic Event Button</button>

        <h3>Message Output:</h3>
        <p>{this.state.message}</p>

        <hr />

        <h2>Currency Converter (INR - EURO)</h2>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={this.state.rupees}
          onChange={this.handleCurrencyInput}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        {this.state.euro && (
          <p>Equivalent in Euro: €{this.state.euro}</p>
        )}
      </div>
    );
  }
}

export default App;
