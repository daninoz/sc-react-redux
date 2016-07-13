import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

// This is our Stream component props
const tracks = [
  {
    title: 'Some Track'
  },
  {
    title: 'Some other Track'
  }
];

/*
 We render our component Track with the props tracks
 in the element #app
 */
ReactDOM.render(
    <Stream tracks={tracks} />,
    document.getElementById('app')
);