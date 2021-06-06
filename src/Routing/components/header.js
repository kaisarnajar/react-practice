import {Link, NavLink} from 'react-router-dom';

const Header = () =>
{
   return(
      <>

      <div>
         <Link to={
            {
               pathname : "/courses",
               hash : "#1234",
               search : "?paid:true"
            }
         }>Courses</Link>
      </div>

      <div>
         <NavLink activeStyle={{color:'red',fontSize:'2rem'}} to="/about">About</NavLink>
      </div>
      </>
   )
}

export default Header;