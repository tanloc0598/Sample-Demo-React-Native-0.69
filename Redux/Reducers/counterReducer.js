import types from "../Types";

const initialState = {
  count: 99,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE:
      console.log('+++++', newIncreasedCount)
      let newIncreasedCount = state.count + 1;
      return {
        ...state,
        count: newIncreasedCount,
      };
    case types.DECREASE:
      let newDecreasedCount = state.count - 1;
      console.log('ddd', newDecreasedCount)
      return {
        ...state,
        count: newDecreasedCount,
      };
    default:
      return state;
  }
};

export default CounterReducer;
