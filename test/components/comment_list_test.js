import {renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment-list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment '] };
    component = renderComponent(CommentList, null, props);
    // in test helper, props above is state
  });

  it('shows an li', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Other New Comment');
  });
});
