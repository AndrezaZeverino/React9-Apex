import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Exemplo from './exemplo'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import API from './api';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path='/api' component={API}/>
    <Route exact path='/exemplo' component={Exemplo}/>
    <Route exact path='/' component={App} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
