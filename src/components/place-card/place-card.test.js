import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCard} from './place-card.jsx';

it(`Place card renders correctly`, () =>{
  const placeCard = renderer.create(<PlaceCard name = {``}/>).toJSON();
  expect(placeCard).toMatchSnapshot();
}
);
