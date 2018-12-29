import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const DogInfo = props => {
  console.log(props.location.state.dog)
  return (
    <Wrapper>
      <p>Name: {props.location.state.dog.pet.data.attributes.name}</p>
      <p>Pet name: {props.location.state.dog.runNumber}</p>
      <p>Check In: {props.location.state.dog.checkin}</p>
      <p>Check Out: {props.location.state.dog.checkout}</p>
      <p>Species: {props.location.state.dog.pet.data.attributes.species}</p>
      <p>Breed: {props.location.state.dog.pet.data.attributes.breed}</p>
      <p>Date of Birth: {props.location.state.dog.pet.data.attributes.dob}</p>
      <p>
        Feeding Instructions:
        {props.location.state.dog.pet.data.attributes.feedingInstructions}
      </p>
      <p>
        Medications: {props.location.state.dog.pet.data.attributes.medications}
      </p>
      <p>
        Owner: {props.location.state.dog.owner.data.attributes.firstName}{' '}
        {props.location.state.dog.owner.data.attributes.lastName}
      </p>
      <p>
        Cell phone: {props.location.state.dog.owner.data.attributes.cellPhone}
      </p>
      <p>Email: {props.location.state.dog.owner.data.attributes.email}</p>
      <Link to="/">
        <button type="submit">back to home</button>
      </Link>
    </Wrapper>
  )
}

export default DogInfo

DogInfo.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}
