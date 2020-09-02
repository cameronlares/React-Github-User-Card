import React from "react";
import axios from "axios";

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

    axios
    .get(`https://api.github.com/users/${this.state.user}`)
    .then((res) => {
        console.log(res.data);
        this.setState({
          user: res.data,
        });
      })
  

  };

  render() {
    return (
      <div>
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

      <p> {this.state.user.name} </p>
      </div>
     //Test
    

     //Test
    );
  }
}

export default Form;
