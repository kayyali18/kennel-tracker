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

import {
  POST_VET,
  POST_DOG,
  POST_OWNER,
  POST_SUCCESS,
  POST_ERROR,
  SET_PATH,
} from './constants'

// The initial state of the app
const initialState = fromJS({
  success: '',
  error: false,
  owner: '',
  dog: '',
  vet: '',
  path: 'owners',
})

function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PATH:
      return state.set('path', action.path)

    case POST_OWNER:
      return state.set('owner', action.body).set('error', false)

    case POST_DOG:
      return state.set('dog', action.body).set('error', false)

    case POST_VET:
      return state.set('vet', action.body).set('error', false)

    case POST_ERROR:
      return state.set('error', action.error)

    case POST_SUCCESS:
      return state.set('success', action.message)

    default:
      return state
  }
}

export default bookingReducer
