import React from 'react'
import { TiTick } from 'react-icons/ti'
import RenderSmoothImage from '../../RenderSmoothImages'

const Conversation = ({Avatar, unreadMessages, name, activityHistory, message,  }) => {
    return (
        <div className="relative mb-2">
            <figure className="flex p-0 bg-gray-100 rounded-xl">
            <div className="flex flex-col items-center w-4/12 h-full sm:w-4/12">
                <RenderSmoothImage src={Avatar} alt=""/>
                <span className="w-1/2 p-2 mb-2 font-semibold text-center rounded-full bg-blue-lightest">{unreadMessages}</span>
            </div>
            <div className="w-8/12 py-8 pr-2 space-y-4 text-left">
                <blockquote>
                <p className="text-lg font-semibold">{name}</p>
                <p className="font-semibold text-md text-blue">{activityHistory}</p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sm text-gray-500 line-clamp-2">
                {message}
                </div>
                </figcaption>
            </div>
            <i className="absolute h-auto p-2 text-xl rounded-full right-3 top-5 bg-blue-light"><TiTick/></i>
            </figure>
        </div>
    )
}

export default Conversation
