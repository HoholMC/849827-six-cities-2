import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`Main page renders correctly`, () =>{
  const mainPage = renderer.create(<App names = {[``, ``]}/>).toJSON();
  expect(mainPage).toMatchSnapshot();
}
);
