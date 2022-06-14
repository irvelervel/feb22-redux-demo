import { Button } from 'react-bootstrap'

// Counter will need full-access to the redux store,
// because we need to read the value of counter.value from the redux store
// and we'll need to dispatch an action in order to change it

import { connect } from 'react-redux'

// connect needs up to 2 arguments: mapStateToProps and mapDispatchToProps
// mapStateToProps defines which values of the store you want to read
// mapDispatchToProps defines which ACTIONS you want to be able to dispatch

// LONG WAY
// const mapStateToProps = (state) => {
//   return {
//     // every property of this object is going to become a PROP for Counter
//     valueFromTheStore: state.counter.value,
//     nameFromTheStore: state.user.name,
//   }
// }

// SHORTHAND WAY
const mapStateToProps = (state) => ({
  // every property of this object is going to become a PROP for Counter
  valueFromTheStore: state.counter.value,
  nameFromTheStore: state.user.name,
})

const mapDispatchToProps = (dispatch) => ({
  // dispatch is a function
  // every key of this object will become a prop for Counter
  increaseCounter: () => {
    dispatch({
      type: 'INCREASE_COUNTER',
    })
    // every time an action gets dispatch, the reducer function wakes up!
  },
  decreaseCounter: () => {
    dispatch({
      type: 'DECREASE_COUNTER',
    })
  },
})

const Counter = ({
  teacher,
  valueFromTheStore,
  nameFromTheStore,
  increaseCounter,
  decreaseCounter,
}) => (
  // valueFromTheStore is not a prop we're getting from App.jsx!
  // it's a props received from mapStateToProps
  <div>
    <h2>Current name is: {nameFromTheStore}</h2>
    <Button onClick={() => increaseCounter()}>+</Button>
    <p>{valueFromTheStore}</p>
    <Button onClick={() => decreaseCounter()}>-</Button>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// wtf is this?? we're creating a HOC (Higher Order Component)
// a HOC is a component recieving MORE PROPS than it should!
// it's an ENRICHED component!
