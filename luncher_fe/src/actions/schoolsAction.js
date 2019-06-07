import axios from 'axios';

export const FETCHING_ALL_SCHOOLS = 'FETCHING_ALL_SCHOOLS';
export const FETCHING_ALL_SCHOOLS_SUCCESS = 'FETCHING_ALL_SCHOOLS_SUCCESS';
export const FETCHING_ALL_SCHOOLS_FAILURE = 'FETCHING_ALL_SCHOOLS_FAILURE';

const URL = "https://cryptic-sierra-49749.herokuapp.com";

export const getAllSchools = () => dispatch => {
  console.log("Fetching all schools");
  dispatch({ type: FETCHING_ALL_SCHOOLS });

  axios.get(`${URL}/schools`)
    .then(res => {
      console.log("Fetching all schools response: " + res);
      dispatch({ type: FETCHING_ALL_SCHOOLS_SUCCESS, payload: res.data });
    }).catch(err => {
      alert("Fetching all schools: something went wrong!");
      dispatch({ type: FETCHING_ALL_SCHOOLS_FAILURE, payload: err });
    })
}