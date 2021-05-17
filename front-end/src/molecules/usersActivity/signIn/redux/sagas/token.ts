import { SagaTokenAction } from 'molecules/usersActivity/signIn/redux/types';
import { call, cancelled, put, takeLatest } from 'redux-saga/effects';
import { postAuthLogin } from 'utils/api';

function* postTokenSaga(action: SagaTokenAction) {
  const abortController = new AbortController();
  try {
    const data = yield call(
      postAuthLogin,
      action.payload,
      abortController.signal
    );
    yield put({ type: 'FETCH_SIGN_IN', payload: data.access_token });
  } catch (e) {
    if (yield cancelled()) abortController.abort();
    yield put({ type: 'ERROR_SIGN_IN', payload: e });
  }
}

export function* signInWatcher() {
  yield takeLatest('POST_SIGN_IN', postTokenSaga);
}
