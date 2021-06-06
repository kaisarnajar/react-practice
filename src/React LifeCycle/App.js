import React , {Component} from 'react';

class App extends Component
{
   constructor()
   {
      super();
      console.log("Constructor is called");
      this.state = {
         heading : "Welcome to React Development"
      }
   }

   static getDerivedStateFromProps()
   {
      console.log("getDerivedStateFromProps is called");
      return null;
   }

   shouldComponentUpdate()
   {
      console.log("shouldComponentUpdate is called");
      return true;
   }

   handleclick = () =>
   {
      this.setState({
         heading : "Hope you are learning react",
        })
   }


   getSnapshotBeforeUpdate(prevProps,prevState)
   {
      console.log("getSnapshotBeforeUpdate is called");
      return null;
   }


   componentDidUpdate()
   {
      console.log("shouldComponentUpdate is called");
   }

   render()
   {
      console.log("render is called");
      return(
         <>
         <h1>{this.state.heading}</h1>
         <button onClick={this.handleclick}>Click Me</button>
         </>
      )
   }

   componentDidMount()
   {
      console.log("componentDidMount is called");
   }
}

export default App;