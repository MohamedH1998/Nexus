import {combineReducers} from 'redux'
import userReducer from './reducer'
import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers({
    user: userReducer,
    firestore: firestoreReducer
})

export default rootReducer

