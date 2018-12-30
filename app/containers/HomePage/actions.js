/*
 * Home Actions
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

import { DISPLAY_CURR_DOGS, RUN_CURR_DOGS_SAGA } from './constants'

/**
 * Changes the input field of the form
 *
 * @param  {object} runInfo The new info to render
 *
 * @return {object}    An action object with a type of DISPLAY_CURR_DOGS
 */
export function displayCurrDogs(runInfo) {
  return {
    type: DISPLAY_CURR_DOGS,
    runInfo,
  }
}

/**
 * Fires off saga watch for this action type
 */
export function runInfoSagaWatcher() {
  return {
    type: RUN_CURR_DOGS_SAGA,
  }
}
