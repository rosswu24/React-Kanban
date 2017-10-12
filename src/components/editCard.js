import React, { Component } from 'react';
import {connect} from 'react-redux';

class editCard extends Component{
  render(){
    this.props.cards.map((cards)=>{
      return this.renderitem(cards);
    });
  }
}


// const mapDispatchToProps =(dispatch)=>{
//  return{
    
//  }
// }

// const ConnectededitCard =(mapStateToProps)(editCard)
// export default ConnecteditCard

