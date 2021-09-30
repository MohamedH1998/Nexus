import React from 'react'

import img1 from '../../assets/images/Conversation.gif'
import RenderSmoothImage from '../RenderSmoothImages'

const LandingPage = ({children}) => {
    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen sm:flex-row sm:pr-20 bg-blue-darkest">
            <div className="relative flex flex-col items-center justify-start w-screen h-auto py-10 mt-10 md:mt-0 md:pt-0">
                <RenderSmoothImage src={img1} className="w-2/3 max-w-lg md:w-full" wh={'w-2/3'}alt="alt"/>
                <h1 className="absolute pb-3 my-2 text-5xl font-bold tracking-widest text-white left-50 top-3/4">NEXUS</h1>
                <h4 className="absolute pt-3 text-base text-center text-gray-300 mt-14 left-50 top-3/4 md:mt-14">the point at which tech heads meet</h4>
            </div>
            <div className="flex flex-col items-center justify-start w-full px-8 py-10 mt-20 bg-white sm:my-10 sm:w-9/12 rounded-t-4xl sm:rounded-4xl">
                {children}
            </div>
        </div>
    ) 
}

export default LandingPage