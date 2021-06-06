import React from 'react';
import axios from 'axios';
import { Component } from 'react';

class App extends Component
{

   state = {
      postLists : []
   }

   componentDidMount()
   {
      axios.get("http://jsonplaceholder.typicode.com/posts")

      .then((response)=>{
         console.log(response.data);
         this.setState({
            postLists : response.data,
         })
      })

      .catch((err)=>
      {
         console.log(err);
      })
      console.log("fetching data");



   }

   render()
   {
      return(
         <>
         <h1>Learning Server</h1>
         {this.state.postLists.map((item)=>
         (<div key={item.key}>
            <h5>{item.title}</h5>
            <p>{item.body}</p>
         </div>)
         )}
         </>
      )
   }
}

export default App;