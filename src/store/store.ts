import { legacy_createStore, compose } from "redux"
import { applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import bankreducer from "./tyreducer/reducer"



declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
} // this is for redux devtool support
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


const rootreducer = combineReducers({
    bank: bankreducer
})
// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = legacy_createStore(rootreducer,
   
)