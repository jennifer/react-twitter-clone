import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';
import * as messagesApi from './messagesApi';

const MessageInput = ({ handleInput, newMessageText, submitMessage }) => {
  return (
    <div>
      <input 
        onChange={handleInput}
        value={newMessageText}
        type='text' 
        placeholder='Message' 
      ></input>
      <button onClick={submitMessage}>Submit</button>
    </div>
  )
}

class App extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    messagesApi.getMessages()
      .then(res => this.setState(
        { messages: res.messages },
        () => console.log(this.state),
      )
    );
  }

  handleInput = ({ target }) => {
    this.setState({ newMessageText: target.value });
  }

  submitMessage = () => {
    const { messages } = this.state;
    const newMessage = {
      messages_id: messages.length + 1,
      handle: 'Jennifer',
      text: this.state.newMessageText,
      stars: 10,
      timestamp: Date.now()
    };
    messages.unshift(newMessage);
    this.setState({ messages: messages, newMessageText: '' })
  }

  render() {
    return (
      <div className="App">
        <h1>React Coding Night</h1>
        <MessageInput
          handleInput={this.handleInput}
          newMessageText={this.state.newMessageText}
          submitMessage={this.submitMessage}
        />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
