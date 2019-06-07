import {
  FETCHING_ALL_SCHOOLS,
  FETCHING_ALL_SCHOOLS_SUCCESS,
  FETCHING_ALL_SCHOOLS_FAILURE,
} from '../actions';

const initialState = {
  schools: [],
  fetchingSchools: false,
  error: null,
}

export const schoolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ALL_SCHOOLS:
      return {
        ...state,
        fetchingSchools: true,
        error: null,
      };
    case FETCHING_ALL_SCHOOLS_SUCCESS:
      return {
        ...state,
        fetchingSchools: false,
        error: null,
        schools: action.payload
      };
    case FETCHING_ALL_SCHOOLS_FAILURE:
      return {
        ...state,
        fetchingSchools: false,
        error: action.payload
      };
    default:
      return state;
  }
}