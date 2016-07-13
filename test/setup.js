import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom';

// We are mocking a document
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

// We add all the keys from the mocked window in the global scope
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

// We add React and expect so it can be used in any test without having to import
global.React = React;
global.expect = expect;