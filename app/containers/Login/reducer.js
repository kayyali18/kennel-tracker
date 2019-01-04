/*
 * LoginReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable'

import { CLEAR_USER_CREDS, SUBMIT_USER_CREDS } from './constants'

// The initial state of the App
export const initialState = fromJS({
  user: { email: '', password: '' },
})

export const refreshState = fromJS({
  user: { email: '', password: '' },
})

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_USER_CREDS:
      return state
        .setIn(['user', 'email'], action.user.email)
        .setIn(['user', 'password'], action.user.password)
    case CLEAR_USER_CREDS:
      return refreshState
    default:
      return state
  }
}

export default loginReducer
