import React from 'react';
import BreakIntervals from './BreakIntervals';
import SessionLenght from './SessionLenght';
import Timer from './Timer';
import Pomodoro from './Pomodoro';
import Todo from './Todo';
import '../App.css';
import Fire from './config/Fire';
import firebase from 'firebase';
import { firestore } from 'firebase';

        



class Home extends React.Component {
  
  constructor(props) {
    super(props);
    
    
    this.state = {
      counter : 0,
      breakLenght: 5,
      sessionLenght: 25,
      timerMinute: 25,
      isPlay:false,
      user:{},
      name:'',
      username:"",
      welcomeName:"",
      currentuid:"",
      userId:"",
      user:""
      
    };
    this.onIncreaseBreakLenght = this.onIncreaseBreakLenght.bind(this);
    this.onDecreaseBreakLenght = this.onDecreaseBreakLenght.bind(this);
    this.onDecreaseSessionLenght = this.onDecreaseSessionLenght.bind(this);
    this.onIncreaseSessionLenght = this.onIncreaseSessionLenght.bind(this);
    this.onToggleInteval = this.onToggleInteval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this)
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer=this.onPlayStopTimer.bind(this);
    
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
Logout()
{
    Fire.auth().signOut();
}
kulBil(){
    const user = Fire.auth().currentUser;
    
    if (user != null) {
     console.log(user.email);
       
          }
 }
   getCurrent() {
    
  let user = firebase.auth().currentUser;   
  console.log(user);
  if (user) {
      console.log(user.uid);
     
  firestore()
  .collection('Users')
  .doc(user.uid)
  .get().then((userNameFromFirebase)=>{
    this.setState({
       welcomeName:userNameFromFirebase.data().username
    })
  });
  } else {
       }
 }



  render() {
   
   
 
    return (
      
      <main>
      { this.getCurrent()}
      
        <h2>Pomodoro Clock</h2>
   
        <section className="yeni-yer">
      
          
        <h3>Hoşgeldiniz... {this.state.welcomeName}</h3>
       <button onClick={this.Logout} >Logout <i className="fa fa-sign-out"></i></button>
      
        </section>
        
        <section className="interval-lenght-container">
          <BreakIntervals isPlay={this.state.isPlay} breakIntervals={this.state.breakLenght} increaseBreak={this.onIncreaseBreakLenght} decreaseBreak={this.onDecreaseBreakLenght} />
          <SessionLenght isPlay={this.state.isPlay} sessionLenght={this.state.sessionLenght} increaseSession={this.onIncreaseSessionLenght} decreaseSession={this.onDecreaseSessionLenght} />
        </section>
        <Timer timerMinute={this.state.timerMinute} breakLenght={this.state.breakLenght} updateTimerMinute={this.onUpdateTimerMinute} toggleInterval={this.onToggleInteval} resetTimer={this.onResetTimer} onPlayStopTimer={this.onPlayStopTimer} />
      <Todo/>
    <img className="tomato" src="tomato2.png" width="300" height="300" alt="pomodoro nedir?"/>
      <Pomodoro/>
      </main>
    );
  }

}

export default Home;