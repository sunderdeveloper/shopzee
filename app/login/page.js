"use client";

import { FiLogIn } from "react-icons/fi";
import { FaUser, FaEye, FaArrowRight, FaEnvelope, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Toast from "@/components/UI/Toast";

const Login = () => {
  const [signUp, SetSignUp] = useState(false);
  const [showPswd, SetShowPswd] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showToast, SetShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState("success")

  const validateForm = () =>{
      if(!email || !password){
        return "All fields are required"
      }
      if(signUp && !name){
        return "Name is required"
      }
      if(!email.includes("@")){
        return "Invalid email format"
      }
      if(password.length < 6){
        return "Password must be atleast 6 characters"
      }
      return null
  }

  const handleSubmit = () => {
    const error = validateForm()

    if(error){
      setToastMessage(error)
      setToastType("error")
      SetShowToast(true)
    }
    else{
      setToastMessage(
        signUp ? "Account Created Successfully!" : "Login Successful"
      )
      setToastType("success")
      SetShowToast(true)

      setEmail("")
      setPassword("")
      signUp && setName("")
    }

    setTimeout(() => {
      SetShowToast(false)
    }, 3000)
  }

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="shadow-[0px_0px_10px_#cccccc4f] p-8 bg-gray-200/20">
          {signUp ? (
            <FaUser className="text-center text-xl mb-4 text-white font-bold w-10 h-10 bg-orange-500 p-3 rounded-4xl  mx-auto" />
          ) : (
            <FiLogIn className="text-center text-xl mb-4 text-white font-bold w-10 h-10 bg-orange-500 p-3 rounded-4xl  mx-auto" />
          )}
          <h3 className="text-center font-semibold text-2xl text-orange-500 mb-2">
            {signUp ? "Sign Up" : "Login"}
          </h3>
          
            <p className="text-center text-sm text-gray-400">
              {signUp ? "Create your account in seconds" : "Please enter your login details to sign in"}
            </p>
          
          <div className="mt-8">
            {signUp ? (
              <div className="flex items-center justify-between p-2 border-b border-b-gray-300 w-75 mb-4 gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 border-0 outline-0 text-gray-400 text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span>
                  <FaUser className="text-gray-400" />
                </span>
              </div>
            ) : (
              ""
            )}
            <div className="flex items-center justify-between p-2 border-b border-b-gray-300 w-75 mb-4 gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border-0 outline-0 text-gray-400 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>
                <FaEnvelope className="text-gray-400" />
              </span>
            </div>
            <div className="flex items-center justify-between p-2 border-b border-b-gray-300 w-75 mb-4 gap-2">
              <input
                type={showPswd ? "text": "password"}
                placeholder="Password"
                className="flex-1 border-0 outline-0 text-gray-400 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={() => SetShowPswd(!showPswd)}>
                {showPswd ? <FaEye className="text-gray-400 cursor-pointer" /> : <FaEyeSlash className="text-gray-400 cursor-pointer" />}
              </span>
            </div>
            {signUp ? (
              ""
            ) : (
              <div className="flex items-center justify-between my-8">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <label className="text-sm text-gray-400">
                    Keep me logged in
                  </label>
                </div>
                <p className="text-end text-orange-500 text-sm cursor-pointer">
                  Forgot password?
                </p>
              </div>
            )}
          </div>
          <button className="w-full flex items-center py-2 px-6 gap-2 bg-orange-500 text-white rounded-md justify-center text-sm cursor-pointer mt-8" 
          onClick={handleSubmit}>
            {signUp ? "Create Account" : "Login"}
          </button>
          <p className="mt-6 text-center text-sm text-gray-500">
            {signUp ? "Already a member?" : "Dont have an account?"}{" "}
            <span
              className="text-orange-500 cursor-pointer"
              onClick={() => SetSignUp(!signUp)}
            >
              {signUp ? "Login" : "Sign up"}
            </span>
          </p>
        </div>
      </div>
      <Toast show={showToast} message={toastMessage} type={toastType}/>
    </>
  );
};
export default Login;
