import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../actions/types";

export const getTechs = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch("/techs");
      const data = await res.json();
      dispatch({
        type: GET_TECHS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const addTech = (tech) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch("/techs", {
        method: "POST",
        body: JSON.stringify(tech),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({
        type: ADD_TECH,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const deleteTech = (id) => {
  return async (dispatch) => {
    try {
      setLoading();
      await fetch(`/techs/${id}`, {
        method: "DELETE",
      });
      dispatch({
        type: DELETE_TECH,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

// Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setCurrent = (tech) => {
  return {
    type: SET_CURRENT,
    payload: tech,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
