import React from "react";
import logo from "./logo.svg";
import CardList from "./CardList";
import "./App.css";
import axios from "axios";
import Form from './Form'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/cameronlares")
      .then((res) => {
        console.log(res.data);
        this.setState({
          user: res.data,
        });
      })

      .catch((error) => console.log(error));

    axios
      .get("https://api.github.com/users/cameronlares/followers")
      .then((res) => {
        // res.data.message
        console.log(res.data);
        this.setState({
          followers: res.data,
        });
      })

      .catch((error) => console.log(error));
  }

  search = username => {
    this.setState({
      user: username
    })
  }


  render() {
    console.log("Hello");
    return (
      <div className="App">
        <h1> GitHub User Card</h1>
        <header className="App-header">
          <div>
          {/* <Form search={this.search} /> */}

            {" "}
            {this.state.followers.map((follower) => (
              <CardList follower={follower} user={this.state.user.login} />
            ))}
          </div>
        </header>
      </div>
    );
  }
}
export default App;
