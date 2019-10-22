import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/app/app.jsx';

const nameOnClick = () => {};

const init = () =>{
  ReactDOM.render(
      <App names={[`Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`]} nameOnClick = {nameOnClick}/>,
      document.querySelector(`#root`)
  );
};

init();
