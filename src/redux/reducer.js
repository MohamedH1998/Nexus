import * as types from './actionTypes'

const initialState = {
    loading: false,
    currentUser: null,
    error: false,
    location: null,
    level: null,
    roles: null,
    industries: null,
    avatar: null
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
        case types.GOOGLE_SIGN_IN_START:
        case types.FACEBOOK_SIGN_IN_START:
        case types.SAVE_PREFERENCES_START:
        case types.RETRIEVE_PREFERENCES_START:
        case types.SAVE_PREFERENCES_SUCCESS:

            return {
                ...state,
                loading: true
            }
        case types.SET_USER:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.GOOGLE_SIGN_IN_SUCCESS:
        case types.FACEBOOK_SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                currentUser: action.payload
            }
        case types.RETRIEVE_PREFERENCES_SUCCESS:
            return {
                ...state,
                loading: false,
                location: action.payload.location,
                level: action.payload.level,
                roles: action.payload.roles,
                industries: action.payload.industries,
                avatar: action.payload.avatar
            }
        case types.LOGOUT_SUCCESS:
                return {
                    ...state,
                    currentUser: null
            }
        case types.SET_SPECIFIC_PREFERENCE:
            return {
                ...state,
                [action.payload.name]: action.payload.pref
        }
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.LOGOUT_FAIL:
        case types.GOOGLE_SIGN_IN_FAIL:
        case types.FACEBOOK_SIGN_IN_FAIL:
        case types.SAVE_PREFERENCES_FAIL:
        case types.RETRIEVE_PREFERENCES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default userReducer

