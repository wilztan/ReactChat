import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

import logo from './../Assets/logo.svg';
import './Chat.css';
import MessageBar from './MessageBarComponent/MessageBar';
import ChatMessageFormBar from './FormBar/ChatMessageFormBar';
import ExtraMessageFormBar from './FormBar/ExtraMessageFormBar';

const url ='https://nodechatserver123.herokuapp.com/'
const socket = socketIOClient(url);

class Chat extends Component {
  constructor(){
    super();
    this.state={
      user:'',
      logged:0,
      chatList:[],
      message:'',
    };
    this.send = this.send.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleMessageEvent=this.handleMessageEvent.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    this.handleMessageEvent();
  }

  handleLogin(e){
    e.preventDefault();
    this.setState({logged:1});
  }

  handleLogout(){
    this.setState({logged:0});
  }

  handleMessageEvent(){
      socket.on('message',(msg)=> {
        this.state.chatList.push(msg);
        this.setState(this.state);
      });
  }

  handleSubmit(e){
    e.preventDefault();
    var date = new Date();
    var sendVal = {
      user : this.state.user,
      message: this.state.message,
      time: date.getHours()+":"+date.getMinutes(),
    }
    this.send('message',sendVal);
    this.setState({message:''})
  }

  handleOnChange(e){
    this.setState({message:e.target.value});
  }

  handleUserName(e){
    this.setState({user:e.target.value});
  }

  send(params,msg) {
    socket.emit(params,msg);
  }

  render() {
    let Message = this.state.chatList.map((item,i)=>{
      return (
        <MessageBar
          key={i}
          user={item.user}
          message={item.message}
          time={item.time}
          position={this.state.user===item.user?1:0}
          style={{}}
        />
      )
    });

    return this.state.logged===0?
    (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Chat</h1>
        </header>

        <form onSubmit={this.handleLogin} className="inputName">
          <input type="text" onChange={this.handleUserName} value={this.state.user}/>
          <button>Send</button>
        </form>
      </div>
    )
    :
     (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.state.user}</h1>
          <button className="logout" onClick={this.handleLogout}>Log Out</button>
        </header>

        <div className="message-list">
          {Message}
        </div>
        <div className="bottom" />

        <div className="bottom-absolute">
          <ChatMessageFormBar
            submitFunction={this.handleSubmit}
            changeFunction={this.handleOnChange}
            messageValue={this.state.message}
          />
          {/* <ExtraMessageFormBar
          /> */}
        </div>
      </div>
    );
  }
}


export default Chat;
