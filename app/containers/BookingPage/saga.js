/**
 * Gets the suggestions from the kennel_tracker API
 */

import { call, put, takeLatest, select } from 'redux-saga/effects'

import { postError, postSuccess } from 'containers/BookingPage/actions'
import { RUN_POST_SAGA } from 'containers/BookingPage/constants'
import {
  makeSelectOwner,
  makeSelectDog,
  makeSelectVet,
  makeSelectPath,
} from 'containers/BookingPage/selectors'
import request from 'utils/request'

/**
 * Api request/response handler
 */
export function* postInfo() {
  const path = yield select(makeSelectPath())
  const owner = yield select(makeSelectOwner())
  const dog = yield select(makeSelectDog())
  const vet = yield select(makeSelectVet())

  const body = yield call(getBody, path, owner, dog, vet)
  const token = JSON.parse(localStorage.getItem('token'))
  const reserveBody = yield call(makeReservation, owner, dog, vet, token)

  // Post info
  const requestURL = `http://kennel-staging.herokuapp.com/api/v1/${path}`
  const reservationURL = `http://kennel-staging.herokuapp.com/api/v1/reservations`
  const optionsObj = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body,
  }
  // /new reservation
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, optionsObj)
    yield call(request, reservationURL, reserveBody)
    yield put(postSuccess(response))
  } catch (err) {
    yield put(postError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* runPostSaga() {
  // Watches for POST_SAGA actions and calls postInfo when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(RUN_POST_SAGA, postInfo)
}

/**
 *        UTILITY FUNCTIONS
 *
 * Functions that are verbose but do important
 * stuff are kept here. Feel free to contribute!
 */

function getBody(path, owner, dog, vet) {
  if (path === 'owners') return JSON.stringify(owner)
  if (path === 'pets') return JSON.stringify(dog)
  return JSON.stringify(vet)
}

async function makeReservation(owner, dog, vet, token) {
  const optionsObj = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  if (dog.name && owner.first_name && vet.vet_name) {
    const responsePet = await request(
      `http://kennel-staging.herokuapp.com/api/v1/pets`,
      optionsObj,
    )
    const responseOwner = await request(
      `http://kennel-staging.herokuapp.com/api/v1/owners`,
      optionsObj,
    )

    optionsObj.body = giveMeID(
      responseOwner.data,
      responsePet.data,
      owner.first_name,
      dog.name,
    )
    optionsObj.method = 'POST'
    return optionsObj
  }

  return null
}

function giveMeID(owner, pet, ownerID, petID) {
  const ownerObj = owner.find(cookie => cookie.attributes.firstName == ownerID)
  const petObj = pet.find(doggo => doggo.attributes.name == petID)
  const rando = Math.floor(Math.random() * 50) + 1

  return JSON.stringify({
    pet_id: petObj.id,
    owner_id: ownerObj.id,
    run_number: rando,
    checkin: '2019-01-07',
    checkout: '2019-01-14',
    grooming: 'true',
    daycare: 'false',
    boarding: 'true',
  })
}
