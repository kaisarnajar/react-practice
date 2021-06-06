const MockTest = (props) =>
{
   return(
      <>
      <div>
         <h1>{props.match.params.topic}</h1>
      </div>
      </>
   )
}

export default MockTest;