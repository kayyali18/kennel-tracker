/*
 * BookingPage Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const POST_OWNER = 'kennel-tracker/App/POST_OWNER'
export const POST_DOG = 'kennel-tracker/App/POST_DOG'
export const POST_VET = 'kennel-tracker/App/POST_VET'
export const RUN_POST_SAGA = 'kennel-tracker/App/RUN_POST_SAGA'
export const POST_SUCCESS = 'kennel-tracker/App/POSTSUCCESS'
export const POST_ERROR = 'kennel-tracker/App/POST_ERROR'
export const SET_PATH = 'kennel-tracker/App/SET_PATH'
