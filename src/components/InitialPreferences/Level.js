import React, { useState } from 'react'
import { level } from '../../utils/data'
import {Link} from 'react-router-dom'
import { setSpecificPreference } from '../../redux/action'
import { useDispatch } from 'react-redux'
import  { withRouter} from 'react-router-dom'



const Level = ({next, previous, pref, setPref}) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleNext = () => {
        dispatch(setSpecificPreference("level", value))

    }
    return (
        <div className="flex flex-col items-center h-full">
        <h1 className="mb-2 text-2xl font-bold text-center">Which one of the following describes you best?</h1>
        <form onSubmit={handleSubmit} className="flex items-center mt-10 h-5/6">
            <div className="flex flex-col items-center justify-center pb-36 sm:flex-row sm:flex-wrap">
            {level.map((level, i) => {
                return (
                    <button key={i} name={level} value={level} onClick={() => setValue(level)}className={`px-5 py-3 m-2 text-base font-semibold text-black bg-gray-200 rounded-full cursor-pointer  ${value === level && 'bg-blue-light'}`}>{level}</button>
                )
            })}
            </div>
        </form>
            <Link onClick={handleNext} className={`absolute bottom-0 right-0 px-8 py-4 m-3 text-lg font-semibold bg-green-500  rounded-full ${value === "" && 'disabled-link' }`} to={next}>Next</Link>
            <Link  className="absolute bottom-0 left-0 px-8 py-4 m-3 text-lg font-semibold bg-green-500 rounded-full" to={previous}>Previous</Link>


            </div>
            )
}

export default withRouter(Level)
