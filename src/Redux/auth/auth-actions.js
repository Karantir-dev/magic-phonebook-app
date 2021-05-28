import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('AUTH/REGISTER_REQUEST');
const registerSuccess = createAction('AUTH/REGISTER_SUCCESS');
const registerError = createAction('AUTH/REGISTER_ERROR');

const logInRequest = createAction('AUTH/LOGIN_REQUEST');
const logInSuccess = createAction('AUTH/LOGIN_SUCCESS');
const logInError = createAction('AUTH/LOGIN_ERROR');

const logOutRequest = createAction('AUTH/LOGOUT_REQUEST');
const logOutSuccess = createAction('AUTH/LOGOUT_SUCCESS');
const logOutError = createAction('AUTH/LOGOUT_ERROR');

const getCurrentUserRequest = createAction('AUTH/GET_CURRENT_USER_REQUEST');
const getCurrentUserSuccess = createAction('AUTH/GET_CURRENT_USER_SUCCESS');
const getCurrentUserError = createAction('AUTH/GET_CURRENT_USER_ERROR');

const authActions = {
  registerRequest,
  registerSuccess,
  registerError,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
export default authActions;
