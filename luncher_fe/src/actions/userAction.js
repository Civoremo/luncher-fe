import axios from 'axios';

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERING_USER_SUCCESS = 'REGISTERING_USER_SUCCESS';
export const REGISTERING_USER_FAILURE = 'REGISTERING_USER_FAILURE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

const URL = "https://cryptic-sierra-49749.herokuapp.com";

// register user
export const registerUser = (userData) => dispatch => {
  console.log("Registering User: " + userData);
  dispatch({ type: REGISTERING_USER });

  axios.post(`${URL}/users/register`, userData)
    .then(res => {
      console.log("User register response: " + res);
      // localStorage.setItem('token', res.data.token);
      dispatch({ type: REGISTERING_USER_SUCCESS, payload: res.data.token });
    }).catch(err => {
      // console.log('Error Registering: ' + err);
      alert("Something went wrong registering! Try Again.");
      dispatch({ type: REGISTERING_USER_FAILURE, payload: err });
    })
}

export const loginUser = (userData) => dispatch => {
  console.log("Login User: " + userData);
  dispatch({ type: LOGIN_USER});

  axios.post(`${URL}/users/login`, userData)
    .then(res => {
      console.log('User login response: ' + res)
      localStorage.setItem('jwt', res.data.token);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.user })
    }).catch(err => {
      alert("Something went wrong login in! Try Again.");
      dispatch({ type: LOGIN_USER_FAILURE, payload: err });
    })
}