import * as actions from './actionTypes';

export const createBook = (title, category) => ({
  type: actions.CREATE_BOOK,
  title,
  category,
});

export const removeBook = (id) => ({
  type: actions.REMOVE_BOOK,
  id,
});

export const changeFilter = (category) => ({
  type: actions.CHANGE_FILTER,
  category,
});
