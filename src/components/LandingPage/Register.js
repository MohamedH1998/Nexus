import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory} from 'react-router-dom'

import { AiOutlineMail, AiOutlineGoogle } from 'react-icons/ai'
import { BiLockOpenAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { registerInitiate} from '../../redux/action'

const Register = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })
    const history = useHistory()
    const dispatch = useDispatch()
    const { currentUser} = useSelector((state) => state.user)
    
    useEffect(() => {
        if (currentUser) {
            history.push('/preferences/location')
        }
    }, [currentUser, history])

    const {displayName, email, password, passwordConfirm} = state

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== passwordConfirm) {
            return
        }
        dispatch(registerInitiate(email, password, displayName))
        setState({email: "", displayName: "", password: "", passwordConfirm: ""})
    }

    const handleChange= (e) => {
        let {name, value} = e.target
        setState({...state, [name]: value})
    }

    // const handleGoogleSignIn = () => {}
    // const handleFacebookSignIn = () => {}
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start w-full bg-white">
            <span className="inline-block w-full px-3 py-2 my-2 border-2 rounded-xl"><i className="inline-block py-2 text-2xl align-bottom text-blue"><AiOutlineMail/></i><input name="displayName" onChange={handleChange} type="displayName" value={displayName} required className="w-10/12 py-2 pl-3 ml-2 text-lg" placeholder="Insert a display name"/></span>
            <span className="inline-block w-full px-3 py-2 my-2 border-2 rounded-xl"><i className="inline-block py-2 text-2xl align-bottom text-blue"><AiOutlineMail/></i><input name="email" onChange={handleChange} type="email" value={email} required className="w-10/12 py-2 pl-3 ml-2 text-lg" placeholder="Insert your email"/></span>
            <span className="inline-block w-full px-3 py-2 my-2 border-2 rounded-xl"><i className="inline-block py-2 text-2xl align-bottom text-blue"><BiLockOpenAlt/></i><input name="password" onChange={handleChange} type="password" value={password} required className="w-10/12 py-2 pl-3 ml-2 text-lg " placeholder="Insert your password"/></span>
            <span className="inline-block w-full px-3 py-2 my-2 border-2 rounded-xl"><i className="inline-block py-2 text-2xl align-bottom text-blue"><BiLockOpenAlt/></i><input name="passwordConfirm" onChange={handleChange} type="password" value={passwordConfirm} required className="w-10/12 py-2 pl-3 ml-2 text-lg " placeholder="Confirm your password"/></span>
            <p className="inline-block w-full py-4 font-semibold text-center text-md text-blue-darkest">I've forgotten my password...</p>
            <button type="submit" className="px-8 py-4 text-xl text-white transition duration-500 ease-in-out transform border-none shadow-xl cursor-pointer bg-blue rounded-3xl hover:shadow-inner hover:-translate-x hover:scale-105">Register</button>
        </form>
    ) 
}

export default Register
