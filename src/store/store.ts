import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { uiReducer } from '../reducers/uiReducer';
import { playReducer } from '../reducers/playReducer';
import thunk from "redux-thunk";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const reducers = combineReducers({
    ui: uiReducer,
    play:playReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
export type RootState = ReturnType<typeof reducers>