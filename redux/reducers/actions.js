export const SET_HOVER1 = 'SET_HOVER1';
export const SET_HOVER2 = 'SET_HOVER2';
export const SET_HOVER3 = 'SET_HOVER3';

export const setHover1 = hover1 => dispatch => {
  dispatch({
    type: SET_HOVER1,
    payload: hover1,
  });
};

export const setNoodles2 = hover2 => dispatch => {
  dispatch({
    type: SET_HOVER2,
    payload: hover2,
  });
};

export const setNoodles3 = hover3 => dispatch => {
  dispatch({
    type: SET_HOVER3,
    payload: hover3,
  });
};
