import { combineReducers } from "redux";
import agentReducer from "./agent.reducer";
import authReducer from "./auth.reducer";
import religionReducer from "./religion.reducer";
import DonorReducer from "./donor.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  agent: agentReducer,
  religion: religionReducer,
  donor: DonorReducer,
});

export default rootReducer;
