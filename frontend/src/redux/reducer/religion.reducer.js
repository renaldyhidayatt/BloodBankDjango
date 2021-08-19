const initialState = {
  getReligion: false,
  errorMessage: false,
  getResponseData: false,
};

const religionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_RELIGION":
      return {
        ...state,
        getReligion: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "UPDATE_RELIGON":
      return {
        ...state,
        getResponseData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "DELETE_RELIGION":
      return {
        ...state,
        getResponseData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default religionReducer;
