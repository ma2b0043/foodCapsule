import React, {Component} from 'react';

//import dishArray from './dishArray';

class dishes extends Component{

    render(){
    
    const {name,origin,history,recipe}=this.props.Dish;
    return(

        <div>
        
      <h3>{name}</h3>
      <h1>{origin}</h1>
     < h1>{history}</h1>
      <h1>{recipe}</h1>
   
    
   
           
        </div>

    );


    }
}

export default dishes;