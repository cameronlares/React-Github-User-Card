import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      user: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.props.user);
  
    this.setState({
      user: "",
    });

  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Search by username"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <button>Search</button>
       
      </form>
     //Test
    

     //Test
    );
  }
}

export default Form;
