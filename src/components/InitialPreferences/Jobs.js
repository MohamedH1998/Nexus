import React, {useState} from 'react'
import {roles} from '../../utils/data'
import {Link, useHistory} from 'react-router-dom'
import { setSpecificPreference } from '../../redux/action'
import { useDispatch } from 'react-redux'


const Jobs = ({previous, next, pref, setPref}) => {
    let history = useHistory()
    const dispatch = useDispatch()
    const [checkedState, setCheckedState] = useState(
        new Array(roles.length).fill(false)
    );
    const result = {}
    const rolesArray = []
    roles.map(item => rolesArray.push(item))

    const handleChange = (position) => {
        const updatecCheckedState = checkedState.map((item, index) => {
            return index === position ? !item : item
        })
        setCheckedState(updatecCheckedState)
    }
    const handleSubmit =(e) => {
        e.preventDefault()
        rolesArray.forEach((key, i) => result[key] = checkedState[i])
        const identifiers = Object.keys(result)
        const active = identifiers.filter((id) => result[id])
        const newResults = Object.assign({}, active)
        dispatch(setSpecificPreference("roles", newResults))

        history.push(next)

    }
    const isFalse = (val) => val === false
    

    return (
        <div className="flex flex-col h-full">
        <h1 className="mb-2 text-2xl font-bold text-center">Which one of the following describes you best?</h1>
        <small className="text-center">Select the most relevant ones</small>
        <form onSubmit={handleSubmit} className="h-full mt-10 mb-36 ">
            <div className="flex flex-wrap justify-center mb-10">
            {roles.map((job, i) => {
                return (
                    <div key={i} className="my-4">
                    <label  className="w-full p-2 h-1/2 checkbox-container">
                        <input type="checkbox" name={job} checked={checkedState[i]} onChange={() => handleChange(i)} className="form-checkbox"/>
                        <span className="px-8 py-4 text-base font-semibold text-black bg-gray-200 rounded-full cursor-pointer whitespace-nowrap checkbox">{job}</span>
                    </label> 
                    </div>
                )
            })}
            </div>
            <button className={`absolute bottom-0 right-0 px-8 py-4 m-3 text-lg font-semibold bg-green-500  rounded-full ${checkedState.every(isFalse) && 'disabled-link' }`} type="submit">Next</button>
            <Link className="absolute bottom-0 left-0 px-8 py-4 m-3 text-lg font-semibold bg-green-500 rounded-full" to={previous}>Previous</Link>
        </form>
            </div>
            )
}

export default Jobs
