import React, {Component} from 'react';
import HeadingProps from '../components/headingProps'
import Courses from './Courses';
import CourseJson from './../../src/courses.json'
class AppProps extends Component
{
   state = {
      heading : "Welcome to React Courses",
      courseList : CourseJson
   }

   render()
   {
      return(
         <>
         <HeadingProps heading={this.state.heading}/>
         <Courses courseList={this.state.courseList}/>
         </>
      )
   }
}

export default AppProps;