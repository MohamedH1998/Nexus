import React from 'react'
import './LoadingPage.css'

const LoadingPage = () => {
    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-blue-lightest">
          <div className="flex flex-col items-center px-5 py-2 border rounded-lg ">
            <div className="relative block w-20 mt-2 h-7 loader-dots">
              <div className="absolute top-0 w-5 h-5 mt-1 rounded-full bg-blue-darkest"></div>
              <div className="absolute top-0 w-5 h-5 mt-1 rounded-full bg-blue-darkest"></div>
              <div className="absolute top-0 w-5 h-5 mt-1 rounded-full bg-blue-darkest"></div>
              <div className="absolute top-0 w-5 h-5 mt-1 rounded-full bg-blue-darkest"></div>
            </div>
            <div className="mt-6 ml-5 text-3xl font-light text-center text-black">
              Loading...
            </div>
          </div>
          </div>
    )
}

export default LoadingPage
