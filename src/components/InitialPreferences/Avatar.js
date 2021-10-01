import React, { useState } from 'react'
import { avatars } from '../../utils/data'
import {Link} from 'react-router-dom'
import { setSpecificPreference } from '../../redux/action'
import { useDispatch } from 'react-redux'
import RenderSmoothImage from '../RenderSmoothImages'
import  { withRouter} from 'react-router-dom'


const Avatar = ({next}) => {
    const [avi, setAvi] = useState("")
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleNext = () => {
        dispatch(setSpecificPreference("avatar", avi))
    }



    return (
        <div className="flex flex-col items-center h-full">
        <h1 className="mb-2 text-2xl font-bold">Pick an avatar</h1>
        <form onSubmit={handleSubmit} className="flex items-center mt-10 h-5/6">
            <div className="flex flex-wrap items-center justify-center w-screen pb-36">
            {avatars.map((avatar, i) => {
                return (
                    <div key={i} onClick={() => setAvi(avatar)} className={`w-5/12 max-w-5/12 ${avi === avatar && `filter drop-shadow-3xl rounded-full`}`} >
                        <RenderSmoothImage src={avatar} className="" alt=""/>
                    </div>
                )
            })}
            </div>
        </form>
        <Link onClick={handleNext} className={`absolute bottom-0 right-0 px-8 py-4 m-3 text-lg font-semibold bg-green-500 rounded-full ${avi === "" && 'disabled-link' }`} to={next}>Next</Link>


            </div>
    )
}

export default withRouter(Avatar)
