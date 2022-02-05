import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMail, AiOutlineGoogle } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import {
  facebookSignInInitiate,
  googleSignInInitiate,
  loginInitiate,
} from "../../redux/action";
import LoadingPage from "../LoadingPage";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const { email, password } = state;
  const { currentUser } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.user);

  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      history.push("/inbox");
    }
  }, [currentUser, error, history]);

  console.log(error);
  console.log(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  };
  const handleFacebookSignIn = () => {
    dispatch(facebookSignInInitiate());
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start w-full bg-white"
      >
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
        {error && (
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
            <span className="text-red-800">
              You have entered an invalid username or password.
            </span>
          </div>
        )}
        <p className="inline-block w-full py-4 font-semibold text-center text-md text-blue-darkest">
          I've forgotten my password...
        </p>
        <button
          type="submit"
          className="px-8 py-4 text-xl text-white transition duration-500 ease-in-out transform border-none shadow-xl cursor-pointer bg-blue rounded-3xl hover:shadow-inner hover:-translate-x hover:scale-105"
        >
          Login
        </button>
      </form>
      <div className="flex items-center w-full text-center mt-7">
        <hr className="w-full border-gray-400 rounded-md border-1" />
        <label className="block w-full text-lg font-medium text-gray-600">
          OR
        </label>
        <hr className="w-full border-gray-400 rounded-md border-1" />
      </div>
      <div className="flex justify-center w-full mt-7">
        <button
          onClick={handleFacebookSignIn}
          className="px-8 py-4 mr-5 text-xl text-white transition duration-500 ease-in-out transform border-none shadow-xl cursor-pointer bg-blue-darkest rounded-xl hover:shadow-inner hover:-translate-x hover:scale-105"
        >
          Facebook
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="px-8 py-4 text-xl text-white transition duration-500 ease-in-out transform bg-red-500 border-none shadow-xl cursor-pointer rounded-xl hover:shadow-inner hover:-translate-x hover:scale-105"
        >
          Google
        </button>
      </div>
      <p className="inline-block w-full py-4 font-semibold text-center text-black text-md">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-darkest">
          Register
        </Link>
      </p>
    </>
  );
};

export default Login;
