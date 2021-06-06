import {useState, useEffect} from 'react';


const App = () =>
{

   const changeCounter = () =>
   {
      setCount(prevCount=>
         {
            let a = 2;
            prevCount = prevCount*a;
            return prevCount;
         })
   }

   let [count,setCount] = useState(1);

   let [heading,setHeading] = useState("React Hooks");

   const changeHeading = () =>
   {
      setHeading("Learning React Hooks");
   }


   useEffect(()=>{
      console.log("useEffect");
   },[count,heading])


   return(
      <>
      {console.log("render")}
      <div>
         <h1>{`${heading} ${count}`}</h1>
      </div>
      <button onClick={changeCounter}>Update</button>
      <button onClick={changeHeading}>Change Heading</button>
      </>
   )
}

export default App;