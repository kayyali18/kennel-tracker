/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_API = 'kennel-tracker/App/LOAD_API'
export const LOAD_API_SUCCESS = 'kennel-tracker/App/LOAD_API_SUCCESS'
export const LOAD_API_ERROR = 'kennel-tracker/App/LOAD_API_ERROR'
export const LOGIN_SUCCESS = 'kennel-tracker/App/LOGIN_SUCCESS'
export const LOGIN_ERROR = 'kennel-tracker/App/LOGIN_ERROR'
