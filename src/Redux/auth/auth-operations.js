import axios from 'axios';

import authActions from './auth-actions';

axios.defaults.baseURL = 'https://magic-phonebook-app.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const login = credentials => dispatch => {
  dispatch(authActions.logInRequest());

  axios
    .post('users/login', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(authActions.logInSuccess(response.data));
    })
    .catch(err => {
      dispatch(authActions.logInError(err.response.data.message));
    });
};

const logout = () => dispatch => {
  dispatch(authActions.logOutRequest());

  axios
    .post('users/logout')
    .then(() => {
      token.unset();

      dispatch(authActions.logOutSuccess());
    })
    .catch(err => {
      dispatch(authActions.logOutError(err.message));
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data.user)))
    .catch(err => {
      dispatch(authActions.getCurrentUserError());
    });
};

const authOperations = { login, logout, getCurrentUser };
export default authOperations;
