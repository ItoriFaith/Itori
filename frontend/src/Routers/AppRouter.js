 import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import RegisterUser from "../components/registerUser"; 
import Home from  "../components/home";
import Header from "../components/header";
import Contact from '../components/contact';
import Aboutus from '../components/aboutus';
import LoginUser from '../components/loginUser';



const AppRouter = () => {
return (   
    <BrowserRouter>
    <div>
     <Header />
    <Switch>
        <Route exact path="/" component={Home} />  
        <Route path="/registeruser" component={RegisterUser} /> 
        <Route path="/contact" component={Contact} /> 
        <Route path="/aboutus" component={Aboutus} /> 
        <Route path="/loginUser" component={LoginUser} /> 
        
     </Switch>  
     </div>
    </BrowserRouter> 
);
}; 

export default AppRouter;