import types from '../Types';

const increaseCounter = (data) => {
  return {
    type: types.INCREASE,
    payload: data,
  };
};

const decreaseCounter = (data) => {
  return {
    type: types.DECREASE,
    payload: data,
  };
};


let actions = {
  increaseCounter,
  decreaseCounter
}

export default actions
