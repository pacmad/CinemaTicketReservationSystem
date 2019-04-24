import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  FIND_MOVIES_SUCCESS
} from '../constans/actionTypes.js';

import axios from 'axios';


export const findMovies = value => {
  return {
    type: FIND_MOVIES_SUCCESS,
    payload: value
  }
}

export function getMoviesAsync() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`movies`);
      dispatch(getMoviesSuccess(data));
    } catch (error) {
      dispatch(getMoviesFailure(error));
    }
  }
}

export const getMoviesSuccess = (movies) => {
  return {
    type: GET_MOVIES_SUCCESS,
    payload: movies
  }
}

export const getMoviesFailure = (isError) => {
  return {
    type: GET_MOVIES_FAILURE,
    payload: isError
  }
}
