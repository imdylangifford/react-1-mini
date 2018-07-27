import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureInput: '',
      nameInput: '',
      friends: []
    };
    this.onPictureChange = this.onPictureChange.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  onPictureChange(e) {
    this.setState({
      pictureInput: e.target.value
    });
  }

  onNameChange(e) {
    this.setState({
      nameInput: e.target.value
    });
  }

  addFriend() {
    // create new friend object
    let newFriend = {
      picture: this.state.pictureInput,
      name: this.state.nameInput
    };
    // setState with new object
    this.setState({
      friends: [...this.state.friends, newFriend]
    });
  }

  render() {
    let friendsJSX = this.state.friends.map((friend, index) => {
      return (
        <div key={index}>
          <img src={friend.picture} alt="" />
          <p>{friend.name}</p>
        </div>
      );
    });

    return (
      <div>
        <label>Picture (url): </label>
        <input onChange={this.onPictureChange} />

        <label>Name: </label>
        <input onChange={e => this.onNameChange(e)} />

        <button onClick={this.addFriend}>Add Friend</button>
        <hr />
        {friendsJSX}
      </div>
    );
  }
}

export default App;
