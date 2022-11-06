import { combineReducers } from 'redux';
import isLoadingReducer from './isLoadingReducer';
import productDataReducer from './productDataReducer';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  productData: productDataReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
