

import React, {Component} from 'react';
import Web3 from 'web3'
import Navbar from './Navbar';

import {SimpleStorage_ADDRESS, SimpleStorage_ABI} from './config.js'

import Animations from './animation';

//import Button from "react-bootstrap/Button";

class App extends Component {
  constructor() {
    super()
    this.state = { account: '', simpcontract:'', value:[],bio:false,chinese:false,continental:false,easter:[],western:[],desi:[]}

    this.showMore=this.showMore.bind(this);
    this.showChinese=this.showChinese.bind(this);
    this.showContinental=this.showContinental.bind(this);
   // this.submit=this.submit.bind(this)
    }
componentWillMount() {
  try {
    window.ethereum.enable().then(function() {

    });
} catch (e) {}
this.loadBlockchainData()
}




async loadBlockchainData() {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
 // web3.eth.contract(FIRST_ABI).at(FIRST_ADDRESS)
  const accounts = await web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
  const simpstorage = new web3.eth.Contract(SimpleStorage_ABI,SimpleStorage_ADDRESS);
 
  this.setState({ simpcontract: simpstorage })
  const value = await simpstorage.methods.getAllDishes().call()
  this.setState({ value: value }) 
  var arrayLength =this.state.value.length;
  for (var i = 0; i < arrayLength; i++) {
    var temp=this.state.value[i];
    var tempLen=temp.length;
    for(var j=0;j<tempLen;j++)
    {
      console.log(temp[j]);
    }
    this.state.simpcontract.methods.createDish("j", "ooo", "category" , "rec").call();
    console.log(this.state.value[i]);
    //Do something

}
}

 

async showMore()
{
 
  const value2 = await this.state.simpcontract.methods.getAllDishes().call()
  this.setState({ desi: value2 }) 
  var arrayLength =value2.length;
  console.log("desi:-",this.state.desi);
  this.setState({bio:!this.state.bio});


}

async showContinental()
{
  const temp=await this.state.simpcontract.methods.getAllDishes().call();
  this.setState({western:temp});
  console.log("western:-",this.state.western);
  this.setState({continental:!this.state.continental});

}

async showChinese()
{
  const value1 = await this.state.simpcontract.methods.getAllDishes().call()
  this.setState({ desi: value1 }) 
  var arrayLength =value1.length;
  for (var i = 0; i < arrayLength; i++) {
    var temp=value1[i];
    var tempLen=temp.length;
    for(var j=0;j<tempLen;j++)
    {
      console.log(temp[j]);
    }
  this.setState({bio:!this.state.bio});

}
  this.setState({chinese:!this.state.chinese});


}

