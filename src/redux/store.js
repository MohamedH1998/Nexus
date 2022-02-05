import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"

import thunk from "redux-thunk"
import rootReducer from "./rootReducer"
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore"
import { getFirebase } from "react-redux-firebase"
import { fireDb } from "../firebase"
import firebase from "firebase/compat/app"
const middleware = [thunk]

if (process.env.NODE_ENV === "development") {
  middleware.push(logger)
}
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      ...middleware,
      middleware[0].withExtraArgument({ getFirestore, getFirebase })
    ),
    reduxFirestore(fireDb)
  )
)

export const rrfProps = {
  firebase,
  config: fireDb,
  dispatch: store.dispatch,
  createFirestoreInstance
}
