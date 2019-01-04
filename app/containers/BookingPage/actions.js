/*
 * Booking Actions
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
  POST_DOG,
  POST_OWNER,
  POST_VET,
  POST_SUCCESS,
  POST_ERROR,
  RUN_POST_SAGA,
  SET_PATH,
} from './constants'

/**
 * This actions starts the POST request saga watcher
 *
 * @return {object} An action object with a type of POST_SAGA
 */
export function runPostSagaWatcher() {
  return {
    type: RUN_POST_SAGA,
  }
}

/**
 * Dispatched when form is submitted, updates owner information in store
 *
 * @param  {object} body The booking form entries for owner
 *
 * @return {object} An action object with a type of POST_OWNER passing the body
 */
export function postOwner(body) {
  return {
    type: POST_OWNER,
    body,
  }
}

/**
 * Dispatched when form is submitted, updates pet information in store
 *
 * @param  {object} body The booking form entries for pet
 *
 * @return {object} An action object with a type of POST_DOG passing the body
 */
export function postDog(body) {
  return {
    type: POST_DOG,
    body,
  }
}

/**
 * Dispatched when form is submitted, updates vet information in store
 *
 * @param  {object} body The booking form entries for the vet
 *
 * @return {object} An action object with a type of POST_VET passing the body
 */
export function postVet(body) {
  return {
    type: POST_VET,
    body,
  }
}

/**
 * Dispatched on form submit to set path for saga to fetch
 *
 * @param  {string} path The path for the saga to POST to
 *
 * @return {object} An action object with a type of POST_ERROR passing the path
 */

export function setPath(path) {
  return {
    type: SET_PATH,
    path,
  }
}

/**
 * Dispatched when POST req to the server fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of POST_ERROR passing the error
 */

export function postError(error) {
  return {
    type: POST_ERROR,
    error,
  }
}

/**
 * Dispatched when POST is successfull
 *
 * @param {object} response A response object indicating successfull POST
 *
 * @return {object} An action object with a type of POST_SUCCESS setting authentication to true
 */

export function postSuccess(response) {
  return {
    type: POST_SUCCESS,
    message: response.message,
  }
}
