import React from "react";
import logo from "./logo.svg";
import CardList from "./CardList";
import "./App.css";
import axios from "axios";
import Form from './Form'
import Search from './Search'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
      newUser:'cameronlares',
    };
  }

  componentDidMount() {
    console.log(this.newUser)

    axios
    .get(`https://api.github.com/users/${this.state.newUser}`)
    .then((res) => {
        console.log(res.data);
        this.setState({
          newUser: res.data,
        });
      })

      .catch((error) => console.log(error));

    axios
      .get("https://api.github.com/users/cameronlares/followers")
      .then((res) => {
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.newUser !== this.state.user) {
      console.log('UserCard state has changed to .',`${this.state.user}`)
     console.log(this.state.newUser)

     

   
     
    }

  }





  render() {

    return (
      <div className="App">
        <h1> GitHub User Card</h1>
        <header className="App-header">
          <div>
          <Form search={this.search} user={this.state.newUser} />

    <p>Searched User:{this.state.user,console.log(this.state.user)}</p>

{/* {this.state.user.map((follower) => (
  <Search  follower={follower} key={follower.id}/>

))} */}

            {" "}
            <h2>Followers</h2>
            {this.state.followers.map((follower) => (
              <CardList follower={follower} key={follower.id} />
            ))}
          </div>
        </header>
      </div>
    );
  }
}
export default App;