 submit= (event) => {

  let nam = event.target.name;
  let rec = event.target.Recipe;
  let his = event.target.History;
  let cat = event.target.category;
  this.state.simpcontract.methods.createDish("name", "history", "category" , "rec").call();
  //this.state.simpcontract.methods.createDish(nam, his, cat , rec).call();
  console.log("submit done=",rec);
 
}




render() {






  /*const a= this.state.bio ?   (

    <div>
      <p>my name is hamzajj</p>
    </div>


  
  ): null;

  */
 
    
 
return (
  
  <div>
    <Navbar style={{margintop:"0",width:"100%"}}>
    </Navbar>
    <Animations style={{marginBottom:"30 px"}}>
    </Animations>
  
  
{
  this.state.bio ?   (

    <div className="col-3" style={{display:"inline-block",backgroundColor:"lightgreen",display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
    {
       



     this.state.desi.map(desi=>{
        return( <div key={desi.id} style={{marginLeft:"10px"}}>
        <div className="name" style={{fontFamily:"monospace",textAlign:"left"}} ><b>Name:</b>  {desi.name}</div>
        <div className="history" style={{fontFamily:"monospace",textAlign:"left"}}><b>Origin:</b>  {desi.dishSignifcance} </div>
        <div className="category" style={{fontFamily:"monospace",textAlign:"left"}}> <b> History:</b>  {desi.category} </div>
        <div className="recipe" style={{fontFamily:"monospace",textAlign:"left",paddingBottom:"30px"}}><b>Recipe:</b> {desi.procedure}  </div>
        <hr></hr>
        </div>
      
     
      
        );
      }
        )
    }
        
        <button onClick={this.showMore} type="button" class="btn btn-outline-success" style={{width:"330px",backgroundColor:"chocolate",overflow:"hidden"}}>
          show less..</button>
   </div> 
  ): 
  (
    <div className="col-3" style={{display:"inline-block"}}>
      
      <button  onClick={this.showMore} type="button" class="btn btn-outline-success" style={{width:"330px",backgroundColor:"blueviolet"}} >
     Desi
      </button>
    </div>
  )
}




{
  this.state.chinese?   (

    <div className="col-3" style={{display:"inline-block",backgroundColor:"lightgreen",display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
    {
       



     this.state.desi.map(desi=>{
        return( <div key={desi.id} style={{marginLeft:"10px"}}>
        <div className="name" style={{fontFamily:"monospace",textAlign:"left"}} ><b>Name:</b>  {desi.name}</div>
        <div className="history" style={{fontFamily:"monospace",textAlign:"left"}}><b>Origin:</b>  {desi.dishSignifcance} </div>
        <div className="category" style={{fontFamily:"monospace",textAlign:"left"}}> <b> History:</b>  {desi.category} </div>
        <div className="recipe" style={{fontFamily:"monospace",textAlign:"left",paddingBottom:"30px"}}><b>Recipe:</b> {desi.procedure}  </div>
        <hr></hr>
        </div>
      
      
      
        );
      }
        )
    }
        
        <button onClick={this.showChinese} type="button" class="btn btn-outline-success" style={{width:"330px",backgroundColor:"chocolate"}}>
          show less..</button>
   </div> 
  ): 
  (
    <div className="col-3" style={{display:"inline-block"}}>
      
      <button onClick={this.showChinese} type="button" class="btn btn-outline-success" style={{width:"330px",backgroundColor:"chocolate"}}>
        Asian</button>
    </div>
  )
}










{
  this.state.continental ?   (

   
    
    <div className="col-3" style={{display:"inline-block",backgroundColor:"lightblue",display:"inline-block",borderColor:"black",borderBlockStyle:"solid 1pc"}}>
    {
       



     this.state.western.map(western=>{
        return( <div key={western.id} style={{marginLeft:"10px"}}>
        <div className="name" style={{fontFamily:"monospace",textAlign:"left"}} ><b>Name:</b>  {western.name}</div>
        <div className="history" style={{fontFamily:"monospace",textAlign:"left"}}><b>Origin:</b>  {western.dishSignifcance} </div>
        <div className="category" style={{fontFamily:"monospace",textAlign:"left"}}> <b> History:</b>  {western.category} </div>
        <div className="recipe" style={{fontFamily:"monospace",textAlign:"left",paddingBottom:"30px"}}><b>Recipe:</b> {western.procedure}  </div>
        <hr></hr>
        </div>
      
      
      
        );
      }
        )
    }
        
        <button onClick={this.showContinental} type="button" class="btn btn-outline-success" style={{width:"330px",backgroundColor:"blueviolet"}}>
          show less..</button>
   </div>
  ): 
  (
    <div className="col-3" style={{display:"inline-block"}}>
       <button onClick={this.showContinental} type="button" class="btn btn-outline-success" style={{width:"330px",backgroundColor:"blueviolet"}}>
         Western</button>
    </div>
  )
}


<br></br>
<br></br>

<div style={{width:"600px",borderBlockStartWidth:"1 pc",textAlign:"left",marginLeft:"500px",marginTop:"40px"}}>



<form class="was-validated" onSubmit={this.submit}>

  

<div class="mb-3">
      <label for="validationDefault01">dish name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="name"  required></input>
</div>






<br></br>


  <div class="mb-3" >
    <label for="validationTextarea">Recipe</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Recipe" required></textarea>
    <div class="invalid-feedback">
      Please enter recipe of dish.
    </div>
  </div>

  <br></br>


  <div class="mb-3" >
    <label for="validationTextarea">History</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="History" required></textarea>
    <div class="invalid-feedback">
      Please enter the history of dish(optional).
    </div>
  </div>
  

  
  <br></br>
  
  <div class="mb-3" >
  <div class="form-group" style={{height:"20px"}}>
    <select class="custom-select"  placeholder="category" required>
      <option value="">Open this select menu</option>
      <option value="1">eastern</option>
      <option value="2">western</option>
      <option value="3">desi</option>
    </select>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
  </div>
  </div>
  <br></br>

  <button class="btn btn-primary" type="submit">Submit form</button>

</form>




</div>




















</div>
);


}
}






class Top {
  
  constructor() {
  
    
    }

    fun1(){
      return(
        <div>
          <p>my name is desi dishe</p>
        </div>
      );
    }


  render(){
    return(
    <div className="bordered space">
      <button>thai</button>
      <button onClick={this.fun1}>desi</button>
      <button>chinese</button>
      <button>italian</button>
    </div>
    );
  }
}














export default App;