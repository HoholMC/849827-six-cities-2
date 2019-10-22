import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on name work correctly`, () =>{
  const clickHandler = jest.fn();
  const mainPage = mount(<App names = {[``, ``]} nameOnClick={clickHandler}/>);
  const nameRef = mainPage.find(`.place-card__name`).first().children().first();
  nameRef.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
}
);
