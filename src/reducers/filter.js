import * as actions from '../actions/actionTypes';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case actions.CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
};

export default filter;
