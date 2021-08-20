const initialState = {
  getAgentList: false,
  errorMessage: false,
  getResponseData: false,
  getDetailData: false,
};

const agentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_AGENT":
      return {
        ...state,
        getAgentList: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "CREATE_AGENT":
      return {
        ...state,
        getResponseData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "DETAIL_AGENT":
      return {
        getDetailData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "UPDATE_AGENT":
      return {
        ...state,
        getResponseData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    case "DELETE_AGENT":
      return {
        ...state,
        getResponseData: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default agentReducer;
