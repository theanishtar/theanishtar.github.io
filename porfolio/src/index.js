import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/index';
import Cert from './components/cert/index';
import Header from "./components/header/index";

const Routes = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/cert" component={Cert} />
        <Route component={App} />
      </Switch>
    </div>
  </Router>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {Routes}
  </div>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
