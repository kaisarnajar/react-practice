import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {counterAction, IncrementAction} from "./../Store/Actions/actions.js";


const App = () =>
{

   const counter = useSelector(state => state.counter);
   const dispatch = useDispatch();

   return(
      <>
      {counter}
      <br/>
      <button onClick={() =>dispatch(IncrementAction())}>Increment by 5</button>
      <br/>
      <button onClick={() =>dispatch(counterAction())}>Increment by 1</button>
      </>
   )
}

export default App;