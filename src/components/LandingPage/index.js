import React from 'react'
import img1 from '../../assets/images/Conversation.gif'
import { HiOutlineMail} from 'react-icons/hi'
import { BiLockOpenAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import RenderSmoothImage from '../RenderSmoothImages'


const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen sm:flex-row sm:pr-20 bg-blue-darkest">
            <div className="relative flex flex-col items-center justify-start w-screen h-auto py-10 mt-10 md:mt-0 md:pt-0">
                <RenderSmoothImage src={img1} className="w-2/3 max-w-lg md:w-full" alt="alt"/>
                <h1 className="absolute pb-3 my-2 text-5xl font-bold tracking-widest text-white left-50 top-3/4">NEXUS</h1>
                <h4 className="absolute pt-3 text-base text-center text-gray-300 mt-14 left-50 top-3/4 md:mt-14">the point at which tech heads meet</h4>
            </div>
            <div className="flex flex-col items-center justify-start w-full px-8 py-10 mt-20 bg-white sm:my-10 h-4/6 sm:w-9/12 sm:h-1/2 rounded-t-4xl sm:rounded-4xl">
                <h2 className="text-lg font-semibold sm:text-xl md:text-2xl">Welcome to Nexus!</h2>
                <form className="flex flex-col items-center justify-start w-full bg-white">
                    <span className="inline-block w-full px-3 py-2 my-3 border-2 rounded-xl"><i className="inline-block py-2 text-2xl align-bottom text-blue"><HiOutlineMail/></i><input type="email" className="w-3/4 py-2 pl-3 ml-2 text-lg" placeholder="Insert your email"/></span>
                    <span className="inline-block w-full px-3 py-2 border-2 rounded-xl"><i className="inline-block py-2 text-2xl align-bottom text-blue"><BiLockOpenAlt/></i><input type="password" className="py-2 pl-3 ml-2 text-lg " placeholder="Insert your password"/></span>
                    <p className="inline-block w-full py-4 font-semibold text-center text-md text-blue-darkest">I've forgotten my password...</p>
                    <Link to="/inbox" className="w-48 px-4 py-3 text-2xl font-bold tracking-wide text-center text-white rounded-3xl bg-blue">Log in</Link>
                    <p className="inline-block w-full py-4 font-semibold text-center text-black text-md">Don't have an account? <span className="text-blue-darkest">Register</span></p>
                </form>
            </div>
        </div>
    ) 
}

export default LandingPage