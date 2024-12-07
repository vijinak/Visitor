import { SET_CP_NAME } from './action';

const initialState = {
  cpName: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CP_NAME:
      return {
        ...state,
        cpName: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;