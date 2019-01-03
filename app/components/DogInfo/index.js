import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'
import './DogInfo.css'

/* eslint-disable */
const DogInfo = props => {
  if (!props.location.state) {
    return <Redirect to="/login" />
    return (
      <div className="single-dog">
        <div className="dog-section">
          <div className="text">
            <p className="dog-info dog-info-name">
              {' '}
              <strong> Name: </strong>
              {props.location.state.dog.pet.data.attributes.name}
            </p>
            <p className=" dog-info dog-info-run">
              <strong>Run Number: </strong>
              {props.location.state.dog.runNumber}
            </p>
            <p className=" dog-info dog-info-checkin">
              <strong>Check In: </strong> {props.location.state.dog.checkin}
            </p>
            <p className=" dog-info dog-info-checkout">
              <strong>Check Out: </strong> {props.location.state.dog.checkout}
            </p>
            <p className=" dog-info dog-info-species">
              <strong>Species: </strong>
              {props.location.state.dog.pet.data.attributes.species}
            </p>
            <p className=" dog-info dog-info-breed">
              <strong>Breed: </strong>
              {props.location.state.dog.pet.data.attributes.breed}
            </p>
            <p className=" dog-info dog-info-birth">
              <strong>Date of Birth: </strong>
              <span className="dog-birthday">
                {props.location.state.dog.pet.data.attributes.dob}
              </span>
            </p>
            <p className=" dog-info dog-info-feed">
              <strong>Feeding Instructions: </strong>
              {props.location.state.dog.pet.data.attributes.feedingInstructions}
            </p>
            <p className=" dog-info dog-info-med">
              <strong>Medications: </strong>
              {props.location.state.dog.pet.data.attributes.medications}
            </p>
            <p className=" dog-info dog-info-owner">
              <strong> Owner:</strong>{' '}
              {props.location.state.dog.owner.data.attributes.firstName}{' '}
              {props.location.state.dog.owner.data.attributes.lastName}
            </p>
            <p className=" dog-info dog-info-cell">
              <strong>Cell phone: </strong>
              {props.location.state.dog.owner.data.attributes.cellPhone}
            </p>
            <p className=" dog-info dog-info-email">
              <strong>Email: </strong>
              {props.location.state.dog.owner.data.attributes.email}
            </p>

            <Link to="/">
              <Button>back to home</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default DogInfo

DogInfo.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}
