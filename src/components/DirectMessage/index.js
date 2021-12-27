import React, { useRef, useState, useEffect } from "react"

import axios from 'axios'
import { useHistory } from "react-router-dom"
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

import {useDispatch, useSelector} from 'react-redux'

const Conversations = () => {
	const [username, setUsername] = useState('')
    const didMountRef = useRef(false)
    const [ loading, setLoading ] = useState(true)
    const { currentUser: user } = useSelector(state => state.user)


    const history = useHistory()
  
  
  
    useEffect(() => {
      if (!didMountRef.current) {
        didMountRef.current = true
  
        if (!user || user === null) {
          history.push("/")
          return
        }
        
        // Get-or-Create should be in a Firebase Function
        axios.get(
          'https://api.chatengine.io/users/me/',
          { headers: { 
            "project-id": process.env.REACT_APP_CHAT_ENGINE_ID_SECOND,
            "user-name": process.env.REACT_APP_CHAT_ENGINE_USERNAME,
            "user-secret": user.uid
          }}
        )
  
        .then(() => setLoading(false))
  
        .catch(e => {
          let formdata = new FormData()
          formdata.append('email', process.env.REACT_APP_CHAT_ENGINE_USERNAME)
          formdata.append('username', process.env.REACT_APP_CHAT_ENGINE_USERNAME)
          formdata.append('secret', process.env.REACT_APP_CHAT_ENGINE_PASSWORD)
          })
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
      }
    }, [user, history])
    
  
    if (!user || loading) return <div />



	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [process.env.REACT_APP_CHAT_ENGINE_USERNAME] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
        <>
        <h1>HI THEREEEEEEEEE</h1>
		<ChatEngine
			height='100vh'
			userName={process.env.REACT_APP_CHAT_ENGINE_USERNAME}
			userSecret={process.env.REACT_APP_CHAT_ENGINE_PASSWORD}
			projectID={process.env.REACT_APP_CHAT_ENGINE_ID_SECOND}
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
        </>
	)
}

export default Conversations;