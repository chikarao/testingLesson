//1. set up testing environment to run like a browser in the command line
import jsdom from 'jsdom';
import jquery from 'jquery';
// junky version of jquery; $ reaches out to browser
// and fail; so
import TestUtils from 'react-addons-test-utils';
import React from 'react';
// need react where need jquery
import ReactDom from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiJquery from 'chai-jquery';
// need chai for plugins
import reducers from '../src/reducers';

global.document = jsdom.jsdom('<!doctype Html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);
// jsdom creates fake dom; window.document --> global
// does initial set-up to fake out a dom
// jquery $ just responsible for fake instance of dom
// $ has all jquery library
// can now run bundle.js in the terminal

//2. build 'renderComponent' helper that should render a given react className
// sole purpose is to ttake react component class, render it
// get its HTML, wrap that with jquery element and return it
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  //react handler addon testutilities renderintodocument
  //requires dom; reference to frangment of document
  return $(ReactDom.findDOMNode(componentInstance)); // produces HTML1
  //wrap in jqery and return
}

//3. Build helper for simulating events
$.fn.simulate = function (eventName, value) {
  //to call simulate $('div').simulate
  // fn adds methond to jquery
  // where to put function; how to get access to jquery element
  if (value) {
    this.val(value);
  }
  // check to see if value passed in, sets the value of the html element
  TestUtils.Simulate[eventName](this[0]);
    //pass event name on the fly, not hardcode
  // this is handle to jquery element e.g. $('div')
  //$('div') is an array that can contain many differe elements
  // so call the first element
};
//4. set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
