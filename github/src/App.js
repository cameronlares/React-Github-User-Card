import React from "react";
import logo from "./logo.svg";
import CardList from "./CardList";
import "./App.css";
import axios from "axios";

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




  render() {
    console.log("Hello");
    return (
      <div className="App">
        <header className="App-header">
          <h1> GitHub User Card</h1>

          <div> {
	this.state.followers.map(follower => <CardList follower={follower}  user={this.state.user.login}/>)
    }
          </div>
        </header>
      </div>
    );
  }
}
export default App;
