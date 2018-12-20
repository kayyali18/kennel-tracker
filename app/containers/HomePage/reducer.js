/*
 * HomeReducer
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

import { DISPLAY_CURR_DOGS } from './constants'

// The initial state of the App
export const initialState = fromJS({
  runInfo: {},
})

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_CURR_DOGS:
      return state.set('runInfo', action.runInfo)
    default:
      return state
  }
}

export default homeReducer
