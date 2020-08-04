import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      info: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      info: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.formText);
    this.setState({
      info: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Search by username"
          value={this.state.info}
          onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default Form;
