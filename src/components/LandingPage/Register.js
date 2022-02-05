import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { AiOutlineMail, AiOutlineGoogle } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { registerInitiate } from "../../redux/action";
import { chatEngineData } from "../../utils/chatEngine";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  //   const { error } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      history.push("/preferences/location");
    }
  }, [currentUser, history]);

  const { displayName, email, password, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-start w-full bg-white"
    >
      <span className="inline-block w-full px-3 py-2 my-2 border-2 rounded-xl">
        <i className="inline-block py-2 text-2xl align-bottom text-blue">
          <AiOutlineMail />
        </i>
        <input
          name="displayName"
          onChange={handleChange}
          type="displayName"
          value={displayName}
          required
          className="w-10/12 py-2 pl-3 ml-2 text-lg"
          placeholder="Insert a display name"
        />
      </span>
      <span className="inline-block w-full px-3 py-2 my-2 border-2 rounded-xl">
        <i className="inline-block py-2 text-2xl align-bottom text-blue">
          <AiOutlineMail />
        </i>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          value={email}
          required
          className="w-10/12 py-2 pl-3 ml-2 text-lg"
          placeholder="Insert your email"
        />
      </span>
      <span className="inline-block w-full px-3 py-2 my-2 border-2 rounded-xl">
        <i className="inline-block py-2 text-2xl align-bottom text-blue">
          <BiLockOpenAlt />
        </i>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          value={password}
          required
          className="w-10/12 py-2 pl-3 ml-2 text-lg "
          placeholder="Insert your password"
        />
      </span>
      <span className="inline-block w-full px-3 py-2 my-2 border-2 rounded-xl">
        <i className="inline-block py-2 text-2xl align-bottom text-blue">
          <BiLockOpenAlt />
        </i>
        <input
          name="passwordConfirm"
          onChange={handleChange}
          type="password"
          value={passwordConfirm}
          required
          className="w-10/12 py-2 pl-3 ml-2 text-lg "
          placeholder="Confirm your password"
        />
      </span>
      {/* {error && (
        <div className="flex items-center w-full px-6 py-4 mx-2 my-4 text-lg bg-red-200 rounded-md xl:w-2/4">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 mr-3 text-red-600 sm:w-5 sm:h-5"
          >
            <path
              fill="currentColor"
              d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
            ></path>
          </svg>
          <span className="text-red-800">Something went wrong, try again.</span>
        </div>
      )} */}
      <button
        type="submit"
        className="px-8 py-4 text-xl text-white transition duration-500 ease-in-out transform border-none shadow-xl cursor-pointer bg-blue rounded-3xl hover:shadow-inner hover:-translate-x hover:scale-105"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
