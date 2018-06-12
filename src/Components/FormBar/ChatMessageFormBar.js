import React, { Component } from 'react';
import './ChatMessageFormBar.css'


class ChatMessageFormBar extends Component {
  constructor(){
    super();
    this.state={
    };
  }

  render() {
    const {
      submitFunction,
      changeFunction,
      messageValue
    } = this.props;
    return (
      <div>
        <form className="form-message" onSubmit={submitFunction}>
          <input className="message" type="text" onChange={changeFunction} value={messageValue}/>
          <button>Send</button>
        </form>
      </div>
    );
  }
}


export default ChatMessageFormBar;
