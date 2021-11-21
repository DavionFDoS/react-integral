import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import {Provider } from 'react-redux';
import {createStore } from 'redux';
import {answerListReducer} from './store/answerListReducer'
import {composeWithDevTools } from 'redux-devtools-extension';
import functionPlot from 'function-plot'

const history = createBrowserHistory();
const store = createStore(answerListReducer, composeWithDevTools());

let contentsBounds = document.body.getBoundingClientRect();
let width = 800;
let height = 400;
let ratio = contentsBounds.width / width;
width *= ratio;
height *= ratio;


functionPlot({
  target: "#root",
  width,
  height,
  yAxis: { domain: [-1, 9] },
  grid: true,
  data: [
  {
  fn: "(log(x) * x) ^ 2",
  derivative: {
  fn: "2 * x",
  updateOnMouseMove: true
  }
  }
  ]
});

ReactDOM.render((
  <Provider store = {store}>
    <Router history = {history}>        
      <App/>
      <functionPlot/>
    </Router>
  </Provider>),
    document.getElementById('root')
);
reportWebVitals();