import { authReducer } from "./authReducer";
import {configureStore,combineReducers} from "@reduxjs/toolkit";
import { gadgetsReducer } from "./gadgetsReducer";
import { createStore } from "redux";



const reducer = combineReducers({
    auth:authReducer,
    gadgets: gadgetsReducer,
});
//export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = configureStore({
    reducer: reducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


