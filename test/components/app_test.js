// solely for testing app.js
// ask what is the behaviour we care about
// and want to test; want to know what another engineer might be breaking
// using mocha; other testing framewokrs jasmine and jest basically same
//test that it says "React simple starter"

import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';
// component we want to test
// import CommentBox from '../../src/components/comment_box';


// use describe to group together similar tests
// 'App' string is just for reporting can be any string;
// all test structured like this
describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });
  // use 'it' to test a single attribute of a target
//   it('shows the correct text', () => {
//     //use 'expect' to make assertion about a target(the app.js)
//
//     //creat an istance of app
//     const component = renderComponent(App);
//
//     expect(component).to.contain('React simple starter');
// //to.contain is the matcher; many matchers see doc
//   });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
    // find is jquery method and takes css selector
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
//end of describe
// wrapping in function is to mocha can safely execute test
