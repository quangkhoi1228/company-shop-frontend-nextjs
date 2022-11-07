import { all, fork } from 'redux-saga/effects';
import productDataSaga from './productDataSaga';
import shopByProductSaga from './shopByProductSaga';
import useModalSaga from './useModalSaga';

export default function* rootSaga() {
  yield all([fork(useModalSaga)]);
  yield all([fork(productDataSaga)]);
  yield all([fork(shopByProductSaga)]);
}
