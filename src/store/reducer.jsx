import { SETGIF } from "./actionTypes";

const initialState = {
  gifs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETGIF:
      return {
        ...state,
        gifs: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
