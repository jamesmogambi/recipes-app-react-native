import { combineReducers } from 'redux';
import CategoriesReducer from './CategoriesReducer';
import MenuReducer from './MenuReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  categories: CategoriesReducer,
  menu: MenuReducer,
  auth: AuthReducer
 
});
