// let's write our reducer function in here!

// let's define how our store object is going to initialize
// tipically a redux store is on its own divided into sub-objects (slices)
const initialState = {
  user: {
    name: '',
  },
  counter: {
    value: 0,
  },
}
// it's like defining a initial state for a component, but this time this will be
// the state for the whole application!
// this is a structure you're going to mantain over time, changing values ofc

// the goal of the reducer function is to compute the new application state
// from the current state and the action that just got dispatched
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // every case in this switch statement will have to return
    // the new state of the application
    case 'INCREASE_COUNTER':
      return {
        // the object you're returning from EVERY case is going to be
        // the new application state
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + 1,
        },
      }
    default:
      // we're going to fall into the default case if we dispatched an action
      // that we don't recognize currently: in this edge case let's just
      // return the state as it was, unharmed
      return state
  }
}

export default mainReducer
