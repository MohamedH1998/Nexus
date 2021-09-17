import React, { useState, useEffect } from 'react'
import { AiOutlineSearch} from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'
import Chat from '../Chat'
import { Link } from 'react-router-dom'
import Conversation from './Conversation'
import Avatar1 from '../../assets/images/PNG/Avatar8.png'
import Avatar2 from '../../assets/images/PNG/Avatar1.png'




const Conversations = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 640);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 640);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
    return (
      <div className="flex flex-row">
      <div className={`flex flex-col justify-start ${isDesktop ? 'w-8/12 md:w-5/12' : 'w-full'} h-screen px-5 py-10`}>
        <h1 className="py-2 text-2xl font-semibold"><Link to="/"><i className="inline-block px-5 mt-5 text-3xl align-bottom"><BsChevronLeft/></i></Link>Inbox</h1>
        <span className="inline-block w-full px-3 py-2 my-3 border-2 rounded-xl"><i className="inline-block py-2 text-lg align-bottom text-blue"><AiOutlineSearch/></i><input type="email" className="w-3/4 py-2 pl-3 text-xs " placeholder="Search for a conversation"/></span>
        <Link to="inbox/1">
        <span className="block">
        <Conversation Avatar={Avatar1} unreadMessages="2" name="Harry Lynbeck" activityHistory="2 hours" message="I can't seem to find my telescope anywhere, can you please help me find it?"/>
        </span></Link>
        <Link to="inbox/1">
        <span className="block">
        <Conversation Avatar={Avatar2} unreadMessages="9" name="Yasmin Farah" activityHistory="9 hours" message="Sup dawg, what are you saying, hope things are going well, and if they're not "/>
        </span></Link>
      </div>

      {isDesktop && <Chat/>}
      </div>
    )
}

export default Conversations
