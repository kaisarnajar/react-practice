import { Component } from "react";
import {connect} from 'react-redux'
import React from 'react';

import { counterAction, IncrementAction} from "./../Store/Actions/actions.js";
class App extends Component
{
   render(){
      {console.log(this.props)}
      return(
         
         <>
         <br />
         <h1>React Redux</h1>
          {this.props.counter}
         <br />
         <button onClick={() =>this.props.dispatch(counterAction())}>Increment
         </button>

         <button onClick={() =>this.props.dispatch(IncrementAction())}>Increase 5
         </button>
         <br />
         </>
      )
      

   }
}

const mapStoreToProps = (state) =>
{
   return{
      counter : state.counter,
      value : state.value
   }
}

// const mapToDispatchProps = (dispatch) =>
// {
//    return{
//      incrementCounter : ()=> dispatch[{type : "INCREMENT_COUNTER"}]
//    }
// }

// export default connect(mapStoreToProps,mapToDispatchProps)(App);
export default connect(mapStoreToProps)(App);