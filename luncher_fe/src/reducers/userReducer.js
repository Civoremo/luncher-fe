import { 
  REGISTERING_USER, 
  REGISTERING_USER_SUCCESS, 
  REGISTERING_USER_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actions';


const initialState = {
  user: [],
  fetching: false,
  error: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING_USER:
      return {
        ...state,
        fetching: true,
      };
    case REGISTERING_USER_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        // user: action.payload,
      };
    case REGISTERING_USER_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        fetching: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        fetching: false,
        user: action.payload,
        error: null
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}