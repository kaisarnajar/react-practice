import React, { Component } from 'react'
import Heading from './components/heading';

function HandleClick(event)
{
   console.log("Button is Clicked",event);

}

function handleInputChange(event)
{
   console.log("Someone is typing",event.target.value);
}

function App()
{

   return(
      <>
      <Heading />
      <button onClick={HandleClick} id="button-1">Primary Click</button>
      <hr/>
      <button onClick={HandleClick} id="button-2">Secondary Click</button>
      <hr/>
      <input onChange={handleInputChange}/>
      
      </>
   )
}

export default App;