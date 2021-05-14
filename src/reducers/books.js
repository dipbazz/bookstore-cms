import * as actions from '../actions/actionTypes';

const books = (state = [], action) => {
  switch (action.type) {
    case actions.CREATE_BOOK:
      return [...state, { id: Math.random(), title: action.title, category: action.category }];
    case actions.REMOVE_BOOK:
      return state.map((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default books;
