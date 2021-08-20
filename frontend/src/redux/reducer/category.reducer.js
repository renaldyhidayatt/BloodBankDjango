const initialState = {
  getCategoryDonor: false,
  errorMessage: false,
  getResponseData: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_CATEGORY":
      return {
        ...state,
        getCategoryDonor: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
        getResponseData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default categoryReducer;
