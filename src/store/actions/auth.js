import {
   AUTH_LOGIN,
   AUTH_REGISTER,
   AUTH_LOGOUT,
   AUTH_ERROR,
   AUTH_CHECK,
   CLEAN_AUTH
} from './types';
import http from '../../setting/http';
import APP_CONST from '../../setting/constant';
import { errorHandler } from '../../setting/util';

export function authCheck() {
   return function (dispatch) {
      // dispatch({type: CLEAN_AUTH});
      let isLogin = !!localStorage.getItem("access_token");
      let user = JSON.parse(localStorage.getItem('user'));

      if (isLogin) {
         http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
      }
      dispatch({
         type: AUTH_CHECK,
         isLogin: isLogin,
         user: user
      });
   }
}
export function authLogout() {
   return function (dispatch) {
      // dispatch({ type: CLEAN_AUTH });
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');

      dispatch({
         type: AUTH_LOGOUT
      })
   }
}

export function authLogin(credentials) {
   return function (dispatch) {
      dispatch({ type: CLEAN_AUTH });
      http.post(`${APP_CONST.API_URL}/login`, credentials)
         .then((res) => {
            const { token, user } = res.data;
            localStorage.setItem('access_token', token);
            localStorage.setItem('user', JSON.stringify(user));
            http.defaults.headers.common.Authorization = `Bearer ${token}`;
            dispatch({ type: AUTH_LOGIN, user: user, message: '<strong>Login successful!</strong>' });
         })
         .catch((err) => {
            if (err.response) {
               let { errors } = err.response.data;
               dispatch({ type: AUTH_ERROR, errors: errorHandler(errors) })
            } else {
               dispatch({ type: AUTH_ERROR, errors: 'There is a server connection Error, Try Later.' });
            }
         });
   }
}

export function authRegister(credentials) {
   return function (dispatch) {
      // dispatch({ type: CLEAN_AUTH });
      http.post(`${APP_CONST.API_URL}/register`, credentials)
         .then(() => {
            dispatch({ type: AUTH_REGISTER, message: '<strong>Registration successful!</strong> <br /> Please sign in with your new email and password.' });
         })
         .catch((err) => {
            if (err.response) {
               let { errors } = err.response.data;
               dispatch({ type: AUTH_ERROR, errors: errorHandler(errors) })
            } else {
               dispatch({ type: AUTH_ERROR, errors: 'There is a server connection Error, Try Later.' });
            }
         });
   }
}