import React,{Component} from 'react';

import food from './a.jpeg'
import food2 from './b.jpeg'
import food3 from './c.jpeg'




class Animations extends Component{
    render(){

        return(
        
    <div className="container" style={{marginBottom:"40px"}}>

<div id="myCarousel" className="carousel slide" data-ride="carousel" style={{backgroundColor:"darkcyan",height:"400px"}}>
 
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>


  <div className="carousel-inner" >
    <div className="item active" style={{height:"400px",backgroundColor:"darkgreen",backgroundImage:`url(${food3})`}}>
      

     
    </div>

    <div className="item"  style={{height:"400px",backgroundColor:"yellow",backgroundImage:`url(${food2})`}}>
      
     
    </div>

    <div className="item"  style={{height:"400px",backgroundColor:"gray",backgroundImage:`url(${food})`}}>
     
    </div>
  </div>

  
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
</div>




    </div>


        );
        
    }
}

export default Animations;