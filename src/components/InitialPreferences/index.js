import React from 'react'
import './style.css'
import ProgressBar from './ProgressBar'
import  { withRouter} from 'react-router-dom'


const InitialPreferences = ({children, percentageProgress}) => {
    return (
        <>
        <ProgressBar percentageProgress={percentageProgress}/>
        <div className="flex flex-col items-center w-screen min-h-screen bg-gray-200"> 

                <div className="relative flex items-center justify-center w-10/12 h-full p-5 pt-10 text-xl bg-gray-100 my-28 sm:w-144 rounded-2xl">
                    {children}
                </div>
       </div>
        </>
    )
}

export default withRouter(InitialPreferences)