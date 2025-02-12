import { combineReducers } from "redux";
import {faviourteReducer} from "./favreducer"
import {searchvalue} from "./searchreducer"

export default combineReducers({
    myfav: faviourteReducer,
    mysearch: searchvalue,
})