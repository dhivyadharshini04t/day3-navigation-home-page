import React from "react";
import  {Login } from "./Login";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Register}  from "./Register";
import   Home  from "./Home";



const App=()=> {
  

  return (
    <Router>
    
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Register" component={Register}></Route>
        <Route exact path="/Home"component={Home}></Route>
        
      

      
        
      
        </Switch>
   
      </Router>
      
  );
}

export default App;