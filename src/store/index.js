import { configureStore } from "@reduxjs/toolkit";
import createFilter from 'redux-persist-transform-filter';
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import { combineReducers } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import auth from "../reducers/auth";
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'

// fields you want to whitelist
const testTransform = createFilter('test', ['field 1','field 2' ]);

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "test"],
  //whitelist only selected fields from
  transforms: [testTransform],
};
const reducers = combineReducers({
  auth: auth,
  // test: test,
});
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});