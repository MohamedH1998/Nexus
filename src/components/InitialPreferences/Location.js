import React, { useState } from 'react'
import { locations } from '../../utils/data'
import {Link} from 'react-router-dom'
import { setSpecificPreference } from '../../redux/action'
import { useDispatch } from 'react-redux'


const Location = ({next, pref, setPref}) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleNext = () => {
        dispatch(setSpecificPreference("location", value))
    }
    return (
        <div className="flex flex-col items-center h-full">
        <h1 className="mb-2 text-2xl font-bold">Where are you based?</h1>
        <form onSubmit={handleSubmit} className="flex items-center mt-10 h-5/6">
            <div className="pb-36">
            {locations.map(({place}, i) => {
                return (
                    <button key={i} name={place} value={place} onClick={() => setValue(place)}className={`px-10 py-4 m-2 text-base font-semibold text-black bg-gray-200 rounded-full cursor-pointer hover:bg-blue-light ${value === place && 'bg-blue-light'}`}>{place}</button>
                )
            })}
            </div>
        </form>
        <Link onClick={handleNext} className={`absolute bottom-0 right-0 px-8 py-4 m-3 text-lg font-semibold bg-green-500 rounded-full ${value === "" && 'disabled-link' }`} to={next}>Next</Link>


            </div>
            )
}

export default Location
