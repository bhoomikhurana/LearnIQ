import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
const rootReducer = combineReducers({
  user: userReducer,
});
// const store = configureStore({
//   reducers: {
//     user: userReducer,
//   },
// });
const store = createStore(rootReducer);
export default store;
export const server = 'https://coursebundler.herokuapp.com/api/v1';
