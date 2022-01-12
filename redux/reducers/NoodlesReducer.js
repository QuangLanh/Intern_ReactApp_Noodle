let defaultState = {
  hover: {
    hover1: true,
    hover2: true,
    hover3: true,
    remain: 3,
  },
};

let NoodlesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_HOVER1':
      hover = {
        ...state.hover,
        hover1: action.payload,
        remain: state.hover.remain - 1,
      };

      console.log('visa', hover);
      return {hover};
      break;
    case 'SET_HOVER2':
      hover = {
        ...state.hover,
        hover2: action.payload,
        remain: state.hover.remain - 1,
      };

      console.log('visa', hover);
      return {hover};
      break;
    case 'SET_HOVER3':
      hover = {
        ...state.hover,
        hover3: action.payload,
        remain: state.hover.remain - 1,
      };

      console.log('visa', hover);
      return {hover};
      break;
    default:
      return state;
      break;
  }
};
export default NoodlesReducer;
