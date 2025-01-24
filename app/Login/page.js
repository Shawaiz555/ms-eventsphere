"use client";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page() {
  const [loginUser, setLoginUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });
  const [Role, setRole] = useState("user");
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Sign In forms

  const route = useRouter();

  const emailValidation = (em) => {
    if (isSignUp) {
      setLoginUser({ ...loginUser, email: em });
    } else {
      setSignInUser({ ...signInUser, email: em });
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(em)) {
      setEmailError("Email is valid");
      setIsEmailValid(true);
    } else {
      setEmailError("Email is Invalid");
      setIsEmailValid(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(signInUser);
    if (emailError === "Email is valid") {
      if (signInUser.email && signInUser.password) {
        try {
          const payload = { ...signInUser, role: Role };
          const response = await fetch("/Api/Auth/SignIn", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          const data = await response.json();

          if (response.ok) {
            toast.success(
              `${data.role === "admin" ? "Admin" : "User"} Signed In Successfully!`
            );
            setSignInUser({ email: "", password: "" });
            if (data.role === "admin") {
              route.push("/Dashboard");
            } else {
              route.push("/Home");
            }
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          console.error("Error during Sign In:", error);
          toast.error("An error occurred during Sign In");
        }
      } else {
        toast.error("Please fill in all fields.");
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(loginUser);
    console.log(Role);
    if (emailError === "Email is valid") {
      if (loginUser.name && loginUser.email && loginUser.password) {
        try {
          const payload1 = { ...loginUser, role: Role };
          const response = await fetch("/Api/Auth/SignUp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload1),
          });

          const data = await response.json();

          if (response.ok) {
            toast.success(
              `${data.role === "admin" ? "Admin" : "User"} Registered Successfully!`
            );
            setLoginUser({ name: "", email: "", password: "" });
            if (data.role === "admin") {
              route.push("/Dashboard");
            } else {
              route.push("/Home");
            }
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          console.error("Error during Sign Up:", error);
          toast.error("An error occurred during Sign Up");
        }
      } else {
        toast.error("Please fill in all fields.");
      }
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setEmailError("");
    setIsEmailValid(null);
  };

  return (
    <div className="w-full flex justify-center bg-[#fff000]">
      <div className="w-[80%] flex flex-col lg:flex-row mb-20 mt-28 bg-white rounded-2xl shadow-xl">
        <div className="w-full lg:w-1/2 hidden lg:block">
          <Image
            src="/Images/loginSideImg.jpg"
            width={300}
            height={300}
            alt="Login Side Image"
            className="w-full h-full rounded-l-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2">
          
          {isSignUp ? (
            <form
              onSubmit={handleLogin}
              className="w-full px-5 lg:px-8 flex flex-col py-14"
            >
              <label className="text-2xl lg:text-4xl font-serif text-center tracking-wide my-5">
                Sign Up Form
              </label>
              <div className="w-full grid grid-cols-1 gap-8 my-10">
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Name:</h1>
                  <TextField
                    className="w-full bg-white"
                    variant="outlined"
                    value={loginUser.name}
                    onChange={(e) =>
                      setLoginUser({ ...loginUser, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Email:</h1>
                  <TextField
                    type="email"
                    className="w-full bg-white"
                    variant="outlined"
                    value={loginUser.email}
                    onChange={(e) => emailValidation(e.target.value)}
                    required
                  />
                  <p
                    className={`text-md tracking-wider font-serif ${
                      isEmailValid === true
                        ? "text-green-500"
                        : isEmailValid === false
                          ? "text-red-500"
                          : ""
                    }`}
                  >
                    {emailError}
                  </p>
                </div>
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Password:</h1>
                  <TextField
                    type="password"
                    className="w-full bg-white"
                    variant="outlined"
                    value={loginUser.password}
                    onChange={(e) =>
                      setLoginUser({ ...loginUser, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Role:</h1>
                  <select
                    value={Role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-white py-3 px-2 border rounded-md"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="py-3 px-8 border-black text-white bg-black tracking-wider rounded-xl hover:scale-95"
                >
                  Sign Up
                </button>
              </div>
            </form>
          ) : (
            <form
              onSubmit={handleSignIn}
              className="w-full px-5 lg:px-8 flex flex-col py-14"
            >
              <label className="text-2xl lg:text-4xl font-serif text-center tracking-wide my-5">
                Sign In Form
              </label>
              <div className="w-full grid grid-cols-1 gap-8 my-10">
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Email:</h1>
                  <TextField
                    type="email"
                    className="w-full bg-white"
                    variant="outlined"
                    value={signInUser.email}
                    onChange={(e) => emailValidation(e.target.value)}
                    required
                  />
                  <p
                    className={`text-md tracking-wider font-serif ${
                      isEmailValid === true
                        ? "text-green-500"
                        : isEmailValid === false
                          ? "text-red-500"
                          : ""
                    }`}
                  >
                    {emailError}
                  </p>
                </div>
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Password:</h1>
                  <TextField
                    type="password"
                    className="w-full bg-white"
                    variant="outlined"
                    value={signInUser.password}
                    onChange={(e) =>
                      setSignInUser({ ...signInUser, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <h1 className="mb-3 ml-1 font-semibold">Role:</h1>
                  <select
                    value={Role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-white py-3 px-2 border rounded-md"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="py-3 px-8 border-black text-white bg-black tracking-wider rounded-xl hover:scale-95"
                >
                  Sign In
                </button>
              </div>
            </form>
          )}
          <div className="text-center mb-5">
            <p onClick={toggleForm}>Did not have an Account? Click here to <b className="ml-1 hover:cursor-pointer">{isSignUp ? "Sign In" : "Sign Up"}</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}
