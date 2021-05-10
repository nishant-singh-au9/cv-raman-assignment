import React from "react";
import "./styles.css";

const MyInput = (props) => {
  const HandleChange = (e) => {
    if (props.onChange) {
      props.onChange(e);
    }
  };
  return (
    <>
      <label>
        {props.label}:
        <input
          placeholder={props.placeholder}
          value={props.value}
          onChange={HandleChange}
        />
      </label>
    </>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", phone: "", address: "", password: "" };
  }

  render() {
    return (
      <>
        <MyInput
          label="Name"
          placeholder="Enter Name"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <MyInput
          label="Email"
          placeholder="Enter Email"
          value={this.state.email}
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
        />
        <MyInput
          label="Phone"
          placeholder="Enter Phone"
          value={this.state.phone}
          onChange={(e) => {
            this.setState({ phone: e.target.value });
          }}
        />
        <MyInput
          label="Address"
          placeholder="Enter Address"
          value={this.state.address}
          onChange={(e) => {
            this.setState({ address: e.target.value });
          }}
        />
        <MyInput
          label="Password"
          placeholder="Enter Password"
          value={this.state.password}
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <button onClick={() => console.log(this.state)}>
          Console the inputs
        </button>
      </>
    );
  }
}

export default App;
