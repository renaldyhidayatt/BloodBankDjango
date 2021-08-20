const initialState = {
  getDonorList: false,
  errorMessage: false,
  getResponseData: false,
  getDetailData: false,
};

const donorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_DONOR":
      return {
        ...state,
        getDonorList: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "CREATE_DONOR":
      return {
        ...state,
        getResponseData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "DETAIL_DONOR":
      return {
        getDetailData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "UPDATE_DONOR":
      return {
        ...state,
        getResponseData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "DELETE_DONOR":
      return {
        ...state,
        getResponseData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default donorReducer;
