import './../styles/heading.css'
function Heading()
{
   let styles = {
      headingStyle : {
         color:"red",
         backgroundColor:"#53543"
      },
      paraStyle :
   {
      fontSize : "2rem",
   }
   }

   let isUserRegistered = true;
   let headingClass;
   if(isUserRegistered)
   {
      headingClass = "main-heading";
   }
   else
   {
      headingClass = "main-heading-2";
   }

   return(
      <>
      {/* I have to create the style object */}
      <h1>Welcome to React</h1>
      <p >React is very interesting, You will love it</p>
      <div>
         <h2>Hope I am learning the new things</h2>
      </div>
      </>
   )
}

export default Heading;