import React ,{Component} from 'react';

class States extends Component
{

   state = {
      counter : 2,

   };

   handleClick = () =>
   {
      let localCounter = this.state.counter;
      this.setState({
         counter : localCounter+1,
      })
   }

   render()
   {
      return(
         <>
         <h1>Welcome to React</h1>
         <button onClick={this.handleClick}>Add</button>
         <p>{this.state.counter}</p>
         </>
      )
   }
}

export default States;