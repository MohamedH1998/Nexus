import React, { useState, useEffect } from 'react'
import { AiFillCheckCircle} from 'react-icons/ai'
import { IoSettings } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import Avatar2 from '../../assets/images/PNG/Avatar1.png'
import RenderSmoothImage from '../RenderSmoothImages'
import { Disclosure, Transition } from '@headlessui/react'

import { BsChevronRight } from 'react-icons/bs'
import  { withRouter} from 'react-router-dom'



const Profile = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 640);
  
  const updateMedia = () => {
    setDesktop(window.innerWidth > 640);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
    return (
        <div className="pt-4 bg-blue-darkest">
          <div className="flex flex-col items-center justify-start w-full px-8 py-10 bg-white rounded-t-4xl sm:rounded-4xl">
            <div className="flex items-center justify-start w-full">
                <RenderSmoothImage src={Avatar2} className="w-4/12" alt=""/>
                <div>
                  <h1 className="text-2xl font-semibold">John Doe</h1>
                </div>
            </div>
            <div className="w-full">
            <hr className="w-full my-10 bg-black"/>
              <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
                          <div className="px-4">
                          <h3 className="text-xl">Location</h3>
                          <span className="inline-block w-full px-8 py-4 my-2 text-lg text-black border-2 border-gray-100 font-semi rounded-xl bg-blue-lightest">UK</span>
                          </div>

                          <div className="px-4 pt-2 mt-5 ">
                          <h3 className="text-xl">Level of Seniority</h3>
                          <span className="inline-block w-full px-8 py-4 my-2 text-lg text-black border-2 border-gray-100 font-semi rounded-xl bg-blue-lightest">Junior</span>
                          </div>

                          <div className="px-4 pt-2 mt-5 ">
                          <h3 className="text-xl">Relevant Roles</h3>
                          <span className="inline-block w-full px-8 py-4 my-2 text-lg text-black border-2 border-gray-100 font-semi rounded-xl bg-blue-lightest">Junior</span>
                          </div>

                          <div className="px-4 pt-2 mt-5 ">
                          <h3 className="text-xl">Relevant Industries</h3>
                          <span className="inline-block w-full px-8 py-4 my-2 text-lg text-black border-2 border-gray-100 font-semi rounded-xl bg-blue-lightest">Junior</span>
                          </div>
              </div>
            <hr className="w-full my-5 bg-black"/>
            <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left border-2 border-gray-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span className="my-2 text-xl "><i className="inline-block p-2 mb-1 mr-4 text-3xl text-gray-800 align-middle rounded-md shadow-md bg-blue-lightest"><IoSettings/></i>FAQ</span>
                        <BsChevronRight className={`${open ? 'transform rotate-90' : ''} w-8 h-8 mt-3 text-blue-darkest`}/>
                      </Disclosure.Button>
                      <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0">
                        <Disclosure.Panel className="pt-4 pb-2 text-sm ">
                          <div className="px-4 pt-2 ">
                          <span className="inline-block w-full px-8 py-4 my-2 text-lg text-black text-white border-2 border-gray-100 font-semi rounded-xl bg-blue-darkest">
                            <Link to="/preferences/avatar">Update Preferences</Link>
                          </span>
                          </div>

                          <div className="px-4 pt-2 mt-5 ">
                          <span className="inline-block w-full px-8 py-4 my-2 text-lg text-white bg-red-500 border-2 border-gray-100 font-semi rounded-xl">
                          <Link to="#">Delete Account</Link>

                          </span>
                          </div>

                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>


              <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left border-2 border-gray-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span className="my-2 text-xl "><i className="inline-block p-2 mb-1 mr-4 text-3xl text-gray-800 align-middle rounded-md shadow-md bg-blue-lightest"><IoSettings/></i>Settings</span>
                        <BsChevronRight className={`${open ? 'transform rotate-90' : ''} w-8 h-8 mt-3 text-blue-darkest`}/>
                      </Disclosure.Button>
                      <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0">
                        <Disclosure.Panel className="pt-4 pb-2 text-sm ">
                          <div className="px-4 pt-2 ">
                          <span className="inline-block w-full px-8 py-4 my-2 text-lg text-black text-white border-2 border-gray-100 font-semi rounded-xl bg-blue-darkest">
                            <Link to="/preferences/avatar">Update Preferences</Link>
                          </span>
                          </div>

                          <div className="px-4 pt-2 mt-5 ">
                          <span className="inline-block w-full px-8 py-4 my-2 text-lg text-white bg-red-500 border-2 border-gray-100 font-semi rounded-xl">
                          <Link to="#">Delete Account</Link>

                          </span>
                          </div>

                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>


            </div>
          </div>
      </div>
    )
}

export default withRouter(Profile)
