import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { IoChatbubblesOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-blue-darkest">
        <div className="w-full px-4 py-4 sm:px-6 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <Link to="/"><i className="w-8 h-8 text-6xl text-white xs:text-7xl"><IoChatbubblesOutline/></i></Link>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <a
                    href="#"
                    className="px-3 py-2 text-xl font-medium text-white rounded-md hover:bg-gray-700"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-xl font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Friends
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-xl font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Inbox
                  </a>

                  <a
                    href="#"
                    className="px-3 py-2 text-xl font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 mr-4 text-white border-2 border-indigo-600 rounded-md bg-blue-darkest hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 mr-2 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="block px-3 py-2 text-lg font-medium text-white rounded-md hover:bg-gray-700"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-lg font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Friends
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-lg font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Inbox
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 text-lg font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Profile
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
