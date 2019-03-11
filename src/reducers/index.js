import { combineReducers } from "redux";

import selectTicket from './tickets';
import users from './users';
import sessions from './sessions'
import additionalServices from './additionalServices'
import movies from './movies'
import cinemas from './cinemas'

const rootReducer = combineReducers({
  selectTicket,
  users,
  sessions,
  additionalServices,
  movies,
  cinemas
});

export default rootReducer;