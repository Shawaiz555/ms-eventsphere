"use client";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function page() {
  const [login, setLogin] = useState({
        Name: "",
        Email: "",
        Password:"",
  });
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);

  const emailValidation = (em) => {
    setLogin({ ...login, Email: em });
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

    if (emailError === "Email is valid") {
      if (login.Name && login.Email && login.Password) {
        alert("Loged In Successfylly!!!...");
        setLogin({
          Name: "",
          Email: "",
          Password:"",
        });
      }
    }
  };

  return (
    <div>
      <div className="w-full flex justify-center mb-10 mt-10">
        <form
          className="w-[90%] lg:w-[50%] px-5 lg:px-8 flex flex-col mt-5 shadow-xl rounded-2xl py-14"
          onSubmit={handleSubmit}
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
                className='w-full'
                variant="outlined"
                value={login.Name}
                onChange={(e) =>
                    setLogin({ ...login, Name: e.target.value })
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
                className='w-full'
                variant="outlined"
                value={login.Email}
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
                className='w-full'
                variant="outlined"
                value={login.Password}
                onChange={(e) =>
                    setLogin({ ...login, Password: e.target.value })
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
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
