import { Button, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../Redux/Actions";
import use from "use";


export const Counter = (props) => {

  const counter = useSelector(state => state.counterReducer.count);
  const dispatch = useDispatch();
  useSelector(state => console.log('state counter',state.counterReducer.count))


  const [_counter, _setCounter] = useState(0)

  const increaseHandler = () => {
    dispatch(actions.counter.increaseCounter(1));
    _setCounter(_counter + 1)
  }
  return (
    <>
      <Text>Counter: {_counter} </Text>
      <Text>Counter (with Redux) : {counter} </Text>
      <Button title={"+"}
              onPress={increaseHandler}
      ></Button>
      <Button title={"-"}
              onPress={() => {
                dispatch(actions.counter.decreaseCounter(1));
                _setCounter(_counter - 1)
              }}
      ></Button>
    </>
  );
};
