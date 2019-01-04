// /*
// * Booking Page
// * Here we allow clients to book new customers
// */

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Helmet } from 'react-helmet'
// import { connect } from 'react-redux'
// import { compose } from 'redux'
// import { createStructuredSelector } from 'reselect'

// import BookingForm from 'components/BookingForm'
// import injectReducer from 'utils/injectReducer'
// import injectSaga from 'utils/injectSaga'
// import { DAEMON } from 'utils/constants'
// // import Loading from 'components/Loading'
// import Header from 'components/Header'
// import saga from './saga'
// import Wrapper from './Wrapper'
// import {
//   runPostSagaWatcher,
//   postDog,
//   postOwner,
//   postVet,
//   setPath,
// } from './actions'
// import reducer from './reducer'
// import { makeSelectPath } from './selectors'

// /* eslint-disable react/prefer-stateless-function */

// export class BookingPage extends React.PureComponent {
//   constructor() {
//     super()
//     this.state = {
//       stage: 1,
//       stageNames: ['owners', 'pets', 'vets'],
//       path: 'owners',
//     }
//   }

//   saveForm = inputs => {
//     const { dispatchSaga, dispatchPath } = this.props
//     let { stage, stageNames } = this.state
//     let path = stageNames[stage]
//     dispatchSaga()
//     dispatchPath(path)

//     stage += 1
//     path = stageNames[stage]

//     // dispatchSaga()

//     this.setState({
//       postData: { ...inputs },
//       path,
//       stage,
//     })
//   }

//   render() {
//     const { stage } = this.state
//     return (
//       <Wrapper>
//         <Helmet>
//           <title>Booking Page</title>
//           <meta name="Booking Page" content="Forms for booking reservations " />
//         </Helmet>
//         <Header />
//         <BookingForm stage={stage} handleSubmit={this.saveForm} />
//       </Wrapper>
//     )
//   }
// }

// export const mapDispatchToProps = dispatch => ({
//   dispatchSaga: () => dispatch(runPostSagaWatcher()),
//   dispatchOwner: owner => dispatch(postOwner(owner)),
//   dispatchDog: dog => dispatch(postDog(dog)),
//   dispatchVet: vet => dispatch(postVet(vet)),
//   dispatchPath: path => dispatch(setPath(path)),
// })

// const mapStateToProps = createStructuredSelector({
//   path: makeSelectPath(),
// })

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )

// const withReducer = injectReducer({ key: 'booking', reducer })
// const withSaga = injectSaga({ key: 'booking', saga, mode: DAEMON })

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(BookingPage)
