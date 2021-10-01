import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as types from './actionTypes'
import { auth, googleAuthProvider, facebookAuthProvider, fireDb} from '../firebase'

const registerStart = () => ({
    type: types.REGISTER_START
})

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})

const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error
})

const loginStart = () => ({
    type: types.LOGIN_START
})

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error
})

const googleSignInStart = () => ({
    type: types.GOOGLE_SIGN_IN_START
})

const googleSignInSuccess = (user) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

const googleSignInFail = (error) => ({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error
})

const facebookSignInStart = () => ({
    type: types.FACEBOOK_SIGN_IN_START
})

const facebookSignInSuccess = (user) => ({
    type: types.FACEBOOK_SIGN_IN_SUCCESS,
    payload: user
})

const facebookSignInFail = (error) => ({
    type: types.FACEBOOK_SIGN_IN_FAIL,
    payload: error
})


const logoutStart = () => ({
    type: types.LOGOUT_START
})

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
})

const logoutFail = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error
})


const savePreferencesStart = () => ({
    type: types.SAVE_PREFERENCES_START,
})

const savePreferencesSuccess = () => ({
    type: types.SAVE_PREFERENCES_SUCCESS,
})

const savePreferencesFail = (error) => ({
    type: types.SAVE_PREFERENCES_FAIL,
    payload: error
})


const retrievePreferencesStart = () => ({
    type: types.RETRIEVE_PREFERENCES_START,
})

const retrievePreferencesSuccess = (pref) => ({
    type: types.RETRIEVE_PREFERENCES_SUCCESS,
    payload: pref
})

const retrievePreferencesFail = (error) => ({
    type: types.RETRIEVE_PREFERENCES_FAIL,
    payload: error
})


export const setSpecificPreference = (name, pref) => ({
    type: types.SET_SPECIFIC_PREFERENCE,
    payload: {
        name,
        pref
    }
}) 



export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user
})

export const registerInitiate = (email, password, displayName) => {
    return function(dispatch) {
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email, password).then(({user}) => {
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user))
        }).catch((error) => dispatch(registerFail(error.message)))
    }
}

export const loginInitiate = (email, password) => {
    return function(dispatch) {
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(loginSuccess(user))
        })
        .catch((error) => dispatch(loginFail(error.message)))
    }
}

export const logoutInitiate = () => {
    return function(dispatch) {
        dispatch(logoutStart());
        auth.signOut()
        .then(resp => dispatch(logoutSuccess()))
        .catch((error) => dispatch(logoutFail(error.message)))
    }
}

export const googleSignInInitiate = () => {
    return function(dispatch) {
        dispatch(googleSignInStart());
        auth.signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(googleSignInSuccess(user))
        })
        .catch((error) => dispatch(googleSignInFail(error.message)))
    }
}

export const facebookSignInInitiate = () => {
    return function(dispatch) {
        dispatch(facebookSignInStart());
        auth.signInWithPopup(facebookAuthProvider.addScope("user_birthday, email"))
        .then(({user}) => {
            dispatch(facebookSignInSuccess(user))
        })
        .catch((error) => dispatch(facebookSignInFail(error.message)))
    }
}


// export const savePreferences = (userId, preferences) => {
//     return function(dispatch) {
//         dispatch(preferencesStart());
//         fireDb.push({
//             userId,
//             preferences 
//         })
//         .then((resp) => {
//             dispatch(preferencesSuccess(userId, preferences))
//         })
//         .catch((error) => dispatch(preferencesFail(error.message)))
//     }
// }

// export const savePref = (currentUser, pref) => {
// return (dispatch, getState, {getFirebase, getFirestore}) => {
//     const firestore = getFirestore();
//     firestore.collection('users').add({
//         currentUser,
//         pref
//     }).then(() => {
//         dispatch(preferencesSuccess())
//     }).catch(error => {
//         dispatch(preferencesFail())
//     })
// }
// }

// export const savePref = (uid, preferences) => {
//     return (dispatch, getState) => {
//         dispatch(savePreferencesStart())
//         fireDb.collection('users').doc(uid).set({
//             location: preferences[0],
//             level: preferences[1],
//             roles: preferences[2],
//             industries: preferences[3],
//         }).then(() => {
//             dispatch(savePreferencesSuccess(preferences))
//         }).catch(error => {
//             console.log(error)
//             dispatch(savePreferencesFail(error.message))
//         })
//     }
// }

export const savePref = (uid) => {
    return (dispatch, getState) => {
        dispatch(savePreferencesStart())
        fireDb.collection('users').doc(uid).set({
            location: getState().user.location,
            level: getState().user.level,
            roles: getState().user.roles,
            industries: getState().user.industries,
            avatar: getState().user.avatar
        }).then(() => {
            dispatch(savePreferencesSuccess())
        }).catch(error => {
            console.log(error)
            dispatch(savePreferencesFail(error.message))
        })
    }
}

export const retrievePref = (uid) => {
    return async (dispatch) => {
        dispatch(retrievePreferencesStart())
        try {
            const cityRef = fireDb.collection('users').doc(uid);
            const doc = await cityRef.get();
            if (!doc.exists) {
              dispatch(retrievePreferencesFail('No such document!'));
            } else {
              dispatch(retrievePreferencesSuccess(doc.data()))
            }
        } catch (error) {
            dispatch(retrievePreferencesFail(error))
        }
    }
}

