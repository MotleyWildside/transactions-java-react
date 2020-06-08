// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import bankCards from "./bankCards";
// import secondCounter from './exampleReducer';

export default combineReducers({ bankCards });

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
