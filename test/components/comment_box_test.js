import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';
// go all the way up to root then donw to component file

describe('CommentBox', () => {
  //declare variable i expect to change
  let component;
  // starts undefined then becomes commentbox and refreshed before each it
  // function that runs before each runs
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });
// test if it has test area and button
  it('has a text area', () => {
    // returns jquery component so can use jquery methods
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

// above is general characteristics
//if closely related next describe block
  describe('entering some text', () => {
    //before each above is applieda here
    // can have a new beforeeach here, which is run after the
    // before each above
    beforeEach(() => {
      // testing change event with "new comment" entered;
      component.find('textarea').simulate('change', 'new comment 123');
    });

    it('shows that text in the text area', () => {
      expect(component.find('textarea')).to.have.value('new comment 123');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      // component is the form, the top level element then
      //there is the text area and button
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
