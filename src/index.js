import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/app/app.jsx';

const init = () =>{
  ReactDOM.render(
      <App names={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`]}/>,
      document.querySelector(`#root`)
  );
};

init();
