import { Dispatch } from "redux"
import { Actiontypeenum } from "../../types/enums"
import { Actiontype } from "../../types/typescript.types"
import axios from "axios"
// here Dispatch is import form redux which is type of dispatch function onward we provide a 
// specific parameter as  <Actiontype> through which typescript can relate 
// request having in line 11 17 and 23 else somethisg wrong it through error 

//  note :  Dispatch  type is depending upon Actiontype 


export const fetchcurrentday = (payload: []) => (dispatch: Dispatch<Actiontype>) => {

    dispatch({ type: Actiontypeenum.GET_LOADING})
    // axios.get(`todo`)

}
