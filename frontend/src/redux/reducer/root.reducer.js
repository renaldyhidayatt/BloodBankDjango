import { combineReducers } from "redux";
import agentReducer from "./agent.reducer";
import authReducer from "./auth.reducer";
import religionReducer from "./religion.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  agent: agentReducer,
  religion: religionReducer,
});

export default rootReducer;
