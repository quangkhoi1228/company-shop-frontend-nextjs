import { combineReducers } from 'redux';
import documentReducer from './documentReducer';
import isLoadingReducer from './isLoadingReducer';
import productDataReducer from './productDataReducer';
import shopByProductReducer from './shopByProductReducer';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  document: documentReducer,
  productData: productDataReducer,
  shopByProduct: shopByProductReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
