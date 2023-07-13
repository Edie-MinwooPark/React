import login from "./login"
import post from "./post"

import { combineReducers } from "redux"

const rootReducer=combineReducers({login,post})

export default rootReducer;