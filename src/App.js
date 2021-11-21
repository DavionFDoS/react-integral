import React from 'react';
import './App.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import CalculationPage from './CalculationPage';
import {Route, Switch, Redirect, withRouter, BrowserRouter} from "react-router-dom";
import Graphic from "./Graphic";
import RectangleMethodDescription from "./RectangleMethodDescription";
class App extends React.Component
{ 
  render()
  {       
    const {history} = this.props;

    return(
      <div className = "App">
      <BrowserRouter>
      <Switch>
        <Route history = {history} path = '/CalculationPage' component = {CalculationPage} />
        <Route history = {history} path = '/Graphic' component = {Graphic} />
        <Route history = {history} path = '/RectangleMethodDescription' component = {RectangleMethodDescription} />
        <Redirect from = '/' to = '/CalculationPage' />      
      </Switch>
      </BrowserRouter>      
    </div>
    );
  }
}

export default withRouter(App);
