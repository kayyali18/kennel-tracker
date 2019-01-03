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

import {
  UPDATE_TOKEN,
  RUN_TOKEN_SAGA,
  SUBMIT_USER_CREDS,
  CLEAR_USER_CREDS,
} from './constants'

/**
 * Dispatched when login credentials are submitted
 *
 * @param  {object} user The user with object containing email and pass
 *
 * @return {object} An action object with a type of SUBMIT_USER_CREDS passing the response
 */

export function submitUserCredentials(user) {
  return {
    type: SUBMIT_USER_CREDS,
    user,
  }
}

/**
 * Dispatched when login credentials are succesfull
 *
 *
 * @return {object} An action object with a type of CLEAR_USER_CREDS passing the response
 */

export function clearUserCredentials() {
  return {
    type: CLEAR_USER_CREDS,
  }
}

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
