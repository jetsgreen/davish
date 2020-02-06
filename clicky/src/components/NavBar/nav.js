import React from "react";
import "./nav.css";

function Navbar(props) {
    return (
     <div className = "nav">
         <nav className = "navbar navbar-expand-lg navbar-light bg-light">
         <a href="#">Clicky Game{props.children}</a>
         
          </nav>
         </div>
        
    );
  }
  
  export default Navbar;