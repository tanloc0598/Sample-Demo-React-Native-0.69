import { Button, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../Redux/Actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"
export const Counter = (props) => {

  const counter = useSelector(state => state.counterReducer.count);
  const dispatch = useDispatch();
  useSelector(state => console.log("state counter", state.counterReducer.count));


  const [_counter, _setCounter] = useState(0);

  const increaseHandler = () => {
    dispatch(actions.counter.increaseCounter(1));
    _setCounter(_counter + 1);
  };

  const getApi = async () => {
    try {
      // const response = await fetch(
      //   "https://devapi.mrtho.vn/api/v1/geolocations/provinces",
      // );
      const response = await axios.get("https://devapi.mrtho.vn/api/v1/geolocations/provinces")
      alert("Requests are now complete");
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const _storeData = async () => {
    try {
      let response = await getApi();
      if(response){
        await AsyncStorage.setItem(
          "Province",
          JSON.stringify(response),
        );
      }
    } catch (error) {
    }
  };

  const [provinces, setProvinces] = useState();
  const _getData = async () => {
    try {
      let _provinces = await AsyncStorage.getItem(
        "Province",
      );
      console.log("_provinces", _provinces);
      setProvinces(_provinces);
    } catch (error) {
      console.error(error);
      // Error saving data
    }
  };
  const _removeData = async () => {
    try {
      let _provinces = await AsyncStorage.removeItem(
        "Province",
      );
      console.log("_provinces", _provinces);
      setProvinces(_provinces);
    } catch (error) {
      console.error(error);
      // Error saving data
    }
  };
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
                _setCounter(_counter - 1);
              }}
      ></Button>
      <Button title={"Save storage"}
              onPress={_storeData}
      ></Button>

      <Button title={"Show storage"}
              onPress={_getData}
      ></Button>
      <Text>{provinces}</Text>
      <Button title={"Remove storage"}
              onPress={_removeData}
      ></Button>
    </>
  );
};
