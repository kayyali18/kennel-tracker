/*
 * AppReducer
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

import { LOAD_API_SUCCESS, LOAD_API, LOAD_API_ERROR } from './constants'

// The initial state of the app
const initialState = fromJS({
  loading: false,
  error: false,
  dogData: false,
  searchQuery: '',
})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_API:
      return state
        .set('loading', true)
        .set('error', false)
        .set('dogData', false)

    case LOAD_API_SUCCESS:
      return state.set('dogData', action.results).set('loading', false)

    case LOAD_API_ERROR:
      return state.set('error', action.error).set('loading', false)

    default:
      return state
  }
}

export default appReducer
