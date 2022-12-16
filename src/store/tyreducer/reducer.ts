import { Actiontypeenum } from "../../types/enums";
import { Actiontype } from "../../types/typescript.types";
export type weatherobj = {
    data: []
    loading: boolean,
    error: boolean
}

let initialstate: weatherobj = {
    data: [],
    loading: false,
    error: false
}


const bankreducer = (state: weatherobj = initialstate, action: Actiontype) => {

    switch (action.type) {
        case Actiontypeenum.GET_LOADING: {
            return { ...state, loading: true, error: false }
        }
        case Actiontypeenum.GET_ERROR: {
            return { ...state, error: true, loading: false }
        }
        case Actiontypeenum.GET_WEATHER: {
            return { ...state, loading: false, error: false, data: action.payload }
        }
        default: {
            return state
        }
    }
}
export default bankreducer