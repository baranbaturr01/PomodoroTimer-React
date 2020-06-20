/*import React from 'react';
import BreakIntervals from './BreakIntervals';
import SessionLenght from './SessionLenght';
import Timer from './Timer';
import TodoList from './TodoList';
import Todo from './Todo';
import '../App.css';
import Pomodoro from './Pomodoro';



class App extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      breakLenght: 5,
      sessionLenght: 25,
      timerMinute: 25,
      isPlay:false,
      user:{}
    };
    this.onIncreaseBreakLenght = this.onIncreaseBreakLenght.bind(this);
    this.onDecreaseBreakLenght = this.onDecreaseBreakLenght.bind(this);
    this.onDecreaseSessionLenght = this.onDecreaseSessionLenght.bind(this);
    this.onIncreaseSessionLenght = this.onIncreaseSessionLenght.bind(this);
    this.onToggleInteval = this.onToggleInteval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this)
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer=this.onPlayStopTimer.bind(this)
  }

  onIncreaseBreakLenght() {

    this.setState((prevState) => {
      return {

        breakLenght: prevState.breakLenght + 1
        
      }
    })

  }
  onDecreaseBreakLenght() {

    this.setState((prevState) => {
      return {

        breakLenght: prevState.breakLenght - 1
      }
    })

  }
  onIncreaseSessionLenght() {

    this.setState((prevState) => {
      return {

        sessionLenght: prevState.sessionLenght + 1,
        timerMinute: prevState.timerMinute + 1
      }
    })

  }
  onDecreaseSessionLenght() {

    this.setState((prevState) => {
      return {

        sessionLenght: prevState.sessionLenght - 1,
        timerMinute: prevState.timerMinute - 1
      }
    })

  }
  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }
  onToggleInteval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLenght

      })
    } else {
      this.setState({
        timerMinute: this.state.breakLenght
      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLenght
    })
  }

onPlayStopTimer(isPlay){
  this.setState({
    isPlay:isPlay
  })
}
  render() {
   
    return (
      
      <main>
        
        <h2>Pomodoro Clock</h2>
        <section className="interval-lenght-container">
          <BreakIntervals isPlay={this.state.isPlay} breakIntervals={this.state.breakLenght} increaseBreak={this.onIncreaseBreakLenght} decreaseBreak={this.onDecreaseBreakLenght} />
          <SessionLenght isPlay={this.state.isPlay} sessionLenght={this.state.sessionLenght} increaseSession={this.onIncreaseSessionLenght} decreaseSession={this.onDecreaseSessionLenght} />
        </section>
        <Timer timerMinute={this.state.timerMinute} breakLenght={this.state.breakLenght} updateTimerMinute={this.onUpdateTimerMinute} toggleInterval={this.onToggleInteval} resetTimer={this.onResetTimer} onPlayStopTimer={this.onPlayStopTimer} />
      <Todo/>
      <Pomodoro/>
    
     
      
      </main>
    );
  }

}

export default App;*/

import React, { Component } from 'react';
import '../App.css';
import Fire from './config/Fire';
import Login from './Login';
import Home from './Home';

class AddLogin extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: {}
    });
  }

  componentDidMount(){
    this.authListener();
    
  }
  authListener(){
Fire.auth().onAuthStateChanged((user)=>{
  if(user)
  {
    this.setState({
      user
    })
    
  }else{
    this.setState({user:null})
  }


})
  }
  render() {
    return (
      <div>
      {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    );
  }   
}

export default AddLogin;