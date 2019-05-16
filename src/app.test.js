import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {sort} from './utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('sort', ()=>{
  const referece = ['a','b','c']
  const inputArra = [{id:'c',label:'c'},{id:'a',label:'a'},{id:'b',label:'b'}];
  const key = 'id';
  const test =  sort(referece,inputArra,key);
  expect(test[0].label === 'a' && test[2].label === 'c' ).toBeTruthy();
})
