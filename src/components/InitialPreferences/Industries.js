import React, {useState, useEffect} from 'react'
import {industries} from '../../utils/data'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { savePref, setSpecificPreference } from '../../redux/action'
import  { withRouter} from 'react-router-dom'


const Industries = ({previous, next, pref, setPref}) => {
    let history = useHistory()
    const dispatch = useDispatch()
    const { currentUser} = useSelector((state) => state.user)

    const [checkedState, setCheckedState] = useState(
        new Array(industries.length).fill(false)
    );
    const result = {}
    const industriesArray = []
    const preferenceArray = pref
    industries.map(item => industriesArray.push(item))
    
    const handleChange = (position) => {
        const updatecCheckedState = checkedState.map((item, index) => {
            return index === position ? !item : item
        })
        setCheckedState(updatecCheckedState)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        industriesArray.forEach((key, i) => result[key] = checkedState[i] )
        const identifiers = Object.keys(result)
        const active = identifiers.filter((id) => result[id])
        const newResults = Object.assign({}, active)
        dispatch(setSpecificPreference("industries", newResults))
        dispatch(savePref(currentUser.uid))
        history.push(next)
    }
    const isFalse = (val) => val === false

    return (
        <div className="flex flex-col h-full">
        <h1 className="mb-2 text-2xl font-bold text-center">Which of the following industries are you interesting in the most?</h1>
        <small className="text-center">Select the most relevant ones</small>
        <form  className="h-full mt-10 mb-36 ">
            <div className="flex flex-wrap justify-center mb-10">
            {industries.map((industries, i) => {
                return (
                    <div key={i} className="my-4">
                    <label  className="w-full p-2 h-1/2 checkbox-container">
                        <input type="checkbox" name={industries} checked={checkedState[i]} onChange={() => handleChange(i)} className="form-checkbox"/>
                        <span className="px-8 py-4 text-sm font-semibold text-black bg-gray-200 rounded-full cursor-pointer whitespace-nowrap checkbox">{industries}</span>
                    </label>
                    </div>
                )
            })}
            </div>
            <button onClick={handleSubmit} className={`absolute bottom-0 right-0 px-8 py-4 m-3 text-lg font-semibold bg-green-500 rounded-full ${checkedState.every(isFalse) && 'disabled-link' }`} type="button">Next</button>
            <Link className="absolute bottom-0 left-0 px-8 py-4 m-3 text-lg font-semibold bg-green-500 rounded-full" to={previous}>Previous</Link>
        </form>

            </div>
            )
}

export default withRouter(Industries)
