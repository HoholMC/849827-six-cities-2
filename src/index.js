import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/app/app.jsx';
import {offers} from './mocks/offers.js';

const nameOnClick = () => {};

const init = () =>{
  ReactDOM.render(
      <App offers= {offers} nameOnClick = {nameOnClick}/>,
      document.querySelector(`#root`)
  );
};

init();
