import "./Nav.scss"
import "./nav.css"
import {
  //BrowserRouter as Router,
  NavLink,
} from "react-router-dom";

const Nav = () => {
  return (
    <div className="navBar">
      <div className="container">

        <NavLink activeClassName="active" to="/" exact><span>
        <div className="logo">
          Music Mix
        </div></span> 
        </NavLink>

        
        <div className="items">
          <NavLink activeClassName="active" to="/" exact><span>Home</span> </NavLink>
          <NavLink activeClassName="active" to="/browse"><span>Browse</span> </NavLink>
          <NavLink activeClassName="active" to="/listennow"> <span>Listen Now</span></NavLink>
          <NavLink activeClassName="active" to="/add"><span>Add Song</span> </NavLink>  
          <NavLink activeClassName="active" to="/contact"><span>Contact</span> </NavLink>
        </div>
      </div>
    </div> 
  )
}

export default Nav