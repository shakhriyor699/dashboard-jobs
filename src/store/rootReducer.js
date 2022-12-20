import { combineReducers } from "redux";
import { filtersReducer } from "./filters/filtersReducer";
import { positionReducer } from "./positions/positionReducer";

export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filtersReducer
})