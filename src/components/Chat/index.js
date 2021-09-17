import React from 'react'
import Avatar1 from '../../assets/images/PNG/Avatar8.png'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import RenderSmoothImage from '../RenderSmoothImages'


const Chat = () => {
    return (
        <div className="flex flex-col justify-start w-full h-screen px-5 py-10 bg-gray-50">
            <div className="flex items-center justify-start w-full">
                <RenderSmoothImage src={Avatar1} className="w-1/4" alt=""/>
                <div className="">
                <h1 className="text-xl font-semibold">Harry Lynbeck</h1>
                <small className="font-semibold text-green-700">Online now</small>
                </div>
                <button className="flex ml-auto text-4xl text-blue"><AiOutlineInfoCircle/></button>
            </div>
            <div className="h-screen overflow-y-scroll">
                <p className="mb-10 text-sm font-semibold text-center text-gray-500">17th September 2021</p>
                <div className="flex flex-col mb-2">
            <p className="p-4 text-sm text-black bg-gray-200 rounded-tr-xl rounded-br-xl rounded-bl-xl">
                I can't seem to find my telescope anywhere, can you please help me find it?
            </p>
            <span className="my-3 ml-3 text-xs">15:59</span>
            </div>
            <div className="flex flex-col mb-2">
            <p className="p-4 text-sm text-black bg-blue-lightest rounded-tl-xl rounded-bl-xl rounded-br-xl">
                I can't seem to find my telescope anywhere, can you please help me find it?
            </p>
            <span className="self-end my-3 mr-4 text-xs">15:59</span>
            </div>
            </div>
        </div>
    )
}

export default Chat
