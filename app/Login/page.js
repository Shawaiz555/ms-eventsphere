"use client";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page() {
  const [loginUser, setLoginUser] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [role, setRole] = useState("user"); // Track the selected role
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);

  const route = useRouter();

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

  const adminLogin = async () => {
    try {
      const response = await fetch("/Api/AdminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: loginUser.Name,
          email: loginUser.Email,
          password: loginUser.Password,
          role: "admin",
        }),
      });

      if (!response.ok) {
        toast.error("Failed to login as Admin");
        return;
      }
      toast.success("Logged In Successfully as Admin!");
      resetForm();
      route.push("/Dashboard");
    } catch (error) {
      console.error("Error during Admin login:", error);
      toast.error("An error occurred during Admin login");
    }
  };

  const userLogin = async () => {
    try {
      const response = await fetch("/Api/UserLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: loginUser.Name,
          email: loginUser.Email,
          password: loginUser.Password,
          role: "user",
        }),
      });

      if (!response.ok) {
        toast.error("Failed to login as User");
        return;
      }
      toast.success("Logged In Successfully as User!");
      resetForm();
      route.push("/Home");
    } catch (error) {
      console.error("Error during User login:", error);
      toast.error("An error occurred during User login");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (emailError === "Email is valid") {
      if (loginUser.Name && loginUser.Email && loginUser.Password) {
        if (role === "admin") {
          await adminLogin();
        } else if (role === "user") {
          await userLogin();

        }
      } else {
        toast.error("Please fill in all fields.");
      }
    }
  };

  const resetForm = () => {
    setLoginUser({ Name: "", Email: "", Password: "" });
    setEmailError("");
    setIsEmailValid(null);
  };

  let roleText = role === "admin" ? "Admin" : "User";

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
          ></Image>
        </div>
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleLogin}
            className="w-full px-5 lg:px-8 flex flex-col py-14"
          >
            <label className="text-2xl lg:text-4xl font-serif text-center tracking-wide my-5">
              Login Form
            </label>
            <div className="w-full grid grid-cols-1 gap-8 my-10">
              <div>
                <h1 className="mb-3 ml-1 font-semibold">Name:</h1>
                <TextField
                  className="w-full bg-white"
                  variant="outlined"
                  value={loginUser.Name}
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, Name: e.target.value })
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
                  value={loginUser.Email}
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
                  value={loginUser.Password}
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, Password: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <h1 className="mb-3 ml-1 font-semibold">Role:</h1>
                <select
                  className="w-full bg-white border border-gray-300 rounded-md text-md tracking-wide font-semibold p-2 py-5"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
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
                Login as {roleText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
