import courseItem from "./courseItem";


function Courses(props)
{
   // console.log(props);
   return(
      <>
      {props.courseList.map( (item)=> (
      <courseItem key={item.id}  courseDetails = {item}/>
      ) )}
      </>
   );
}

export default Courses;