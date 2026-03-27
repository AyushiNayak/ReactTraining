import {createStore} from "redux";



const initialState = {
    message:"Hello World",
    count:5
}
// Reducer

const reducer = (state,action)=> {
    switch(action.type) {
        case "INCREMENT_COUNT":
            return {...state, count: state.count + 1};
        case "UPDATE_COUNT":
            return {...state, count: action.payload};
        default:
            return state;
    }
}

const store = createStore(reducer, initialState);

store.subscribe(() => {
    console.log("state:", store.getState());
});
store.dispatch({type:"INCREMENT_COUNT"});
//console.log("state:", store.getState());
store.dispatch({type:"UPDATE_COUNT", payload: 10});
//console.log("state:", store.getState());



