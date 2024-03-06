import { applyMiddleware, createStore } from "redux";
import counterReducer from "../reducers/counterReducer";
import {thunk} from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer"
export default function configureStore(){
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
}