import React, { Component } from 'react'
import Fire from './config/Fire';
import { firestore } from 'firebase';
 class Login extends Component {
 constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.login=this.login.bind(this);
    this.signup=this.signup.bind(this); 
    this.state={
        email:"",
        password:"",
        fireErrors:"",
        name:"",
        username:""
    }   
 }
 login(e){
    e.preventDefault();
        Fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);            
        }).catch((err)=>{
            console.log(err);
            this.setState({
                fireErrors:err.message
            })                   
        })
    }
 signup(e){
    e.preventDefault();     
        Fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
            firestore().collection("Users").doc(u.user.uid).set({
                username:this.state.username
            });
        }).catch((err)=>{
            console.log(err);
            this.setState({fireErrors:err.message})
        })}
 handleChange(e){
     this.setState({
         [e.target.name]:e.target.value
     })
 }
 changeFlag(){
    this.setState({
       flag:true 
    })
 }
    render() {
        let errorNotification = this.state.fireErrors ? 
        ( <div className="Error"> {this.state.fireErrors} </div> ) : null;
        return (
            <div className="form_block">
              
                <div className="body">
                    <h4>Login For Pomodoro Timer</h4>
                {errorNotification}
               <form>
                   <input name="username" type="user" id="users" placeholder="Enter username" onChange={this.handleChange} value={this.state.username }></input>
                   <input name="email" type="email" id="email" placeholder="Enter Email Address" onChange={this.handleChange} value={this.state.email}/>
                   <input name="password" type="password" onChange={this.handleChange} id="password" placeholder="Enter Password" value={this.state.password}/>
                   <button className="loginBtn" onClick={this.login}>Login</button>
                   <button className="registerBtn" onClick={this.signup} >Signup</button> 
                   </form> 
                   </div>
            </div>
        )
    }
}

export default Login;