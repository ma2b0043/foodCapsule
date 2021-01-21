


import React, {Component} from 'react';

 

class Navbar extends Component {
   constructor(){
     super();
   }
  
  
  render() {
  return (
    <nav className="navbar navbar-expand navbar-dark" style={{height:"80px",backgroundColor:"lightblue",width:"100%",textAlign:"center"}}>
    <a className="navbar-brand" href="#" style={{fontFamily:"sans-serif",fontSize:"40px",fontStyle:"",marginLeft:"270px"}}>Food Capsule</a>

    <div className="collapse navbar-collapse" id="basicExampleNav">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" >Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>

    </ul>


    </div>
    

    

    </nav>
  
  ); }
  }
  export default Navbar;