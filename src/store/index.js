import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "../redux/auth/reducers";
import rootSaga from "../redux";
import businessReducer from '../redux/business/reducers'
import globalReducer from '../redux/global/reducers'
import userReducer from '../redux/users/reducers'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
const rootReducer = combineReducers({
  auth: authReducer,
  business : businessReducer,
  global: globalReducer,
  user: userReducer,
})


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth']

};

const sagaMiddleware = createSagaMiddleware();


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store)


sagaMiddleware.run(rootSaga);
