import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({ //All reducers get combined here in this function
  books: BooksReducer, //key: reducer
  activeBook: ActiveBook //Whatever reducer returns will become avaiable to the key
});

export default rootReducer;
