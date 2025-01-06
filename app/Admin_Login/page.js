"use client";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function page() {
  const [loginUser, setLoginUser] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const router = useRouter()

  const emailValidation = (em) => {
    setLoginUser({ ...loginUser, Email: em });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(em)) {
      setEmailError("Email is valid");
      setIsEmailValid(true);
    } else {
      setEmailError("Email is Invalid");
      setIsEmailValid(false);
    }
  };

  const handleAdmin = (e) => {
    e.preventDefault();

    if (emailError === "Email is valid") {
      if (loginUser.Name && loginUser.Email && loginUser.Password) {
        alert("Loged In Successfylly!!!...");
        router.push('/Dashboard');
        setLoginUser({
          Name: "",
          Email: "",
          Password: "",
        });
        
      }
    }
  };

  return (
    <div>
      <div className="w-full flex justify-center mb-16 mt-16">
        <form
          className="w-[90%] md:w-[60%] lg:w-[40%] px-5 lg:px-8 bg-[#fff000] flex flex-col mt-5 shadow-xl rounded-2xl py-14"
        >
          <label className="text-2xl lg:text-4xl  font-serif text-center tracking-wide my-5">
            Login Form
          </label>
          <div className="w-full grid grid-cols-1 gap-8 my-10">
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Name:</h1>
              <TextField
                id="outlined-basic"
                label="Name"
                className='w-full bg-white'
                variant="outlined"
                value={loginUser.Name}
                onChange={(e) =>
                  setLoginUser({ ...loginUser, Name: e.target.value })
                }
                required
              />
            </div>

            <div className="flex flex-col">
              <h1 className="mb-3 ml-1 font-semibold">Email:</h1>
              <TextField
                id="outlined-basic"
                type="email"
                label="Email"
                className='w-full bg-white'
                variant="outlined"
                value={loginUser.Email}
                onChange={(e) => emailValidation(e.target.value)}
                required
              />
              <p
                className={`text-md tracking-wider font-serif ${isEmailValid === true ? "text-green-500" : isEmailValid === false ? "text-red-500" : ""}`}>
                {emailError}
              </p>
            </div>
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Password:</h1>
              <TextField
                id="outlined-basic"
                label="Password"
                className='w-full bg-white'
                variant="outlined"
                value={loginUser.Password}
                onChange={(e) =>
                  setLoginUser({ ...loginUser, Password: e.target.value })
                }
                required
              />
            </div>

          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              variant="outlined"
              className="py-2 px-8 border-black text-white bg-black tracking-wider rounded-xl hover:scale-95"
              onClick={handleAdmin}
            >
              Login as Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
