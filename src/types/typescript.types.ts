
import { Actiontypeenum } from "./enums"

interface GET_WEATHER {
    type: Actiontypeenum.GET_WEATHER,
    payload: []
}
interface GET_LOADING {
    type: Actiontypeenum.GET_LOADING,

}
interface GET_ERROR {
    type: Actiontypeenum.GET_ERROR,

}

export type Actiontype = GET_WEATHER | GET_LOADING | GET_ERROR

