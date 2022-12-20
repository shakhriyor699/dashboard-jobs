import { legacy_createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import { rootReducer } from "./rootReducer";


export const store = legacy_createStore(
    rootReducer,
    devToolsEnhancer()
)

