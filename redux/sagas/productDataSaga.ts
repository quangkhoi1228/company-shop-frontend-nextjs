// function* openModal() {
//   console.log('b');
//   // yield put({ type: OPEN_ORDER_PLACING_MODAL });
// }
// function* closeModal() {
//   yield put({ type: CLOSE_ORDER_PLACING_MODAL });
// }

export function* useModalSaga() {
  // Allows concurrent fetches of users
  // yield takeEvery(OPEN_ORDER_PLACING_MODAL, openModal);
  // yield takeEvery(CLOSE_ORDER_PLACING_MODAL, closeModal);
  // Does not allow concurrent fetches of users
  // yield takeLatest(LOAD_USERS_LOADING, fetchUser);
}

export default useModalSaga;
