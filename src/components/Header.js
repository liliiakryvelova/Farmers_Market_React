import React from "react";
import DaysList from './DaysList';
import logo from "./../img/logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
  return (
    <React.Fragment>
      <div class="jumbotron">
          <img src={logo} alt="An image of tickets" />
          <a class="navbar-brand" href="#">Farmers market</a>
      </div>
     
      
    </React.Fragment>
  );
}

export default Header;