import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    // expect(commentReducer()).to.be.instanceof(Array);
    //Array does not specify that it is an empty array
    expect(commentReducer(undefined, {})).to.eql([]);
    // pass undefined and empty object to action.type; {} will be undefined
    //eql is a deep comparison; equal is identical object so used in strings and integers
  });

  it('handles action of type SAVE_COMMENT', () => {
    // expect(commentReducer()).to.equal();
    const action = { type: SAVE_COMMENT, payload: 'new comment' }
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
