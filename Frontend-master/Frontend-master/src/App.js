import React from 'react';
import { Route,Switch} from "react-router-dom";
import LandingPage from './components/landing-page/landingPage';
import Dashboard from './components/dashboard/dashboard';
import Create from './components/createPortfolio/create';
import Schema from './components/form/DetailsForm';
//import temp from './components/Templates/Template';
import Template1 from './components/ntemplates/template2/template2';
//import Template3  from './components/ntemplates/template3/template3';
import Template3 from './components/ntemplates/template3/template3';
import ForgotPassword from './components/landing-page/Landingcompoments/forgotPassword';
import ChangePassword from './components/dashboard/changePass';

function App() {

  return (
    
      <Switch>
         <Route exact path="/" component={LandingPage}/>
         <Route path="/dashboard" component={Dashboard}/>
         <Route path="/createPortfolio" component={Create}/>
         <Route path="/form" component={Schema}/>       
         <Route path="/classicMix/my_portfolio/*" component={Template1}/>
         <Route path="/galadrielLight/my_portfolio/*" component={Template3}/>
         <Route path="/forgotPassword" component={ForgotPassword}/>
         <Route path="/changePassword" component={ChangePassword}/>
      </Switch>
    
  );
}

export default App;
