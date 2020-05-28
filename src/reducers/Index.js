import { combineReducers } from 'redux';
import CategoriesReducer from './CategoriesReducer';
import MenuReducer from './MenuReducer';

export default combineReducers({
  categories: CategoriesReducer,
  menu: MenuReducer,
 
});
