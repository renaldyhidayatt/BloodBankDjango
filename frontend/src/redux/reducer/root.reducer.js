import { combineReducers } from "redux";
import agentReducer from "./agent.reducer";
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  agent: agentReducer,
});

export default rootReducer;
