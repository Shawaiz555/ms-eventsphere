"use client";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function page() {
  const [signUp, setSignUp] = useState({
        Name: "",
        Email: "",
        Password:"",
        ConfirmPassword:"",
    
  });
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);

  const emailValidation = (em) => {
    setSignUp({ ...signUp, Email: em });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(em)) {
      setEmailError("Email is valid");
      setIsEmailValid(true);
    } else {
      setEmailError("Email is Invalid");
      setIsEmailValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError === "Email is valid" && signUp.Password == signUp.ConfirmPassword) {
      if (signUp.Name && signUp.Email && signUp.Password && signUp.ConfirmPassword) {
        alert("Signed Up Successfylly!!!...");
        setSignUp({
          Name: "",
          Email: "",
          Password:"",
          ConfirmPassword:"",
        });
      }
    }
  };

  return (
    <div>
      <div className="w-full flex justify-center mb-10 mt-10">
        <form
          className="w-[90%] lg:w-[40%] px-5 lg:px-8 bg-[#fff000] flex flex-col mt-5 shadow-xl rounded-2xl py-14"
          onSubmit={handleSubmit}
        >
          <label className="text-2xl lg:text-4xl  font-serif text-center tracking-wide my-5">
            Sign Up Form
          </label>
          <div className="w-full grid grid-cols-1 gap-8 my-10">
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Name:</h1>
              <TextField
                id="outlined-basic"
                label="Name"
                className='w-full bg-white'
                variant="outlined"
                value={signUp.Name}
                onChange={(e) =>
                   setSignUp({ ...signUp, Name: e.target.value })
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
                value={signUp.Email}
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
                value={signUp.Password}
                onChange={(e) =>
                    setSignUp({ ...signUp, Password: e.target.value })
                }
                required
              />
            </div>
            <div>
              <h1 className="mb-3 ml-1 font-semibold">Confirm Password:</h1>
              <TextField
                id="outlined-basic"
                label='ConfirmPassword'
                className='w-full bg-white'
                variant="outlined"
                value={signUp.ConfirmPassword}
                onChange={(e) =>
                    setSignUp({ ...signUp, ConfirmPassword: e.target.value })
                }
                required
              />
            </div>
            
            
          </div>
          <div className="flex justify-end mt-5">
            <Button
              type="submit"
              variant="outlined"
              className="py-2 px-8 border-black text-white bg-black tracking-wider rounded-xl hover:scale-95"
            >
              Sign Up
            </Button>
          </div>
          <div className="mt-5">
            <p className="text-md tracking-wide lg:text-lg">If you have already signed up before Login from here <Link href="/Login" className="text-white ml-2 font-serif hover:underline">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
