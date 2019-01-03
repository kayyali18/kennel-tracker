/*
 * Login Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { UPDATE_TOKEN, RUN_TOKEN_SAGA } from './constants'

/**
 * Dispatched when login credentials are submitted
 *
 * @param  {object} response The response with expiration date and bearer token
 *
 * @return {object} An action object with a type of UPDATE_TOKEN passing the response
 */

export function updateToken(response) {
  return {
    type: UPDATE_TOKEN,
    response,
  }
}

/**
 * Fires off saga watch for this action type
 */
export function runTokenSagaWatcher() {
  return {
    type: RUN_TOKEN_SAGA,
  }
}
