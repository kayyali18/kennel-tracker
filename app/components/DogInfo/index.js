import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'
import PTag from './PTag'
import Button from './Button'

/* eslint-disable */
const DogInfo = props => {
  return (
    <Wrapper>
      <PTag>
        {' '}
        <strong> Name: </strong>{' '}
        {props.location.state.dog.pet.data.attributes.name}
      </PTag>
      <PTag>
        <strong>Pet name: </strong>
        {props.location.state.dog.runNumber}
      </PTag>
      <PTag>
        <strong>Check In: </strong>
        {props.location.state.dog.checkin}
      </PTag>
      <PTag>
        <strong>Check Out: </strong>
        {props.location.state.dog.checkout}
      </PTag>
      <PTag>
        <strong>Species: </strong>
        {props.location.state.dog.pet.data.attributes.species}
      </PTag>
      <PTag>
        <strong>Breed: </strong>
        {props.location.state.dog.pet.data.attributes.breed}
      </PTag>
      <PTag>
        <strong>Date of Birth: </strong>
        {props.location.state.dog.pet.data.attributes.dob}
      </PTag>
      <PTag>
        <strong>Feeding Instructions: </strong>
        {props.location.state.dog.pet.data.attributes.feedingInstructions}
      </PTag>
      <PTag>
        <strong>Medications: </strong>
        {props.location.state.dog.pet.data.attributes.medications}
      </PTag>
      <PTag>
        <strong> Owner:</strong>{' '}
        {props.location.state.dog.owner.data.attributes.firstName}{' '}
        {props.location.state.dog.owner.data.attributes.lastName}
      </PTag>
      <PTag>
        <strong>Cell phone: </strong>
        {props.location.state.dog.owner.data.attributes.cellPhone}
      </PTag>
      <PTag>
        <strong>Email: </strong>
        {props.location.state.dog.owner.data.attributes.email}
      </PTag>
      <Link to="/">
        <Button>back to home</Button>
      </Link>
    </Wrapper>
  )
}

export default DogInfo

DogInfo.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}
