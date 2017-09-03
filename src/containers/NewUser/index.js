// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {addUser} from '../../actions/Users.js';

// class newUser extends Component{
//  constructor(props) {
//    super(props);

//    //set app class intial state
//    this.state = {
//      userInput: ''
//    }
//  }
//  submitUser(e){
//    this.props.addUser(this.state.userInput);// use this because we are in the props class, and addUser is part of the props 
//  }

//  handleNewUserInput(e){
//    this.setState({
//      userInput: e.target.value
//    }); 
//  }


//  render(){
//    return(
//    <div>
//      <input type ="text" 
//        placeholder = "New Name"
//        onChange={this.props.handleNewUserInput.bind(this)}
//        />
//        <button onClick={this.submitUser.bind(this)}> Submit</button>
//    </div>
//    )
//  }
// }

// const mapDispatchToProps = (dispatch) =>{
//  return{
//    addUser: (user) =>{
//      dispatch(addUser(user))
//    }
//  }
// }

// const ConnectedNewUser = connect(
//  null, // null because dont need to know about the state store.
//  mapDispatchToProps
//  )(newUser)

// export default ConnectedNewUser;