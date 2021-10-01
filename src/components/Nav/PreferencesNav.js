import React, { useState } from "react";
import { IoChatbubblesOutline } from 'react-icons/io5'
import  { withRouter} from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav className="bg-blue-darkest">
        <div className="w-full px-4 py-4 sm:px-6 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-center w-full">
                <i className="w-8 h-8 mb-4 text-6xl text-white xs:text-7xl"><IoChatbubblesOutline/></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Nav);
