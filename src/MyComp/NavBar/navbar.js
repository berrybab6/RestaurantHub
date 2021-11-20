import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
const NavBar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>RestaurantHub</Link>
          <div className="collapse navbar-collapse lela" id="navbarTogglerDemo02">
         
        <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>restaurants</Link>
                  </li>
                  
                  <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav> 
    );
}

export default NavBar;