import { put, takeEvery } from 'redux-saga/effects';
import {
  DOCUMENT_ALLOW_SCROLL,
  DOCUMENT_DENY_SCROLL,
} from 'redux/actions/documentAction';
import {
  CLOSE_SHOP_BY_PRODUCT,
  OPEN_SHOP_BY_PRODUCT,
} from 'redux/actions/shopByProductAction';

function* openModal() {
  yield put({ type: DOCUMENT_DENY_SCROLL });
}
function* closeModal() {
  yield put({ type: DOCUMENT_ALLOW_SCROLL });
}

export function* shopByProductSaga() {
  // Allows concurrent fetches of users
  yield takeEvery(OPEN_SHOP_BY_PRODUCT, openModal);
  yield takeEvery(CLOSE_SHOP_BY_PRODUCT, closeModal);
  // Does not allow concurrent fetches of users
  // yield takeLatest(LOAD_USERS_LOADING, fetchUser);
}

export default shopByProductSaga;
