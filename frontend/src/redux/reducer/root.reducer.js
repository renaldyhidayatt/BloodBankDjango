import { combineReducers } from "redux";
import agentReducer from "./agent.reducer";
import authReducer from "./auth.reducer";
import religionReducer from "./religion.reducer";
import DonorReducer from "./donor.reducer";
import categoryReducer from "./category.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  agent: agentReducer,
  religion: religionReducer,
  donor: DonorReducer,
  category: categoryReducer,
});

export default rootReducer;
